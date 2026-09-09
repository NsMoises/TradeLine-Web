# GlobalLogistics Pro

Landing page profesional para servicios de logística internacional desde Perú.

## Desarrollo

```bash
npm install
npm run dev
```

## Datos de la empresa

El nombre, ubicación, correo y WhatsApp están centralizados en `src/config/company.ts`.

Antes de publicar, reemplaza los datos provisionales por los oficiales y agrega al `index.html` el dominio canónico y una imagen social absoluta cuando estén disponibles.

## Formulario

El cotizador valida los campos en el navegador y prepara una solicitud estructurada para enviar por WhatsApp. No almacena información en un servidor.

## Analytics

La aplicación incluye Vercel Web Analytics. Después de crear el nuevo proyecto en Vercel, habilita Analytics en el panel y vuelve a desplegar.

## Publicación independiente

Esta copia no contiene la carpeta `.vercel`, por lo que debe vincularse a un proyecto nuevo antes de publicarse:

```bash
vercel
vercel --prod
```
