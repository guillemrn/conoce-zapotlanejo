import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: "Aviso de privacidad de Conoce Zapotlanejo para el registro de personas interesadas y recomendaciones locales.",
  alternates: { canonical: "/privacidad" },
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <a className="legal-back" href="/">Conoce Zapotlanejo</a>
      <article className="legal-document">
        <p className="legal-kicker">Última actualización: 14 de agosto de 2026</p>
        <h1>Aviso de privacidad</h1>
        <p>Conoce Zapotlanejo es responsable del tratamiento de los datos personales que compartes a través de este sitio. Este aviso explica qué datos recabamos, para qué los usamos y cómo puedes ejercer tus derechos.</p>

        <h2>Datos que podemos recabar</h2>
        <p>Podemos solicitar tu nombre, WhatsApp o correo electrónico, relación con Zapotlanejo, intereses, nombre del lugar recomendado, categoría y notas sobre la recomendación. No solicitamos datos personales sensibles.</p>

        <h2>Finalidades</h2>
        <p>Usaremos tus datos para avisarte sobre el lanzamiento de la guía, dar seguimiento a recomendaciones, revisar lugares sugeridos, evitar registros fraudulentos y mejorar la experiencia del sitio.</p>
        <p>También podremos usar información agregada o estadística para entender el interés de la comunidad, sin identificarte de forma individual.</p>

        <h2>Analítica y cookies</h2>
        <p>Si aceptas cookies de analítica, podremos medir visitas, secciones consultadas e interacciones generales del sitio para mejorar la landing y la futura guía. Puedes revisar más detalles en la <a href="/cookies">Política de cookies</a>.</p>

        <h2>Transferencias</h2>
        <p>Podemos usar proveedores tecnológicos para almacenar registros, automatizar seguimiento o medir analítica. Estos proveedores deberán tratar la información únicamente para las finalidades indicadas.</p>

        <h2>Derechos ARCO</h2>
        <p>Puedes solicitar acceso, rectificación, cancelación u oposición al tratamiento de tus datos. Por ahora, el canal de contacto disponible es el sitio de Guillermo Moreno: <a href="https://guillermoml.com" target="_blank" rel="noreferrer">guillermoml.com</a>.</p>

        <h2>Cambios al aviso</h2>
        <p>Este aviso puede actualizarse conforme evolucione Conoce Zapotlanejo, se agreguen nuevas funciones o cambien los proveedores utilizados. La versión vigente estará disponible en esta página.</p>
      </article>
    </main>
  );
}
