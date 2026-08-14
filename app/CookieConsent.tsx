"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "conoce-zapotlanejo-cookie-consent";

type Consent = "analytics" | "necessary";

export default function CookieConsent() {
  const [choice, setChoice] = useState<Consent | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Consent | null;
    if (saved === "analytics" || saved === "necessary") setChoice(saved);
  }, []);

  function saveConsent(next: Consent) {
    window.localStorage.setItem(STORAGE_KEY, next);
    window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: next }));
    setChoice(next);
  }

  if (choice) return null;

  return (
    <section className="cookie-consent" aria-label="Preferencias de cookies">
      <div>
        <p>Usamos cookies necesarias para que el sitio funcione y, con tu permiso, analítica para mejorar la guía.</p>
        <a href="/cookies">Ver política de cookies</a>
      </div>
      <div className="cookie-actions">
        <button type="button" onClick={() => saveConsent("necessary")}>Solo necesarias</button>
        <button type="button" onClick={() => saveConsent("analytics")}>Aceptar analítica</button>
      </div>
    </section>
  );
}
