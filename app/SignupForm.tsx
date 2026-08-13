"use client";

import { FormEvent, useState } from "react";

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
  const [mode, setMode] = useState<Mode>("early_access");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const modeHint = mode === "early_access"
    ? "Déjanos un contacto para avisarte cuando la primera versión esté lista."
    : "Cuéntanos qué lugar recomiendas. Lo revisaremos antes de publicarlo.";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const formElement = event.currentTarget;
    const payload = Object.fromEntries(new FormData(formElement).entries());
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, type: mode }),
      });
      if (!response.ok) throw new Error("No pudimos guardar el registro");
      formElement.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function changeMode(next: Mode) {
    setMode(next);
    setStatus("idle");
  }

  function recoverFromError() {
    if (status === "error") setStatus("idle");
  }

  return (
    <div className="signup-shell">
      <div className="form-tabs" role="group" aria-label="Tipo de participación">
        <button type="button" aria-pressed={mode === "early_access"} onClick={() => changeMode("early_access")}>Recibir aviso</button>
        <button type="button" aria-pressed={mode === "recommendation"} onClick={() => changeMode("recommendation")}>Recomendar lugar</button>
      </div>
      <p className="form-hint">{modeHint}</p>

      {status === "success" ? (
        <div className="success-card" role="status">
          <div className="success-weave" aria-hidden="true">
            <span /><span /><span /><span />
          </div>
          <span><CheckIcon /></span>
          <h3>{mode === "early_access" ? "Registro recibido" : "Recomendación recibida"}</h3>
          <p>{mode === "early_access" ? "Gracias. Te avisaremos por el contacto que compartiste cuando la primera versión esté lista." : "Gracias. Revisaremos el lugar antes de considerarlo para la primera guía."}</p>
          <button type="button" onClick={() => setStatus("idle")}>Enviar otro formulario</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} onChange={recoverFromError} data-status={status}>
          <div className="field-grid">
            <label><span>Tu nombre</span><input name="name" autoComplete="name" placeholder="Ej. Ana López" required maxLength={80} /></label>
            <label><span>WhatsApp o correo</span><input name="contact" autoComplete="email" placeholder="Para enviarte el aviso" required maxLength={120} /></label>
          </div>
          {mode === "early_access" ? (
            <div className="field-grid">
              <label><span>Tu relación con Zapotlanejo</span><select name="origin" defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Vivo en Zapotlanejo</option><option>Vivo cerca</option><option>Planeo visitar</option><option>Quiero conocer más</option></select></label>
              <label><span>Lo que más te interesa</span><select name="interest" defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Comida y cafés</option><option>Moda y compras</option><option>Eventos y cultura</option><option>Rutas y experiencias</option><option>Todo</option></select></label>
            </div>
          ) : (
            <>
              <div className="field-grid">
                <label><span>Lugar que recomiendas</span><input name="placeName" placeholder="Ej. Tacos Don José" required maxLength={120} /></label>
                <label><span>Categoría del lugar</span><select name="category" defaultValue="" required><option value="" disabled>Selecciona una categoría</option><option>Comida y bebida</option><option>Moda y compras</option><option>Cultura y turismo</option><option>Hospedaje</option><option>Servicio local</option><option>Otro</option></select></label>
              </div>
              <label className="full-field"><span>Por qué vale la pena</span><textarea name="note" placeholder="Qué probar, qué comprar o por qué debería conocerlo la gente" maxLength={500} rows={3} /></label>
            </>
          )}
          <label className="honeypot" aria-hidden="true">Sitio web<input name="website" tabIndex={-1} autoComplete="off" /></label>
          <div className="form-footer">
            <p>Usaremos tu contacto sólo para dar seguimiento a Conoce Zapotlanejo.</p>
            <button className="button submit-button" type="submit" disabled={status === "sending"} aria-busy={status === "sending"}>
              {status === "sending" && <span className="button-spinner" aria-hidden="true" />}
              {status === "sending" ? "Enviando..." : mode === "early_access" ? "Recibir aviso" : "Enviar recomendación"}
              {status !== "sending" && <SubmitArrow />}
            </button>
          </div>
          {status === "error" && <p className="form-error" role="alert">No pudimos enviar el formulario. Revisa tu conexión y vuelve a intentarlo.</p>}
        </form>
      )}
    </div>
  );
}
