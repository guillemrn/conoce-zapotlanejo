/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";
import Motion from "./Motion";
import SignupForm from "./SignupForm";

const Arrow = () => (
  <svg className="arrow-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M4 12 12 4M6 4h6v6" />
  </svg>
);

const revealText = "No queremos crear otra lista genérica. Queremos reunir lugares recomendados por la comunidad, revisarlos con criterio local y convertirlos en una guía útil para vivir mejor Zapotlanejo.";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://conocezapotlanejo.com/#faq",
  url: "https://conocezapotlanejo.com/#preguntas",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Conoce Zapotlanejo ya está disponible?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aún no. Estamos preparando la primera versión. Si te registras, te avisaremos cuando esté lista para probarse.",
      },
    },
    {
      "@type": "Question",
      name: "¿Quién puede recomendar un lugar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cualquier persona que conozca un negocio, espacio, evento o experiencia valiosa en Zapotlanejo. Revisaremos cada recomendación antes de publicarla.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tendrá algún costo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Registrarte o recomendar un lugar en esta etapa no tiene costo. Comunicaremos con claridad cualquier cambio futuro.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Motion />

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Conoce Zapotlanejo, inicio">
          <img
            src="/logo-conoce-zapotlanejo.svg"
            alt="Conoce Zapotlanejo"
            className="brand-logo"
            width="160"
            height="80"
          />
        </a>
        <nav aria-label="Navegación principal">
          <a href="#descubre">Descubre</a>
          <a href="#participa">Participa</a>
          <a href="#preguntas">Dudas</a>
        </nav>
        <a className="nav-cta" href="#registro">Registrarme <Arrow /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Próximamente, una guía hecha desde Zapotlanejo</p>
          <h1>Zapotlanejo se conoce <em>viviéndolo.</em></h1>
          <p className="hero-lead">Estamos preparando una guía digital para descubrir dónde comer, comprar y qué hacer en Zapotlanejo, Jalisco, con lugares recomendados por la comunidad.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#registro">Quiero acceso anticipado <Arrow /></a>
            <a className="button button-secondary" href="#registro">Recomendar un lugar <Arrow /></a>
          </div>
          <p className="hero-note">Déjanos tus datos para recibir el lanzamiento o comparte un lugar para revisión.</p>
        </div>

        <figure className="hero-photo-frame">
          <img src="/zapotlanejo-parroquia.webp" alt="Parroquia y plaza principal de Zapotlanejo, Jalisco" fetchPriority="high" />
          <figcaption><span>Centro de Zapotlanejo</span><span>20° 37′ N</span></figcaption>
          <div className="hero-weave-corner" aria-hidden="true"><i /><i /><i /></div>
          <div className="hero-route" aria-hidden="true"><i /><i /><i /></div>
        </figure>
      </section>

      <section className="marquee" aria-label="Lo que podrás encontrar">
        <div className="marquee-track">
          {[0, 1].map((loop) => (
            <span className="marquee-group" aria-hidden={loop === 1} key={loop}>
              <span>Sabores locales</span><i /><span>Moda y textil</span><i /><span>Historia</span><i /><span>Rincones</span><i /><span>Comunidad</span><i />
            </span>
          ))}
        </div>
      </section>

      <section className="manifesto" id="descubre">
        <p className="manifesto-kicker">Una ciudad contada por su gente</p>
        <p className="reveal-copy">
          {revealText.split(" ").map((word, index) => (
            <span
              className="word"
              key={`${word}-${index}`}
              style={{ transitionDelay: `${Math.min(index * 18, 650)}ms` } as CSSProperties}
            >
              {word}{" "}
            </span>
          ))}
        </p>
        <div className="inline-image-row" aria-hidden="true">
          <span className="inline-photo inline-photo--one"><img src="/zapotlanejo-parroquia.webp" alt="" loading="lazy" /></span>
          <span className="inline-photo inline-photo--two"><img src="/zapotlanejo-artesanias.webp" alt="" loading="lazy" /></span>
        </div>
      </section>

      <section className="experience-section">
        <div className="section-intro">
          <p>Qué podrás encontrar</p>
          <h2>Recomendaciones para distintas formas de <em>recorrer.</em></h2>
        </div>
        <div className="experience-accordion">
          <article className="experience-panel experience-panel--food">
            <img src="/zapotlanejo-comida.jpeg" alt="Colores y artesanías locales de Zapotlanejo" loading="lazy" />
            <div className="panel-shade" /><div className="panel-content"><span>Comer</span><h3>Sabores que valen la parada</h3><p>Antojitos, cocinas, cafés y productos recomendados por gente local.</p></div>
          </article>
          <article className="experience-panel experience-panel--shop">
            <img src="/zapotlanejo-negocios.png" alt="Centro tradicional de Zapotlanejo" loading="lazy" />
            <div className="panel-shade" /><div className="panel-content"><span>Comprar</span><h3>Negocios hechos desde aquí</h3><p>Moda, talleres, productores y comercios que dan identidad al municipio.</p></div>
          </article>
          <article className="experience-panel experience-panel--culture">
            <img src="/zapotlanejo-eventos.jpeg" alt="Arquitectura de cantera en Zapotlanejo" loading="lazy" />
            <div className="panel-shade" /><div className="panel-content"><span>Conocer</span><h3>Rincones con historia</h3><p>Eventos, arquitectura, recorridos y espacios que ayudan a entender el municipio.</p></div>
          </article>
        </div>
      </section>

      <section className="community-quote" id="participa">
        <div className="quote-image"><img src="/zapotlanejo-puente.jpeg" alt="Puente de Calderón en Zapotlanejo" loading="lazy" /></div>
        <div className="quote-copy"><blockquote>Los mejores lugares no siempre son los más conocidos. Son los que alguien se toma el tiempo de recomendar.</blockquote><p>Cada recomendación será revisada antes de publicarse.</p></div>
      </section>

      <section className="register-section" id="registro">
        <div className="register-heading"><p>Sé parte desde el inicio</p><h2>Ayúdanos a construir la primera guía de <em>recomendaciones.</em></h2></div>
        <div className="register-grid">
          <div className="register-copy"><p>Elige si quieres recibir aviso del lanzamiento o recomendar un lugar de Zapotlanejo para revisión.</p><ul><li>Te avisaremos cuando la primera versión esté lista</li><li>Podrás sugerir lugares, negocios o experiencias locales</li><li>Revisaremos las recomendaciones antes de publicarlas</li></ul></div>
          <SignupForm />
        </div>
      </section>

      <section className="faq-section" id="preguntas">
        <div><p>Antes de registrarte</p><h2>Preguntas frecuentes</h2></div>
        <div className="faq-list">
          <details><summary>¿Conoce Zapotlanejo ya está disponible?<span className="faq-icon" aria-hidden="true" /></summary><p>Aún no. Estamos preparando la primera versión. Si te registras, te avisaremos cuando esté lista para probarse.</p></details>
          <details><summary>¿Quién puede recomendar un lugar?<span className="faq-icon" aria-hidden="true" /></summary><p>Cualquier persona que conozca un negocio, espacio, evento o experiencia valiosa en Zapotlanejo. Revisaremos cada recomendación antes de publicarla.</p></details>
          <details><summary>¿Tendrá algún costo?<span className="faq-icon" aria-hidden="true" /></summary><p>Registrarte o recomendar un lugar en esta etapa no tiene costo. Comunicaremos con claridad cualquier cambio futuro.</p></details>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio" aria-label="Conoce Zapotlanejo, inicio">
          <img
            src="/logo-conoce-zapotlanejo.svg"
            alt="Conoce Zapotlanejo"
            className="brand-logo"
            width="160"
            height="80"
          />
        </a>
        <p>Una iniciativa comunitaria para descubrir y compartir lugares recomendados de Zapotlanejo.</p>
        <a className="footer-link" href="#registro">Registrarme o recomendar <Arrow /></a>
        <nav className="legal-links" aria-label="Documentos legales">
          <a href="/privacidad">Privacidad</a>
          <a href="/terminos">Términos</a>
          <a href="/cookies">Cookies</a>
        </nav>
        <p className="footer-credit">Diseñado y desarrollado por <a href="https://guillermoml.com" target="_blank" rel="noreferrer">Guillermo Moreno</a>.</p>
      </footer>
    </main>
  );
}
