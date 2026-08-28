import { NextResponse } from "next/server";

const clean = (value: unknown, limit = 500) =>
  typeof value === "string" ? value.trim().slice(0, limit) : "";

const isValidContact = (value: string) => {
  const normalized = value.toLowerCase();
  if (["hola", "no tengo", "ninguno", "n/a", "na", "test"].includes(normalized)) {
    return false;
  }

  if (value.includes("@")) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
  }

  return value.replace(/\D/g, "").length >= 8;
};

const cleanStringArray = (value: unknown, limit = 80) => {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => clean(item, limit))
    .filter(Boolean)
    .slice(0, 8);
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    // Honeypot check
    if (clean(body.website)) {
      return NextResponse.json({ ok: true }, { status: 201 });
    }

    const type = body.type === "recommendation" ? "recommendation" : "early_access";
    const name = clean(body.name, 80);
    const contact = clean(body.contact, 120);
    const placeName = clean(body.placeName, 120);
    const categories = cleanStringArray(body.categories);
    const category = categories.join(", ") || clean(body.category, 80);
    const placeRelation = clean(body.placeRelation, 120);
    const hasPhysicalLocation = clean(body.hasPhysicalLocation, 20);
    const address = clean(body.address, 180);

    if (!name || !contact) {
      return NextResponse.json(
        { error: "Nombre y contacto son obligatorios" },
        { status: 400 }
      );
    }

    if (!isValidContact(contact)) {
      return NextResponse.json(
        { error: "Escribe un correo válido o un WhatsApp con al menos 8 dígitos" },
        { status: 400 }
      );
    }

    if (body.privacyConsent !== "accepted") {
      return NextResponse.json(
        { error: "Debes aceptar el aviso de privacidad" },
        { status: 400 }
      );
    }

    if (type === "recommendation" && (!placeName || !category || !placeRelation)) {
      return NextResponse.json(
        { error: "Lugar, categoría y relación con el lugar son obligatorios" },
        { status: 400 }
      );
    }

    if (
      type === "recommendation" &&
      !["yes", "no", "unsure"].includes(hasPhysicalLocation)
    ) {
      return NextResponse.json(
        { error: "Indica si el lugar cuenta con establecimiento físico" },
        { status: 400 }
      );
    }

    if (type === "recommendation" && hasPhysicalLocation === "yes" && !address) {
      return NextResponse.json(
        { error: "Agrega el domicilio o una referencia del establecimiento" },
        { status: 400 }
      );
    }

    const now = new Date().toISOString();
    const lead = {
      type,
      name,
      contact,
      origin: clean(body.origin, 80),
      interest: clean(body.interest, 80),
      placeName,
      categories,
      category,
      placeRelation,
      hasPhysicalLocation,
      address: hasPhysicalLocation === "yes" ? address : "",
      note: clean(body.note),
      privacyConsent: "accepted",
      privacyAcceptedAt: now,
      source: "conocezapotlanejo.com",
      createdAt: now,
    };

    console.log("[Conoce Zapotlanejo] Nuevo registro recibido:", {
      type: lead.type,
      hasPlace: Boolean(lead.placeName),
      createdAt: lead.createdAt,
    });

    // Forward to Make.com Webhook if configured
    const makeWebhookUrl = process.env.MAKE_WEBHOOK_URL;
    if (makeWebhookUrl) {
      try {
        const makeResponse = await fetch(makeWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lead),
        });

        if (!makeResponse.ok) {
          console.warn("[Make.com] Webhook returned non-ok status:", makeResponse.status);
        } else {
          console.log("[Make.com] Lead enviado exitosamente a Make.");
        }
      } catch (webhookError) {
        console.error("[Make.com] Error al enviar webhook:", webhookError);
      }
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("lead-create-failed", error);
    return NextResponse.json(
      { error: "No fue posible guardar el registro" },
      { status: 500 }
    );
  }
}
