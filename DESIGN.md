---
name: Conoce Zapotlanejo
description: Una guía cálida y editorial construida a partir de lugares recomendados por la comunidad.
colors:
  verde-agave-profundo: "#173c35"
  papel-cantera: "#f5efe3"
  papel-claro: "#fffaf0"
  barro-rosado: "#a45f5a"
  maiz-tostado: "#d9a93d"
  cielo-de-plaza: "#8ccbd0"
  carbon-suave: "#242b29"
  campo-claro: "#fffdf7"
  linea-agave: "rgba(23, 60, 53, 0.2)"
typography:
  display:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "clamp(64px, 7vw, 112px)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.07em"
  headline:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "clamp(48px, 6vw, 82px)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.055em"
  title:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "39px"
    fontWeight: 400
    lineHeight: 1
  body:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "10px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.14em"
rounded:
  square: "0"
  subtle: "2px"
  pill: "999px"
  circle: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "24px"
  lg: "48px"
  xl: "90px"
components:
  button-primary:
    backgroundColor: "{colors.verde-agave-profundo}"
    textColor: "{colors.papel-cantera}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.barro-rosado}"
    textColor: "{colors.papel-cantera}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "52px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.verde-agave-profundo}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "52px"
  field:
    backgroundColor: "{colors.campo-claro}"
    textColor: "{colors.verde-agave-profundo}"
    rounded: "{rounded.square}"
    padding: "14px"
  card-maiz:
    backgroundColor: "{colors.maiz-tostado}"
    textColor: "{colors.verde-agave-profundo}"
    rounded: "{rounded.square}"
    padding: "30px"
  card-barro:
    backgroundColor: "{colors.barro-rosado}"
    textColor: "{colors.papel-cantera}"
    rounded: "{rounded.square}"
    padding: "30px"
  card-cielo:
    backgroundColor: "{colors.cielo-de-plaza}"
    textColor: "{colors.verde-agave-profundo}"
    rounded: "{rounded.square}"
    padding: "30px"
---

# Design System: Conoce Zapotlanejo

## Overview

**Creative North Star: "Lugares recomendados"**

La identidad debe sentirse como una recomendación valiosa compartida por alguien de confianza: humana, concreta y cercana. Su carácter es cálido, editorial y comunitario; presenta Zapotlanejo con orgullo y criterio, sin adoptar el tono de una institución pública ni el lenguaje promocional de una campaña turística.

La composición combina titulares editoriales amplios, información breve en sans serif, fotografía local y bloques cromáticos inspirados en la actividad productiva del municipio. La trama textil geométrica es el gesto distintivo del sistema: aparece en recortes, bordes, separadores o fondos parciales, con suficiente detalle para ser reconocible pero sin convertirse en el foco principal.

**Key Characteristics:**
- Titulares editoriales de gran escala y lectura expresiva.
- Contraste entre superficies planas, fotografía local y color productivo.
- Información breve, directa y fácil de recorrer desde el teléfono.
- Geometría textil usada como firma secundaria.
- Identidad municipal seria, cercana y explícitamente apartidista.

## Colors

La paleta combina un verde profundo como ancla institucional con papeles cálidos y acentos inspirados en barro, maíz y cielo.

### Primary
- **Verde Agave Profundo** (`#173c35`): color de autoridad y confianza para texto, fondos de alto contraste, botones principales y la marca.

### Secondary
- **Barro Rosado** (`#a45f5a`): acento cultural y humano para palabras destacadas, llamadas secundarias y superficies expresivas. Sustituye cualquier terracota anaranjada que pudiera generar una asociación partidista.
- **Maíz Tostado** (`#d9a93d`): energía productiva para selección, señalización, rutas y pequeños puntos de atención.

### Tertiary
- **Cielo de Plaza** (`#8ccbd0`): pausa fresca para superficies narrativas y contraste con los tonos de tierra.

### Neutral
- **Papel Cantera** (`#f5efe3`): fondo principal cálido.
- **Papel Claro** (`#fffaf0`): superficie editorial elevada por contraste tonal.
- **Campo Claro** (`#fffdf7`): fondo de campos y controles.
- **Carbón Suave** (`#242b29`): alternativa de texto oscuro cuando el verde no sea apropiado.
- **Línea Agave** (`rgba(23, 60, 53, 0.2)`): bordes y divisores discretos.

### Named Rules

**The Apartisan Accent Rule.** El Barro Rosado y el Maíz Tostado nunca deben desplazarse hacia un naranja político saturado ni dominar juntos una pantalla.

**The Grounded Palette Rule.** El Verde Agave Profundo y los tonos de papel siempre deben ocupar más espacio que los colores de acento.

## Typography

**Display Font:** Georgia (con Times New Roman y serif como respaldo)  
**Body Font:** Geist (con Arial y sans-serif como respaldo)  
**Label Font:** Geist

**Character:** La serif aporta memoria, cultura y autoridad editorial; la sans serif mantiene la experiencia digital clara y contemporánea. La tensión entre ambas evita que el producto se sienta folclórico o corporativo.

### Hierarchy
- **Display** (400, `clamp(64px, 7vw, 112px)`, 0.88): reservado para el mensaje principal de una superficie persuasiva.
- **Headline** (400, `clamp(48px, 6vw, 82px)`, 0.98): encabezados de sección con énfasis ocasional en Barro Rosado.
- **Title** (400, 39px, 1): títulos de tarjetas y relatos destacados.
- **Body** (400, 15px, 1.7): lectura explicativa; mantener líneas moderadas, normalmente entre 45 y 70 caracteres.
- **Label** (800, 10px, `0.14em`, mayúsculas): categorías, horarios, eybrows y metadatos.

### Named Rules

**The Editorial Contrast Rule.** La serif expresa la historia y la sans serif organiza la acción; no intercambiar sus funciones por conveniencia.

## Layout

El sistema usa contenedores amplios de hasta 1280–1440px, márgenes laterales fluidos cercanos a 4.8vw y composiciones editoriales asimétricas basadas en proporciones 4/8, 5/7 y 7/5. Las secciones respiran con separaciones verticales grandes, entre 90px y 190px según el viewport.

En escritorio, la narrativa alterna texto e imagen, paneles expansivos y grids de doce columnas. Debajo de 1000px las composiciones principales reducen columnas; debajo de 900px se convierten en flujos verticales; debajo de 560px las acciones, formularios y tarjetas ocupan el ancho completo. La jerarquía y el orden de lectura deben conservarse en cada cambio.

El patrón `public/trama-textil-zapotlanejo.webp` puede entrar como una franja recortada, detalle de esquina, divisor o textura de baja prominencia. Nunca debe reducir la legibilidad ni convertirse en un fondo dominante detrás de contenido extenso.

## Elevation & Depth

El lenguaje es plano por defecto. La profundidad aparece mediante capas tonales, fotografía, superposición y solo dos sombras ambientales: una amplia bajo la imagen principal y otra bajo fotografías o tarjetas destacadas. Las superficies funcionales, formularios y bloques cromáticos permanecen planas.

### Shadow Vocabulary
- **Fotografía principal** (`28px 34px 70px rgba(23,60,53,.18)`): separa el hero del fondo sin producir una tarjeta flotante.
- **Tarjeta narrativa** (`0 34px 70px rgba(0,0,0,.2)`): reserva profundidad para momentos de recorrido.
- **Fotografía breve** (`0 14px 38px rgba(23,60,53,.15)`): acompaña imágenes pequeñas superpuestas.

### Named Rules

**The Flat-by-Default Rule.** Las sombras son ambientales y excepcionales; nunca se usan para convertir cada sección en una tarjeta.

## Shapes

Las superficies editoriales, tarjetas e inputs usan esquinas rectas o un radio casi imperceptible de 2px. Las acciones principales y las fotografías breves usan la cápsula de 999px para señalar interacción o conexión. Los indicadores de ruta y estados confirmados pueden usar círculos perfectos.

La marca y la trama introducen diagonales, rombos y cruces textiles. Esta geometría debe aparecer como detalle estructural preciso, no como decoración aleatoria.

## Components

### Buttons
- **Shape:** cápsula completa (`999px`) con altura mínima de 52px.
- **Primary:** Verde Agave Profundo sobre Papel Cantera, borde del mismo verde y padding horizontal de 22px.
- **Hover / Focus:** elevación física de 3px; el primario cambia a Barro Rosado. Todo foco debe permanecer claramente visible.
- **Secondary:** transparente con borde Verde Agave Profundo; invierte a fondo verde al interactuar.

### Cards / Containers
- **Corner Style:** recto; la fotografía principal admite 2px.
- **Background:** alterna Maíz Tostado, Barro Rosado, Cielo de Plaza y Verde Agave Profundo según el relato.
- **Shadow Strategy:** plana en reposo, excepto las tarjetas narrativas definidas en Elevation & Depth.
- **Border:** 1px Verde Agave Profundo en tarjetas informativas sobre fondos claros.
- **Internal Padding:** 28–30px en escritorio y 24px en móvil.

### Inputs / Fields
- **Style:** fondo Campo Claro, borde de Línea Agave, esquinas rectas y padding de 14px.
- **Focus:** borde Barro Rosado con halo tenue `0 0 0 3px rgba(164,95,90,.12)`.
- **Error / Disabled:** error en rojo oscuro sobrio; acciones deshabilitadas reducen opacidad sin perder legibilidad.

### Navigation
- Marca compacta a la izquierda, navegación textual centrada y acción encapsulada a la derecha. Los enlaces revelan una línea Barro Rosado al pasar el cursor. En móvil se ocultan los enlaces secundarios y se preserva la acción principal.

### Trama textil geométrica
- Usar el patrón como firma de continuidad entre cultura, industria textil y comunidad.
- Preferir recortes parciales, escalas que permitan apreciar el tejido y opacidad controlada.
- Mantener siempre una zona limpia alrededor del contenido prioritario.

### Photography
- Usar imágenes de lugares reales y acreditados, con encuadres amplios y tratamiento natural.
- Las capas Verde Agave Profundo ayudan a sostener texto claro sin ocultar el lugar.

## Do's and Don'ts

### Do:
- **Do** usar Verde Agave Profundo y Papel Cantera como base dominante.
- **Do** reservar la serif para mensajes con carga narrativa y la sans serif para navegación y acción.
- **Do** aplicar la trama textil en detalles, recortes o transiciones reconocibles pero secundarios.
- **Do** priorizar fotografía local real y mantener visibles sus créditos cuando corresponda.
- **Do** conservar espacios amplios y una adaptación móvil de una sola columna.

### Don't:
- **Don't** convertir la interfaz en un portal gubernamental, una campaña política o una página turística genérica.
- **Don't** introducir naranjas saturados ni combinaciones que sugieran identidad partidista.
- **Don't** usar el patrón como fondo dominante detrás de textos largos o formularios.
- **Don't** encerrar cada bloque en una tarjeta redondeada con sombra.
- **Don't** inventar testimonios, métricas, comercios o evidencia social.
