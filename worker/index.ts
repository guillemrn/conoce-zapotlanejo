/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  MAKE_WEBHOOK_URL?: string;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const clean = (value: unknown, limit = 500) =>
  typeof value === "string" ? value.trim().slice(0, limit) : "";

async function createLead(request: Request, env: Env): Promise<Response> {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    if (clean(body.website)) return Response.json({ ok: true }, { status: 201 });

    const type = body.type === "recommendation" ? "recommendation" : "early_access";
    const name = clean(body.name, 80);
    const contact = clean(body.contact, 120);
    if (!name || !contact) {
      return Response.json({ error: "Nombre y contacto son obligatorios" }, { status: 400 });
    }

    if (body.privacyConsent !== "accepted") {
      return Response.json({ error: "Debes aceptar el aviso de privacidad" }, { status: 400 });
    }

    const origin = clean(body.origin, 80);
    const interest = clean(body.interest, 80);
    const placeName = clean(body.placeName, 120);
    const category = clean(body.category, 80);
    const note = clean(body.note);

    await env.DB.prepare(
      `INSERT INTO leads
        (type, name, contact, origin, interest, place_name, category, note, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'new')`
    ).bind(
      type,
      name,
      contact,
      origin,
      interest,
      placeName,
      category,
      note
    ).run();

    if (env.MAKE_WEBHOOK_URL) {
      try {
        await fetch(env.MAKE_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type,
            name,
            contact,
            origin,
            interest,
            placeName,
            category,
            note,
            source: "conocezapotlanejo.com",
            createdAt: new Date().toISOString(),
          }),
        });
      } catch (webhookErr) {
        console.error("make-webhook-failed", webhookErr);
      }
    }

    return Response.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("lead-create-failed", error);
    return Response.json({ error: "No fue posible guardar el registro" }, { status: 500 });
  }
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/leads" && request.method === "POST") {
      return createLead(request, env);
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    return handler.fetch(request, env, ctx);
  },
};

export default worker;
