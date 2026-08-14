import { NextResponse } from "next/server";

const clean = (value: unknown, limit = 500) =>
  typeof value === "string" ? value.trim().slice(0, limit) : "";

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

    if (!name || !contact) {
      return NextResponse.json(
        { error: "Nombre y contacto son obligatorios" },
        { status: 400 }
      );
    }

    const lead = {
      type,
      name,
      contact,
      origin: clean(body.origin, 80),
      interest: clean(body.interest, 80),
      placeName: clean(body.placeName, 120),
      category: clean(body.category, 80),
      note: clean(body.note),
      createdAt: new Date().toISOString(),
    };

    console.log("[Conoce Zapotlanejo] Nuevo registro:", lead);

    return NextResponse.json({ ok: true, data: lead }, { status: 201 });
  } catch (error) {
    console.error("lead-create-failed", error);
    return NextResponse.json(
      { error: "No fue posible guardar el registro" },
      { status: 500 }
    );
  }
}
