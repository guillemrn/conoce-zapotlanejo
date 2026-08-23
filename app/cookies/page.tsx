import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Política de cookies de Conoce Zapotlanejo, incluyendo cookies necesarias y analítica con consentimiento.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <main className="legal-page">
      <Link className="legal-back" href="/">Conoce Zapotlanejo</Link>
      <article className="legal-document">
        <p className="legal-kicker">Última actualización: 14 de agosto de 2026</p>
        <h1>Política de cookies</h1>
        <p>Esta política explica cómo usamos cookies, almacenamiento local y tecnologías similares en Conoce Zapotlanejo.</p>

        <h2>Cookies necesarias</h2>
        <p>Son necesarias para recordar tus preferencias básicas, como si aceptaste o rechazaste la analítica. Sin ellas, el sitio no podría conservar esa elección.</p>

        <h2>Cookies de analítica</h2>
        <p>Con tu consentimiento, podremos usar software de analítica para medir visitas, páginas consultadas, origen aproximado del tráfico, dispositivo, navegador e interacciones generales. Esta información nos ayuda a mejorar la landing y priorizar la futura plataforma.</p>

        <h2>Proveedores externos</h2>
        <p>Cuando se integre el proveedor de analítica, podrá establecer sus propias cookies o identificadores conforme a su documentación. La analítica deberá activarse sólo si aceptas esa categoría.</p>

        <h2>Cómo cambiar tu decisión</h2>
        <p>Puedes borrar los datos del sitio desde la configuración de tu navegador para volver a ver el aviso de cookies. También puedes bloquear cookies desde tu navegador, aunque algunas preferencias podrían dejar de guardarse.</p>

        <h2>Relación con privacidad</h2>
        <p>Si una cookie o identificador puede relacionarse contigo, su uso también se rige por nuestro <a href="/privacidad">Aviso de privacidad</a>.</p>
      </article>
    </main>
  );
}
