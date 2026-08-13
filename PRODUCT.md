# Conoce Zapotlanejo

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

El usuario principal del MVP es una persona que vive en Zapotlanejo, conoce su entorno y quiere recomendar un negocio, lugar, servicio, evento o experiencia local que considera valioso.

La audiencia secundaria son habitantes y visitantes que quieren descubrir Zapotlanejo mediante recomendaciones confiables de personas de la comunidad.

## Product Purpose

Conoce Zapotlanejo busca reunir el conocimiento local que hoy se comparte de boca en boca y convertirlo en una guía digital útil, colaborativa y confiable.

La primera etapa capta personas interesadas y recomendaciones antes del lanzamiento. El MVP validará que la comunidad esté dispuesta a registrar lugares y que otras personas encuentren valor al descubrirlos. El éxito inicial significa lanzar con contenido y usuarios reales, aprender de su comportamiento y ajustar el producto antes de invertir en funciones más complejas.

## Positioning

A diferencia de un directorio genérico, el contenido nace de recomendaciones de la comunidad y pasa por una verificación local. A futuro, ese conocimiento permitirá crear rutas personalizadas para recorrer Zapotlanejo según los intereses, el tiempo disponible y el contexto de cada visita.

## Operating Context

- La landing pública permite solicitar acceso anticipado o recomendar un lugar.
- Una recomendación incluye datos básicos del lugar y el motivo por el que vale la pena conocerlo.
- Las recomendaciones se revisan antes de publicarse.
- Los registros potencialmente falsos requerirán una visita de confirmación; la persona o equipo responsable sigue pendiente de definición.
- La experiencia debe funcionar correctamente en teléfonos, porque las recomendaciones y consultas pueden ocurrir mientras las personas recorren el municipio.
- La información del proyecto se centraliza en Notion y la coordinación del equipo puede organizarse en Slack.

## Capabilities and Constraints

- La landing actual capta acceso anticipado y recomendaciones sin exigir inicio de sesión.
- Los datos se almacenan actualmente en una base D1 mediante un formulario público con protección básica contra registros automatizados.
- El MVP será una aplicación web adaptable, no una aplicación nativa para iOS o Android.
- El primer alcance debe priorizar un directorio colaborativo validable antes de construir navegación o rutas avanzadas.
- La visión posterior contempla mapa, lugares, negocios, eventos, experiencias y rutas personalizadas.
- La publicación de lugares requiere un proceso de revisión y verificación todavía por definir en detalle.
- El proyecto cuenta con presupuesto para herramientas y servicios, pero no con presupuesto de nómina para el equipo responsable en esta etapa.
- Las decisiones de monetización, moderación a escala y modelo de cuentas para el MVP siguen abiertas.

## Brand Commitments

- Nombre: Conoce Zapotlanejo.
- Dominio previsto: conocezapotlanejo.com.
- Iniciativa comunitaria y apartidista; la identidad y la comunicación no deben asociarse con un partido político.
- Voz cercana, clara y respetuosa, con la seriedad que merece un proyecto de alcance municipal.
- El producto debe representar tanto la cultura como la actividad cotidiana y productiva de Zapotlanejo.
- Idioma principal: español de México.

## Evidence on Hand

- Landing funcional con formularios de acceso anticipado y recomendación en `app/page.tsx` y `app/SignupForm.tsx`.
- Fotografías locales acreditadas y almacenadas en `public/`, con sus licencias indicadas en el pie de página.
- Identidad visual y contenido inicial implementados en `app/globals.css` y los componentes de la landing.
- Base de datos de registros definida en `db/schema.ts`.
- La interfaz actual comunica que la industria textil representa 54%, pero la fuente de ese dato aún no está documentada en el proyecto y no debe tratarse como evidencia verificada hasta incorporarla.
- Todavía no existen métricas de uso, testimonios, casos de éxito ni un catálogo validado; el producto no debe fabricarlos como prueba social.

## Product Principles

1. Empezar con la necesidad más pequeña que permita aprender de usuarios reales.
2. Dar prioridad al conocimiento de la comunidad sin publicar información que no haya sido revisada.
3. Hacer que participar sea sencillo desde un teléfono y sin barreras innecesarias.
4. Construir confianza mediante transparencia, atribución y criterios claros de verificación.
5. Mantener el proyecto útil para todo Zapotlanejo y libre de identificación partidista.

## Accessibility & Inclusion

La aplicación web debe ser responsive, navegable con teclado, compatible con tecnologías de asistencia y comprensible para personas con distintos niveles de experiencia digital. Los flujos esenciales no deben depender únicamente del color, el movimiento o una interacción precisa con el mapa.
