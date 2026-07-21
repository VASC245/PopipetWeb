# Popipet Ecoarena — Sitio web + Blog

Sitio corporativo y blog SEO de Popipet Ecoarena (Fuego Verde, Ecuador), construido con Nuxt 3 + Nuxt Content.

## Estructura

- `pages/index.vue` — página principal (producto, beneficios, ficha técnica, FAQ, carrito con pedido por WhatsApp)
- `pages/blog/` — índice del blog y plantilla de artículo
- `content/blog/*.md` — artículos del blog en Markdown con frontmatter
- `server/routes/sitemap.xml.ts` — sitemap generado automáticamente (incluye cada artículo nuevo)
- `composables/useCart.ts` — carrito de compras (precio y WhatsApp se configuran aquí)

## Publicar un artículo nuevo

1. Crear un archivo `content/blog/mi-articulo.md` con este formato:

```md
---
title: "Título del artículo"
description: "Meta descripción de 150-160 caracteres con la keyword principal."
date: 2026-07-28
keywords: ["keyword principal", "keyword secundaria"]
---

Contenido en Markdown...
```

2. Hacer commit y push a `main`. Netlify reconstruye y publica automáticamente.
El sitemap y el índice del blog se actualizan solos.

## Desarrollo local

```bash
npm install
npm run dev        # servidor de desarrollo
npm run generate   # genera el sitio estático en .output/public
```

## Deploy (Netlify)

Conectar este repositorio en Netlify. La configuración ya está en `netlify.toml`:
build `npm run generate`, publish `.output/public`.

## Configuración

- Dominio: cambiar `siteUrl` en `nuxt.config.ts` y la URL en `public/robots.txt` + `server/routes/sitemap.xml.ts` si el dominio final no es www.popipet.ec
- Precio: `composables/useCart.ts` (constante `PRODUCT.price`) y JSON-LD en `pages/index.vue`
- WhatsApp: constante `WHATSAPP` en `composables/useCart.ts`
