# Traspaso del proyecto Conoce Zapotlanejo

Fecha de preparacion: 24 de septiembre de 2026

## 1. Resumen

Conoce Zapotlanejo se entrega como una landing page publica para captar registros de personas interesadas, recomendaciones de lugares y registros de negocios locales.

El sitio comunica el proyecto como una plataforma interactiva y viva, no como un directorio estatico. La accion principal del formulario es recomendar o registrar un lugar. La accion secundaria es recibir aviso del lanzamiento.

## 2. Alcance del traspaso

Este documento reune el estado del proyecto al momento de la entrega, su configuracion tecnica, dependencias externas, accesos necesarios y pendientes conocidos.

El objetivo es que el equipo de Conoce Zapotlanejo pueda continuar administrando, manteniendo y desarrollando el proyecto de manera independiente.

Una vez completada la transferencia del repositorio, despliegue, automatizaciones y servicios asociados, la continuidad tecnica y evolucion del proyecto quedan a cargo del equipo responsable de Conoce Zapotlanejo.

## 3. Fecha limite para completar el traspaso

**Fecha limite para completar el traspaso: Viernes 30 de octubre de 2026.**

Hasta esta fecha estaran disponibles los servicios que actualmente dependen de mis cuentas personales para facilitar su migracion a las cuentas definitivas del equipo.

El equipo debera completar antes de esta fecha la migracion o recreacion de los servicios indicados en este documento, particularmente GitHub, Vercel, Make y Google Sheets.

Una vez completado el traspaso, o alcanzada la fecha limite, estos servicios dejaran de depender de las cuentas personales utilizadas durante el desarrollo.

## 4. Estado actual del sitio

Incluye:

- Landing publica con identidad visual de Conoce Zapotlanejo.
- Logo oficial integrado.
- Formulario de registro/recomendacion.
- Validacion basica de datos.
- Envio de registros a Make mediante webhook.
- Paginas legales: Aviso de privacidad, Terminos y condiciones, Politica de cookies.
- Banner de cookies.
- Vercel Analytics.
- Microsoft Clarity condicionado a consentimiento de analitica.
- SEO basico, Open Graph y sitemap.
- Imagen social y brand guideline.

## 5. Formulario

El formulario tiene dos modos:

- Recomendar o registrar: modo principal.
- Recibir aviso: modo secundario.

### Campos principales

Campos comunes:

- Nombre.
- WhatsApp o correo.
- Consentimiento del Aviso de privacidad.

Campos para recomendacion/registro:

- Nombre del lugar o negocio.
- Categorias multiples.
- Relacion con el lugar.
- Si cuenta con establecimiento fisico.
- Domicilio, solo si se indica que si tiene establecimiento fisico.
- Motivo por el que vale la pena.

Campos para recibir aviso:

- Relacion con Zapotlanejo.
- Interes principal.

### Categorias actuales

- Comida y bebida.
- Moda y compras.
- Cultura y turismo.
- Hospedaje.
- Servicio local.
- Productores.
- Desarrollo rural.
- Mano de obra.
- Servicios medicos.
- Medicina alternativa.
- Cuidado personal.
- Fabricantes de ropa.
- Otro.

### Validaciones actuales

El servidor valida:

- Nombre y contacto obligatorios.
- Contacto como correo valido o WhatsApp con al menos 8 digitos.
- Consentimiento de privacidad obligatorio.
- Para recomendacion/registro: lugar, categoria y relacion con el lugar.
- Si hay establecimiento fisico: domicilio obligatorio.

El formulario tambien regresa el foco al campo de contacto cuando ese dato no es valido.

## 6. Automatizacion

El formulario envia los registros al endpoint interno:

`/api/leads`

Ese endpoint reenvia la informacion a Make si existe la variable:

`MAKE_WEBHOOK_URL`

Make debe encargarse de:

- Recibir el webhook.
- Guardar el registro en Google Sheets.
- Enviar correo de notificacion al equipo.

Correo de contacto del proyecto:

`conocezapotlanejo@gmail.com`

Estado de configuracion especifica de Make y Google Sheets: Por confirmar fuera del repositorio.

## 7. Campos enviados al webhook

Los datos principales enviados son:

- `type`
- `name`
- `contact`
- `origin`
- `interest`
- `placeName`
- `categories`
- `category`
- `placeRelation`
- `hasPhysicalLocation`
- `address`
- `note`
- `privacyConsent`
- `privacyAcceptedAt`
- `source`
- `createdAt`

Notas:

- `categories` es la lista de categorias seleccionadas.
- `category` se mantiene como texto unido por comas para compatibilidad con Make o Google Sheets.
- `address` solo se envia con valor si `hasPhysicalLocation` es `yes`.

## 8. Variables de entorno

Variables esperadas:

```text
MAKE_WEBHOOK_URL=<url-del-webhook-de-make>
NEXT_PUBLIC_CLARITY_PROJECT_ID=<id-del-proyecto-de-clarity>
```

`MAKE_WEBHOOK_URL` debe manejarse como secreto. No debe documentarse su valor real en este archivo.

`NEXT_PUBLIC_CLARITY_PROJECT_ID` puede ser publico porque se incluye en el frontend. Aun asi, puede guardarse como variable de entorno en Vercel.

Estado actual de variables en Vercel: Por confirmar fuera del repositorio.

## 9. Analitica

Actualmente el sitio esta preparado para usar:

- Vercel Analytics.
- Microsoft Clarity.

Clarity solo carga si:

1. Existe `NEXT_PUBLIC_CLARITY_PROJECT_ID`.
2. La persona acepta analitica en el banner de cookies.

Consideracion para futuras modificaciones:

- Mantener masking de inputs en Clarity para evitar capturar datos personales visibles en grabaciones.
- Revisar grabaciones y heatmaps solo para mejorar experiencia, no para perfilar personas individualmente.

Estado de recepcion de datos en Clarity: Por confirmar en la cuenta de Clarity.

## 10. Legal y privacidad

El sitio incluye:

- `/privacidad`
- `/terminos`
- `/cookies`

El formulario mantiene checkbox explicito para aceptar el Aviso de privacidad. Esta decision se tomo porque el sitio recolecta datos personales y usa analitica.

Consideracion para futuras modificaciones:

- Si se modifica el tipo de datos recolectados, las paginas legales deben revisarse.
- Si se agregan nuevas herramientas de analitica, publicidad o seguimiento, la Politica de cookies y el Aviso de privacidad deben actualizarse.

## 11. Seguridad actual

Medidas implementadas:

- El webhook de Make no se expone en el frontend.
- Honeypot basico contra bots simples.
- Validacion de contacto.
- Recorte de longitud en campos del servidor.
- No se devuelven datos personales al navegador despues de enviar.
- Los logs del servidor no imprimen el lead completo.
- Consentimiento de privacidad validado en servidor.

Pendientes conocidos si el trafico aumenta o aparece spam real:

- Rate limit para `/api/leads`.
- Timeout al envio del webhook de Make.
- Turnstile o proteccion equivalente si aparece spam real.
- Revision periodica de registros falsos.

## 12. Dominio y DNS

El dominio y su DNS se gestionan fuera del codigo.

Servicios a revisar directamente:

- Squarespace Domains
- Vercel

Informacion operativa:

- Si el sitio se mantiene en Vercel, los registros web deben verificarse directamente con Vercel y el proveedor DNS antes de hacer cambios.
- No eliminar registros de correo o seguridad sin revisar su funcion.

Registros que deben revisarse antes de cualquier cambio:

- MX.
- SPF.
- DKIM.
- DMARC.

## 13. Servicios, propietarios y estado del traspaso

Estado final deseado: los servicios necesarios para operar Conoce Zapotlanejo deben quedar bajo control de una cuenta del proyecto/equipo y no depender de cuentas personales del desarrollador.

| Servicio                            | Estado actual                                                                   | Accion de traspaso                                                                                                                                                                  |
| -------------------------------------| ---------------------------------------------------------------------------------| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GitHub / repositorio                | Actualmente esta en la cuenta personal de Guillermo Moreno.                        | Migrar el repositorio a una cuenta del equipo/proyecto u organizacion. Validar permisos de administracion y actualizar conexiones de despliegue si dependen del repositorio actual. |
| Vercel                              | Actualmente esta desplegado en la cuenta personal de Guillermo Moreno.            | Migrar o recrear el deployment en una cuenta del equipo/proyecto. Configurar variables de entorno, analitica, dominio y despliegues desde el repositorio definitivo.                |
| Dominio / DNS                       | El dominio debe apuntar al nuevo hosting una vez que el proyecto quede migrado. | Configurar los registros DNS requeridos por el nuevo hosting y verificar propagacion, HTTPS y funcionamiento de `www` y dominio raiz.                                               |
| Make                                | Actualmente esta en la cuenta personal de Guillermo Moreno.                       | Migrar o recrear el escenario en una cuenta del equipo/proyecto. Actualizar el webhook en Vercel y validar Google Sheets, ramas del flujo y notificacion por correo.                |
| Google Sheets                       | No fue posible transferir la propiedad completa del archivo actual.             | Clonar el archivo desde una cuenta del equipo/proyecto, hacerlo propio, revisar columnas y actualizar el escenario de Make para escribir en la nueva hoja.                          |
| Gmail / conocezapotlanejo@gmail.com | El correo aparece documentado como contacto del proyecto.                       | Confirmar acceso, propietario y recuperacion de cuenta bajo control del equipo.                                                                                                     |
| Microsoft Clarity                   | Transferido a Bethza; quedo como administradora.                                | Validar acceso del equipo, mantener masking de inputs y confirmar que el `NEXT_PUBLIC_CLARITY_PROJECT_ID` siga correspondiendo al proyecto correcto.                                |
| Assets / archivos de marca          | Assets incluidos en `public/`                                                   | Centralizar logo, imagenes, brand guideline y fuentes originales en una cuenta/carpeta del equipo.                                                                                  |

## 14. Archivos importantes

- `app/page.tsx`: landing principal.
- `app/SignupForm.tsx`: formulario.
- `app/api/leads/route.ts`: endpoint de registros y webhook a Make.
- `app/CookieConsent.tsx`: banner de cookies.
- `app/ClarityAnalytics.tsx`: carga condicional de Microsoft Clarity.
- `app/privacidad/page.tsx`: Aviso de privacidad.
- `app/terminos/page.tsx`: Terminos y condiciones.
- `app/cookies/page.tsx`: Politica de cookies.
- `app/layout.tsx`: metadatos, SEO, Analytics y estructura global.
- `app/sitemap.ts`: sitemap.
- `public/`: imagenes, logo y assets publicos.
- `.env.example`: variables de entorno esperadas.
- `TRASPASO.md`: este documento de entrega.


## 15. Contexto de producto para continuidad

Hasta el momento del traspaso, el criterio utilizado fue mantener una accion principal en la landing: recomendar o registrar lugares. Se evito fragmentar la captacion en multiples formularios similares para reducir carga cognitiva y mantener claro el flujo principal.

Hipotesis de evolucion documentada hasta ahora:

1. Captar registros y recomendaciones.
2. Depurar categorias y datos.
3. Validar lugares.
4. Explorar rutas y experiencias.
5. Evolucionar hacia una plataforma con contenido revisado.

Estas lineas se documentan unicamente como contexto de las decisiones tomadas hasta ahora. El equipo responsable podra definir la direccion futura del producto.

## 16. Cierre del traspaso

Con la entrega de este documento y la transferencia de los servicios y accesos indicados, queda documentado el estado de Conoce Zapotlanejo al 28 de septiembre de 2026.

El repositorio contiene la implementacion existente a esa fecha, junto con las configuraciones y archivos descritos en este documento.

Cualquier desarrollo, cambio de infraestructura, nueva integracion o evolucion funcional posterior al traspaso debera ser gestionado por el equipo responsable del proyecto.
