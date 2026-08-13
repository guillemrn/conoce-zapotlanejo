/* eslint-disable @next/next/no-img-element */
import Motion from "./Motion";
import SignupForm from "./SignupForm";

const Arrow = () => (
  <svg className="arrow-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M4 12 12 4M6 4h6v6" />
  </svg>
);

const revealText = "No queremos crear otra lista genérica. Queremos reunir las recomendaciones que hoy pasan de boca en boca y convertirlas en una guía viva, útil y construida por la comunidad.";

const industryCards = [
  { className: "industry-card industry-card--textile", value: "54%", title: "Industria textil", text: "La vocación productiva que distingue a Zapotlanejo y conecta generaciones." },
  { className: "industry-card industry-card--manufacture", value: "Taller", title: "Manufactura", text: "Manos que convierten ideas y oficio en productos hechos aquí." },
  { className: "industry-card industry-card--food", value: "Origen", title: "Alimentos", text: "Lácteos, derivados y sabores que nacen cerca de casa." },
  { className: "industry-card industry-card--agriculture", value: "Tierra", title: "Agricultura", text: "El territorio como origen de nuestra economía y nuestra mesa." },
  { className: "industry-card industry-card--cattle", value: "Campo", title: "Ganadería", text: "Una tradición productiva que también cuenta la historia del municipio." },
];

export default function Home() {
  return (
    <main className="page-shell">
      <Motion />

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Conoce Zapotlanejo, inicio">
          <img
            src="/conoce-zapotlanejo-logo.png"
            alt="Conoce Zapotlanejo"
            className="brand-logo"
            width="160"
            height="80"
          />
        </a>
        <nav aria-label="Navegación principal">
          <a href="#descubre">Descubre</a>
          <a href="#recorre">Recorre</a>
          <a href="#participa">Participa</a>
        </nav>
        <a className="nav-cta" href="#registro">Únete a la lista <Arrow /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Próximamente, una guía hecha desde aquí</p>
          <h1>Zapotlanejo se conoce <em>viviéndolo.</em></h1>
          <p className="hero-lead">Lugares, negocios, sabores y experiencias recomendadas por quienes realmente conocen el municipio.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#registro">Quiero acceso anticipado <Arrow /></a>
            <a className="button button-secondary" href="#registro">Recomendar un lugar <Arrow /></a>
          </div>
          <p className="hero-note">La primera versión está en construcción. Tu recomendación puede formar parte de ella.</p>
        </div>

        <figure className="hero-photo-frame">
          <img src="/zapotlanejo-centro.webp" alt="Parroquia y plaza principal de Zapotlanejo, Jalisco" fetchPriority="high" />
          <figcaption><span>Centro de Zapotlanejo</span><span>20° 37′ N</span></figcaption>
          <div className="hero-weave-corner" aria-hidden="true"><i /><i /><i /></div>
          <div className="hero-route" aria-hidden="true"><i /><i /><i /></div>
        </figure>
      </section>

      <section className="marquee" aria-label="Lo que podrás encontrar">
        <div className="marquee-track">
          {[0, 1].map((loop) => (
            <span className="marquee-group" aria-hidden={loop === 1} key={loop}>
              <span>Sabores locales</span><i>✦</i><span>Moda y textil</span><i>✦</i><span>Historia</span><i>✦</i><span>Rincones</span><i>✦</i><span>Comunidad</span><i>✦</i>
            </span>
          ))}
        </div>
      </section>

      <section className="manifesto" id="descubre">
        <p className="manifesto-kicker">Una ciudad contada por su gente</p>
        <p className="reveal-copy">
          {revealText.split(" ").map((word, index) => <span className="word" key={`${word}-${index}`}>{word} </span>)}
        </p>
        <div className="inline-image-row" aria-hidden="true">
          <span className="inline-photo inline-photo--one"><img src="/zapotlanejo-parroquia.webp" alt="" loading="lazy" /></span>
          <span className="inline-photo inline-photo--two"><img src="/zapotlanejo-artesanias.webp" alt="" loading="lazy" /></span>
        </div>
      </section>

      <section className="experience-section">
        <div className="section-intro">
          <p>Explora según lo que te mueve</p>
          <h2>Un lugar distinto para cada forma de <em>conocer.</em></h2>
        </div>
        <div className="experience-accordion">
          <article className="experience-panel experience-panel--food">
            <img src="/zapotlanejo-artesanias.webp" alt="Colores y artesanías locales de Zapotlanejo" loading="lazy" />
            <div className="panel-shade" /><div className="panel-content"><span>Saborear</span><h3>Comer como alguien de aquí</h3><p>Antojitos, cocinas, cafés y productos que merecen una parada.</p></div>
          </article>
          <article className="experience-panel experience-panel--shop">
            <img src="/zapotlanejo-centro.webp" alt="Centro tradicional de Zapotlanejo" loading="lazy" />
            <div className="panel-shade" /><div className="panel-content"><span>Encontrar</span><h3>Comprar y apoyar lo local</h3><p>Moda, talleres, productores y comercios que dan identidad al municipio.</p></div>
          </article>
          <article className="experience-panel experience-panel--culture">
            <img src="/zapotlanejo-parroquia.webp" alt="Arquitectura de cantera en Zapotlanejo" loading="lazy" />
            <div className="panel-shade" /><div className="panel-content"><span>Descubrir</span><h3>Vivir cultura e historia</h3><p>Eventos, arquitectura, recorridos y rincones que cuentan quiénes somos.</p></div>
          </article>
        </div>
      </section>

      <section className="story-section" id="recorre">
        <div className="story-layout">
          <div className="story-sticky">
            <p>Así podría sentirse una ruta</p>
            <h2>Tu día, conectado por lugares que <em>valen la vuelta.</em></h2>
            <p className="story-description">La visión del producto va más allá de un directorio: queremos ayudarte a construir recorridos relevantes según tu tiempo e intereses.</p>
            <a className="text-link" href="#registro">Quiero conocer la primera versión <Arrow /></a>
          </div>
          <div className="story-cards">
            <article className="story-card">
              <span className="story-knot" aria-hidden="true" />
              <div className="story-image"><img src="/zapotlanejo-centro.webp" alt="Plaza principal de Zapotlanejo" loading="lazy" /></div>
              <div><span>09:00</span><h3>Empezar en el centro</h3><p>Caminar la plaza, mirar la cantera y elegir dónde desayunar.</p></div>
            </article>
            <article className="story-card story-card--clay">
              <span className="story-knot" aria-hidden="true" />
              <div className="story-image"><img src="/zapotlanejo-artesanias.webp" alt="Artesanías llenas de color elaboradas en Zapotlanejo" loading="lazy" /></div>
              <div><span>12:30</span><h3>Conocer lo hecho aquí</h3><p>Encontrar comercios, talleres y productos con historia local.</p></div>
            </article>
            <article className="story-card story-card--sky">
              <span className="story-knot" aria-hidden="true" />
              <div className="story-image"><img src="/zapotlanejo-parroquia.webp" alt="Parroquia de Nuestra Señora del Rosario en Zapotlanejo" loading="lazy" /></div>
              <div><span>18:00</span><h3>Cerrar con una buena vista</h3><p>Terminar el recorrido en un lugar recomendado por la comunidad.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="industry-section">
        <div className="section-intro section-intro--left">
          <p>La identidad también se produce</p>
          <h2>Hecho aquí. Con manos de <em>aquí.</em></h2>
        </div>
        <div className="industry-grid">
          {industryCards.map((card) => (
            <article className={card.className} key={card.title}>
              <span>{card.value}</span><div><h3>{card.title}</h3><p>{card.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="community-quote" id="participa">
        <div className="quote-image"><img src="/zapotlanejo-centro.webp" alt="Vista de la plaza y parroquia de Zapotlanejo" loading="lazy" /></div>
        <div className="quote-copy"><blockquote>Los mejores lugares no siempre son los más conocidos. Son los que alguien se toma el tiempo de recomendar.</blockquote><p>Una guía construida en comunidad y verificada localmente.</p></div>
      </section>

      <section className="register-section" id="registro">
        <div className="register-heading"><p>Sé parte desde el inicio</p><h2>Ayúdanos a poner Zapotlanejo <em>en el mapa.</em></h2></div>
        <div className="register-grid">
          <div className="register-copy"><p>Únete para conocer la primera versión o comparte un lugar que no debería faltar.</p><ul><li>Acceso anticipado</li><li>Invitación al lanzamiento</li><li>Participación en el producto</li></ul></div>
          <SignupForm />
        </div>
      </section>

      <section className="faq-section">
        <div><p>Lo esencial antes de sumarte</p><h2>Preguntas frecuentes</h2></div>
        <div className="faq-list">
          <details><summary>¿Conoce Zapotlanejo ya está disponible?<span className="faq-icon" aria-hidden="true" /></summary><p>Aún no. Estamos preparando la primera versión y esta lista nos ayudará a lanzarla con una comunidad activa desde el primer día.</p></details>
          <details><summary>¿Quién puede recomendar un lugar?<span className="faq-icon" aria-hidden="true" /></summary><p>Cualquier persona que conozca un negocio, espacio o experiencia valiosa en Zapotlanejo. Las recomendaciones se revisarán antes de publicarse.</p></details>
          <details><summary>¿Tendrá algún costo?<span className="faq-icon" aria-hidden="true" /></summary><p>Registrarte y participar en esta etapa no tiene costo. Comunicaremos con claridad cualquier cambio futuro.</p></details>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio" aria-label="Conoce Zapotlanejo, inicio">
          <img
            src="/conoce-zapotlanejo-logo.png"
            alt="Conoce Zapotlanejo"
            className="brand-logo"
            width="160"
            height="80"
          />
        </a>
        <p>Una iniciativa comunitaria para descubrir, compartir y fortalecer lo que hace único a Zapotlanejo.</p>
        <a className="footer-link" href="#registro">Quiero participar <Arrow /></a>
        <p className="photo-credits">Fotografías: <a href="https://commons.wikimedia.org/wiki/File:Zapotlanejo_(20200506).jpg" target="_blank" rel="noreferrer">José González Peña</a> y <a href="https://commons.wikimedia.org/wiki/File:Parroquia_de_nuestra_se%C3%B1ora_del_rosario_-_panoramio.jpg" target="_blank" rel="noreferrer">Richard-kun</a>, vía Wikimedia Commons. Licencias <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA 4.0</a> y <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noreferrer">CC BY 3.0</a>.</p>
      </footer>
    </main>
  );
}
