"use client";

import { FormEvent, useRef, useState } from "react";

type Mode = "early_access" | "recommendation";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="m6.5 12.5 3.5 3.5 7.5-8" />
  </svg>
);

const SubmitArrow = () => (
  <svg className="arrow-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M4 12 12 4M6 4h6v6" />
  </svg>
);

export default function SignupForm() {
  const contactInputRef = useRef<HTMLInputElement>(null);
  const [mode, setMode] = useState<Mode>("recommendation");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("No pudimos enviar el formulario. Revisa tu conexión y vuelve a intentarlo.");
  const [contactHasError, setContactHasError] = useState(false);
  const modeHint = mode === "early_access"
    ? "Déjanos un contacto para avisarte cuando la primera versión esté lista."
    : "Sugiere un negocio, espacio o experiencia local. Puede ser uno que te encanta o uno que tú administras.";

  function isValidContact(value: string) {
    const normalized = value.trim().toLowerCase();
    if (["hola", "no tengo", "ninguno", "n/a", "na", "test"].includes(normalized)) {
      return false;
    }

    if (value.includes("@")) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
    }

    return value.replace(/\D/g, "").length >= 8;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const formElement = event.currentTarget;
    const payload = Object.fromEntries(new FormData(formElement).entries());
    const contact = typeof payload.contact === "string" ? payload.contact.trim() : "";

    if (!isValidContact(contact)) {
      setErrorMessage("Escribe un correo válido o un WhatsApp con al menos 8 dígitos.");
      setContactHasError(true);
      setStatus("error");
      contactInputRef.current?.focus();
      return;
    }

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, type: mode }),
      });
      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        if (data?.error === "Escribe un correo válido o un WhatsApp con al menos 8 dígitos") {
          setContactHasError(true);
          contactInputRef.current?.focus();
        }
        throw new Error(data?.error || "No pudimos guardar el registro");
      }
      formElement.reset();
      setContactHasError(false);
      setStatus("success");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "No pudimos enviar el formulario. Revisa tu conexión y vuelve a intentarlo.");
      setStatus("error");
    }
  }

  function changeMode(next: Mode) {
    setMode(next);
    setStatus("idle");
    setContactHasError(false);
  }

  function recoverFromError() {
    if (status === "error") {
      setStatus("idle");
      setContactHasError(false);
    }
  }

  return (
    <div className="signup-shell">
      <div className="form-tabs" role="group" aria-label="Tipo de participación">
        <button type="button" aria-pressed={mode === "recommendation"} onClick={() => changeMode("recommendation")}>Recomendar o registrar</button>
        <button type="button" aria-pressed={mode === "early_access"} onClick={() => changeMode("early_access")}>Recibir aviso</button>
      </div>
      <p className="form-hint">{modeHint}</p>

      {status === "success" ? (
        <div className="success-card" role="status">
          <div className="success-weave" aria-hidden="true">
            <span /><span /><span /><span />
          </div>
          <span><CheckIcon /></span>
          <h3>{mode === "early_access" ? "Registro recibido" : "Lugar recibido"}</h3>
          <p>{mode === "early_access" ? "Gracias. Te avisaremos por el contacto que compartiste cuando la primera versión esté lista." : "Gracias. Revisaremos el lugar antes de integrarlo a la plataforma."}</p>
          <button type="button" onClick={() => setStatus("idle")}>Enviar otro formulario</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} onChange={recoverFromError} data-status={status}>
          <div className="field-grid">
            <label><span>Tu nombre</span><input name="name" autoComplete="name" placeholder="Ej. Ana López" required maxLength={80} /></label>
            <label><span>WhatsApp o correo</span><input ref={contactInputRef} name="contact" autoComplete="email" placeholder="Ej. 33 1234 5678 o hola@correo.com" required maxLength={120} aria-invalid={contactHasError} aria-describedby={contactHasError ? "contact-error" : undefined} /></label>
          </div>
          {mode === "early_access" ? (
            <div className="field-grid">
              <label><span>Tu relación con Zapotlanejo</span><select name="origin" defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Vivo en Zapotlanejo</option><option>Vivo cerca</option><option>Planeo visitar</option><option>Quiero conocer más</option></select></label>
              <label><span>Lo que más te interesa</span><select name="interest" defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Comida y cafés</option><option>Moda y compras</option><option>Eventos y cultura</option><option>Rutas y experiencias</option><option>Todo</option></select></label>
            </div>
          ) : (
            <>
              <div className="field-grid">
                <label><span>Nombre del lugar o negocio</span><input name="placeName" placeholder="Ej. Tacos Don José" required maxLength={120} /></label>
                <label><span>Categoría del lugar</span><select name="category" defaultValue="" required><option value="" disabled>Selecciona una categoría</option><option>Comida y bebida</option><option>Moda y compras</option><option>Cultura y turismo</option><option>Hospedaje</option><option>Servicio local</option><option>Otro</option></select></label>
              </div>
              <label className="full-field"><span>Tu relación con el lugar</span><select name="placeRelation" defaultValue="" required><option value="" disabled>Selecciona una opción</option><option>Soy dueño/a del negocio</option><option>Trabajo o colaboro ahí</option><option>Lo recomiendo como cliente o visitante</option><option>Lo conozco por la comunidad</option><option>Otro</option></select></label>
              <label className="full-field"><span>Por qué vale la pena</span><textarea name="note" placeholder="Qué probar, qué comprar o por qué debería conocerlo la gente" maxLength={500} rows={3} /></label>
            </>
          )}
          <label className="honeypot" aria-hidden="true">Sitio web<input name="website" tabIndex={-1} autoComplete="off" /></label>
          <label className="consent-field">
            <input name="privacyConsent" type="checkbox" value="accepted" required />
            <span>Acepto el <a href="/privacidad" target="_blank" rel="noreferrer">Aviso de privacidad</a> y entiendo que mis datos se usarán para dar seguimiento a Conoce Zapotlanejo.</span>
          </label>
          <div className="form-footer">
            <p>También puedes revisar nuestros <a href="/terminos" target="_blank" rel="noreferrer">Términos</a> y la <a href="/cookies" target="_blank" rel="noreferrer">Política de cookies</a>.</p>
            <button className="button submit-button" type="submit" disabled={status === "sending"} aria-busy={status === "sending"}>
              {status === "sending" && <span className="button-spinner" aria-hidden="true" />}
              {status === "sending" ? "Enviando..." : mode === "early_access" ? "Recibir aviso" : "Enviar lugar"}
              {status !== "sending" && <SubmitArrow />}
            </button>
          </div>
          {status === "error" && <p className="form-error" id={contactHasError ? "contact-error" : undefined} role="alert">{errorMessage}</p>}
        </form>
      )}
    </div>
  );
}
