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
    ? "Tu registro nos ayuda a abrir la primera ruta de recomendaciones."
    : "Cada lugar recomendado suma un hilo a la guía que estamos tejiendo.";

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
        <button type="button" aria-pressed={mode === "early_access"} onClick={() => changeMode("early_access")}>Quiero conocerlo</button>
        <button type="button" aria-pressed={mode === "recommendation"} onClick={() => changeMode("recommendation")}>Quiero recomendar</button>
      </div>
      <p className="form-hint">{modeHint}</p>

      {status === "success" ? (
        <div className="success-card" role="status">
          <div className="success-weave" aria-hidden="true">
            <span /><span /><span /><span />
          </div>
          <span><CheckIcon /></span>
          <h3>{mode === "early_access" ? "¡Ya estás dentro!" : "¡Recibimos tu recomendación!"}</h3>
          <p>{mode === "early_access" ? "Gracias por sumar tu hilo. Te avisaremos cuando la primera versión esté lista." : "Gracias por sumar un lugar al telar. Lo revisaremos para incluirlo entre los primeros puntos de la guía."}</p>
          <button type="button" onClick={() => setStatus("idle")}>Enviar otro registro</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} onChange={recoverFromError} data-status={status}>
          <div className="field-grid">
            <label><span>Tu nombre</span><input name="name" autoComplete="name" placeholder="¿Cómo te llamas?" required maxLength={80} /></label>
            <label><span>WhatsApp o correo</span><input name="contact" autoComplete="email" placeholder="Para avisarte" required maxLength={120} /></label>
          </div>
          {mode === "early_access" ? (
            <div className="field-grid">
              <label><span>¿Desde dónde nos conoces?</span><select name="origin" defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Vivo en Zapotlanejo</option><option>Vivo cerca</option><option>Planeo visitar</option><option>Solo quiero conocer más</option></select></label>
              <label><span>¿Qué te interesa más?</span><select name="interest" defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Comida y cafés</option><option>Moda y compras</option><option>Eventos y cultura</option><option>Rutas y experiencias</option><option>Todo</option></select></label>
            </div>
          ) : (
            <>
              <div className="field-grid">
                <label><span>Nombre del lugar</span><input name="placeName" placeholder="Ej. Tacos Don José" required maxLength={120} /></label>
                <label><span>¿Qué tipo de lugar es?</span><select name="category" defaultValue="" required><option value="" disabled>Selecciona una categoría</option><option>Comida y bebida</option><option>Moda y compras</option><option>Cultura y turismo</option><option>Hospedaje</option><option>Servicio local</option><option>Otro</option></select></label>
              </div>
              <label className="full-field"><span>Cuéntanos por qué lo recomiendas</span><textarea name="note" placeholder="¿Qué lo hace especial? ¿Qué debería probar o conocer la gente?" maxLength={500} rows={3} /></label>
            </>
          )}
          <label className="honeypot" aria-hidden="true">Sitio web<input name="website" tabIndex={-1} autoComplete="off" /></label>
          <div className="form-footer">
            <p>Usaremos tus datos únicamente para mantenerte al tanto de este proyecto.</p>
            <button className="button submit-button" type="submit" disabled={status === "sending"} aria-busy={status === "sending"}>
              {status === "sending" && <span className="button-spinner" aria-hidden="true" />}
              {status === "sending" ? "Guardando..." : mode === "early_access" ? "Quiero acceso anticipado" : "Enviar recomendación"}
              {status !== "sending" && <SubmitArrow />}
            </button>
          </div>
          {status === "error" && <p className="form-error" role="alert">No pudimos guardar tu registro. Revisa tu conexión e inténtalo nuevamente.</p>}
        </form>
      )}
    </div>
  );
}
