# IngresosConIA — Blog de IA, Shopify y E-commerce

Blog profesional sobre herramientas de IA, Shopify y cómo ganar dinero online en España.
Construido con **Astro 4**, **Tailwind CSS** y **MDX**.

---

## 🚀 Ejecutar en local

### Requisitos previos

- Node.js 18+ instalado
- npm o pnpm

### Pasos

```bash
# 1. Clona el repositorio o accede al directorio
cd ingresosconia

# 2. Instala las dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev
```

La web estará disponible en `http://localhost:4321`.

### Otros comandos

```bash
npm run build     # Construye el sitio para producción (genera /dist)
npm run preview   # Vista previa de la build de producción en local
```

---

## ✍️ Añadir nuevos artículos

Los artículos del blog se encuentran en `src/content/blog/` como archivos `.mdx`.

### Crear un nuevo artículo

1. Crea un archivo `.mdx` en `src/content/blog/` con el slug del artículo como nombre:
   ```
   src/content/blog/tu-nuevo-articulo.mdx
   ```

2. Añade el **frontmatter** al inicio del archivo (campos obligatorios y opcionales):

```mdx
---
title: "Título del Artículo Optimizado para SEO"
description: "Descripción de 140-160 caracteres para los buscadores y redes sociales."
pubDate: 2025-06-01
category: "IA"
tags: ["ia", "chatgpt", "automatizacion"]
readingTime: "6 min"
author: "IngresosConIA"
image: "/blog/og-nombre-del-articulo.jpg"
featured: false
---
```

#### Explicación de cada campo

| Campo | Tipo | Obligatorio | Descripción |
|-------|------|-------------|-------------|
| `title` | string | ✅ | Título del artículo (aparece en la web y como `<title>`) |
| `description` | string | ✅ | Descripción para SEO y Open Graph (140-160 caracteres) |
| `pubDate` | date | ✅ | Fecha de publicación en formato `YYYY-MM-DD` |
| `category` | enum | ✅ | Una de: `"IA"`, `"Shopify"`, `"Ganar Dinero"`, `"Herramientas"` |
| `tags` | string[] | ✅ | Array de etiquetas en minúsculas sin acentos |
| `readingTime` | string | ✅ | Estimación manual: `"5 min"`, `"8 min"`, etc. |
| `author` | string | ❌ | Por defecto: `"IngresosConIA"` |
| `image` | string | ❌ | Ruta a la imagen OG: `/blog/og-nombre.jpg` (1200×630px) |
| `featured` | boolean | ❌ | `true` para mostrar en la sección destacada del home |

3. Escribe el contenido en Markdown/MDX después del frontmatter.

4. Para insertar el anuncio In-Article después del tercer párrafo, usa el componente `<InArticleAd />`:

```mdx
Tercer párrafo del artículo...

<InArticleAd />

Cuarto párrafo...
```

### Calcular el tiempo de lectura

Usa la regla: **200 palabras por minuto**. Un artículo de 1.000 palabras = `"5 min"`.

---

## 📢 Google AdSense: cómo integrarlo

### Paso 1: Solicitar AdSense

1. Accede a [ads.google.com](https://ads.google.com)
2. Crea una cuenta de AdSense con tu email de Google
3. Añade el sitio `ingresosconia.es` y espera la aprobación (puede tardar días o semanas)

### Paso 2: Pegar el script de AdSense

Una vez aprobado, Google te dará un script similar a:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXX"
        crossorigin="anonymous"></script>
```

**Pégalo en `src/layouts/BaseLayout.astro`** en la sección marcada con:

```
<!-- ADSENSE SCRIPT — Paste your publisher script here after approval. -->
```

Localiza el comentario aproximadamente en la línea 65 del archivo y reemplaza la línea comentada con tu script real.

### Paso 3: Activar los bloques de anuncios

Cada bloque de anuncio tiene un comentario marcado `ADSENSE:XXX_START / ADSENSE:XXX_END` en su componente:

| Unidad | Archivo | Descripción |
|--------|---------|-------------|
| Header (728×90) | `src/components/ads/HeaderAd.astro` | Banner en la parte superior |
| In-Article | `src/components/ads/InArticleAd.astro` | Dentro de los artículos |
| Sidebar (300×250) | `src/components/ads/SidebarAd.astro` | Columna lateral del artículo |
| Footer (responsive) | `src/components/ads/FooterAd.astro` | Footer de la página |

En cada archivo, reemplaza el bloque `<!-- ADSENSE:XXX_START ... ADSENSE:XXX_END -->` con el código `<ins>` real que te genera AdSense para cada unidad.

---

## ▲ Desplegar en Vercel — Guía paso a paso

### Método 1: Desde la interfaz web de Vercel (recomendado)

1. Sube el proyecto a GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/TU_USUARIO/ingresosconia.git
   git push -u origin main
   ```

2. Ve a [vercel.com](https://vercel.com) y crea una cuenta (o inicia sesión).

3. Haz clic en **"Add New → Project"**.

4. Importa el repositorio de GitHub que acabas de crear.

5. Vercel detectará automáticamente que es un proyecto Astro. Confirma la configuración:
   - **Framework Preset:** Astro
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

6. Haz clic en **Deploy**. En 1-2 minutos tendrás la web desplegada en una URL de Vercel.

### Método 2: Desde la CLI de Vercel

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Variables de entorno

No hay variables de entorno requeridas por defecto. Si añades integraciones externas (Formspree, SendGrid, etc.), configúralas en Vercel → Settings → Environment Variables.

---

## 🌐 Conectar el dominio ingresosconia.es en Vercel

1. En el dashboard de Vercel, entra en tu proyecto → **Settings → Domains**.

2. Haz clic en **"Add Domain"** y escribe `ingresosconia.es`.

3. Vercel te mostrará los registros DNS que debes configurar en tu registrador de dominio. Típicamente:

   | Tipo | Host | Valor |
   |------|------|-------|
   | A | @ | 76.76.21.21 |
   | CNAME | www | cname.vercel-dns.com |

4. Entra en el panel de control de tu registrador (.es):
   - Si registraste en **Nominalia, Dinahosting, Acens, Dondominio, Gandi**: busca "Gestión DNS" o "Zona DNS" para tu dominio.
   - Añade el registro A apuntando a la IP de Vercel.
   - Añade el CNAME `www` apuntando a `cname.vercel-dns.com`.

5. La propagación DNS puede tardar entre **5 minutos y 48 horas**. Vercel verificará automáticamente y activará el SSL (HTTPS) gratuitamente.

6. Opcional: en Vercel → Settings → Domains, marca `ingresosconia.es` como dominio principal y configura el redirect de `www` al dominio raíz (o viceversa).

---

## 📁 Estructura del proyecto

```
ingresosconia/
├── public/
│   ├── robots.txt
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ads/              # Placeholders de AdSense
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── CookieBanner.astro
│   │   ├── ArticleCard.astro
│   │   ├── Breadcrumbs.astro
│   │   ├── NewsletterForm.astro
│   │   ├── RelatedArticles.astro
│   │   └── SocialShare.astro
│   ├── content/
│   │   ├── config.ts         # Schema de los artículos
│   │   └── blog/             # Artículos en .mdx
│   ├── layouts/
│   │   ├── BaseLayout.astro  # Layout base con SEO completo
│   │   └── BlogPost.astro    # Layout específico de artículos
│   ├── pages/
│   │   ├── index.astro       # Homepage
│   │   ├── blog/
│   │   │   ├── index.astro   # Listado pág. 1
│   │   │   ├── pagina/[page].astro  # Paginación
│   │   │   └── [slug].astro  # Artículo individual
│   │   ├── categoria/[categoria].astro
│   │   ├── recursos.astro
│   │   ├── sobre-mi.astro
│   │   ├── contacto.astro
│   │   ├── politica-de-privacidad.astro
│   │   ├── aviso-legal.astro
│   │   └── politica-de-cookies.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── vercel.json
└── package.json
```

---

## 📝 Notas adicionales

- **Imagen OG por defecto:** Crea una imagen `og-default.jpg` (1200×630px) en `/public/` con el branding de IngresosConIA para ser usada cuando los artículos no tienen imagen propia.
- **Formulario de contacto:** El formulario en `/contacto` necesita un backend. Conecta con [Formspree](https://formspree.io) actualizando el atributo `action` del formulario con tu endpoint.
- **Mapa del sitio:** Se genera automáticamente en `/sitemap-index.xml` durante el build.
- **Modo oscuro:** Se guarda en `localStorage` como `theme: 'dark'|'light'`. El sistema respeta también la preferencia del sistema operativo.
