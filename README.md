# Conoce Zapotlanejo

Landing page para Conoce Zapotlanejo: una plataforma interactiva para descubrir, recomendar y registrar lugares, negocios y experiencias locales de Zapotlanejo.

El sitio permite:

- Recibir recomendaciones de lugares o negocios.
- Registrar personas interesadas en recibir aviso del lanzamiento.
- Enviar nuevos registros a Make mediante webhook.
- Medir visitas con Vercel Analytics.
- Cargar Microsoft Clarity solo cuando la persona acepta cookies de analitica.

## Requisitos

- Node.js `>=22.13.0`
- npm

Para verificar tu version de Node:

```bash
node -v
```

Si la version es menor a `22.13.0`, instala o activa una version compatible antes de correr el proyecto.

## Instalacion

Desde la carpeta del proyecto:

```bash
npm install
```

## Variables de entorno

Crea un archivo `.env.local` en la raiz del proyecto. Puedes partir de `.env.example`:

```bash
cp .env.example .env.local
```

Variables esperadas:

```env
MAKE_WEBHOOK_URL=https://hook.us2.make.com/tu-webhook
NEXT_PUBLIC_CLARITY_PROJECT_ID=tu-id-de-clarity
```

### MAKE_WEBHOOK_URL

URL del webhook de Make que recibe los registros del formulario.

Debe tratarse como secreto. No debe subirse al repositorio ni compartirse en documentos publicos.

Si no se configura, el formulario puede responder localmente, pero no enviara registros a Make.

### NEXT_PUBLIC_CLARITY_PROJECT_ID

ID del proyecto de Microsoft Clarity.

Puede ser publico porque se carga en el navegador. Aun asi, normalmente se configura como variable de entorno en Vercel.

Clarity solo se carga despues de que la persona acepta cookies de analitica.

## Correr en local

```bash
npm run dev
```

Luego abre:

```text
http://localhost:3000
```

Si el puerto `3000` esta ocupado, Next.js puede usar otro puerto. Revisa la URL que aparezca en la terminal.

## Comandos utiles

```bash
npm run dev
```

Inicia el servidor local de desarrollo.

```bash
npm run build
```

Genera el build de produccion y ayuda a detectar errores antes de desplegar.

```bash
npm run start
```

Corre el build de produccion localmente. Antes necesitas haber ejecutado `npm run build`.

```bash
npm run lint
```

Revisa errores de lint en `app`, `db` y `worker`.

## Estructura principal

```text
app/
  page.tsx              Pagina principal de la landing
  SignupForm.tsx        Formulario de registro/recomendacion
  api/leads/route.ts    Endpoint que valida y envia leads a Make
  privacidad/           Aviso de privacidad
  terminos/             Terminos y condiciones
  cookies/              Politica de cookies
public/
  assets e imagenes publicas del sitio
TRASPASO.md             Documento de traspaso operativo
PRODUCT.md              Contexto de producto
DESIGN.md               Guia visual / criterios de diseno
.env.example            Ejemplo de variables de entorno
```

## Flujo del formulario

El formulario vive en `app/SignupForm.tsx`.

Actualmente tiene dos modos:

- Recomendar o registrar un lugar/negocio.
- Recibir aviso del lanzamiento.

El endpoint que recibe la informacion esta en:

```text
app/api/leads/route.ts
```

Ese endpoint:

- Valida datos requeridos.
- Evita exponer datos personales en logs.
- Valida que el contacto parezca correo o WhatsApp valido.
- Usa un campo honeypot basico contra spam.
- Reenvia la informacion a Make si existe `MAKE_WEBHOOK_URL`.

## Analitica

El sitio incluye:

- Vercel Analytics.
- Microsoft Clarity, condicionado al consentimiento de cookies.

Para activar Clarity en produccion:

1. Configura `NEXT_PUBLIC_CLARITY_PROJECT_ID` en Vercel.
2. Redeploy del proyecto.
3. Verifica que Clarity reciba datos despues de aceptar cookies de analitica.

Importante: mantener masking de inputs en Clarity para evitar capturar datos personales.

## Despliegue

El proyecto esta preparado para desplegarse en Vercel.

Checklist basico para una nueva cuenta o nuevo deployment:

1. Migrar o conectar el repositorio definitivo.
2. Crear el proyecto en Vercel.
3. Configurar variables de entorno:
   - `MAKE_WEBHOOK_URL`
   - `NEXT_PUBLIC_CLARITY_PROJECT_ID`
4. Configurar dominio y DNS.
5. Ejecutar un registro de prueba.
6. Confirmar que Make recibe el lead.
7. Confirmar que el correo de notificacion se envia correctamente.
8. Confirmar que la hoja de Google Sheets recibe el registro.

## Traspaso operativo

Antes de entregar el proyecto a otra persona o equipo, revisar:

- [TRASPASO.md](./TRASPASO.md)
- Acceso a GitHub.
- Acceso a Vercel.
- Variables de entorno en Vercel.
- Escenario de Make.
- Google Sheets de registros.
- Acceso a `conocezapotlanejo@gmail.com`.
- Microsoft Clarity.
- DNS del dominio.

## Notas importantes

- No subir `.env.local` al repositorio.
- No publicar el webhook real de Make.
- Si se clona la hoja de Google Sheets, tambien hay que actualizar el escenario de Make.
- Si se recrea el deployment en Vercel, tambien hay que revisar DNS, variables de entorno y dominio.
- Si se cambia el formulario, revisar tambien `app/api/leads/route.ts` y el escenario de Make para mantener los campos sincronizados.
