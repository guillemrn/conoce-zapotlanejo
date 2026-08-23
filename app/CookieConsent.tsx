"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

const STORAGE_KEY = "conoce-zapotlanejo-cookie-consent";

type Consent = "analytics" | "necessary";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("cookie-consent-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("cookie-consent-change", callback);
  };
}

function getSnapshot(): Consent | null {
  if (typeof window === "undefined") return null;
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === "analytics" || saved === "necessary" ? saved : null;
}

function getServerSnapshot(): Consent | null {
  return "necessary"; // Prevent SSR banner flash until hydrated client decides
}

export default function CookieConsent() {
  const choice = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function saveConsent(next: Consent) {
    window.localStorage.setItem(STORAGE_KEY, next);
    window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: next }));
  }

  if (choice) return null;

  return (
    <section className="cookie-consent" aria-label="Preferencias de cookies">
      <div>
        <p>Usamos cookies necesarias para que el sitio funcione y, con tu permiso, analítica para mejorar la plataforma.</p>
        <Link href="/cookies">Ver política de cookies</Link>
      </div>
      <div className="cookie-actions">
        <button type="button" onClick={() => saveConsent("necessary")}>Solo necesarias</button>
        <button type="button" onClick={() => saveConsent("analytics")}>Aceptar analítica</button>
      </div>
    </section>
  );
}
