import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Términos de uso de Conoce Zapotlanejo para registros, recomendaciones y contenido de la futura guía local.",
  alternates: { canonical: "/terminos" },
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <a className="legal-back" href="/">Conoce Zapotlanejo</a>
      <article className="legal-document">
        <p className="legal-kicker">Última actualización: 14 de agosto de 2026</p>
        <h1>Términos y condiciones</h1>
        <p>Conoce Zapotlanejo es una guía digital en preparación para reunir lugares, negocios, sabores y experiencias recomendadas por la comunidad.</p>

        <h2>Uso del sitio</h2>
        <p>Al usar este sitio aceptas hacerlo de forma lícita, respetuosa y sin enviar información falsa, ofensiva, engañosa o que afecte derechos de terceros.</p>

        <h2>Registro y recomendaciones</h2>
        <p>Enviar tus datos no garantiza acceso inmediato, publicación de una recomendación ni inclusión de un lugar en la guía. Cada recomendación podrá ser revisada, editada, agrupada, descartada o reservada para una etapa posterior.</p>

        <h2>Contenido del sitio</h2>
        <p>La información publicada puede cambiar conforme avance el proyecto. Las descripciones de lugares o experiencias tendrán fines informativos y no sustituyen la verificación directa con cada negocio, sede o responsable.</p>

        <h2>Propiedad intelectual</h2>
        <p>El nombre, diseño, estructura, textos y elementos visuales del sitio pertenecen a Conoce Zapotlanejo o a sus respectivos autores. Las fotografías con crédito conservan las licencias indicadas en el footer.</p>

        <h2>Limitación de responsabilidad</h2>
        <p>El sitio se ofrece en una etapa inicial. Haremos esfuerzos razonables para mantenerlo disponible y actualizado, pero no garantizamos ausencia de errores, interrupciones o cambios en el proyecto.</p>

        <h2>Privacidad</h2>
        <p>El tratamiento de datos personales se rige por nuestro <a href="/privacidad">Aviso de privacidad</a> y por la <a href="/cookies">Política de cookies</a>.</p>
      </article>
    </main>
  );
}
