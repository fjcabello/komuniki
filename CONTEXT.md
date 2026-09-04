# Contexto para agentes — komuniki

Documento de traspaso. Resume el estado del proyecto y los cambios hechos en la última sesión.

## Proyecto

- Sitio estático **Astro 6.4.4** (`astro.config.mjs`, `type: module`).
- Migración del sitio Wix de Academia Komuniki a Astro.
- `site`: `https://academiakomuniki.carpones.com`
- Integraciones: `@astrojs/sitemap`.
- i18n: `defaultLocale: 'es'`, locales `['es', 'fr']`, `prefixDefaultLocale: false`
  (las rutas ES van en la raíz, las FR bajo `/fr/`).
- Node requerido: `>=22.12.0`.

### Estructura relevante

```
src/
  layouts/Layout.astro
  components/    ContactForm, Footer, Header, Quote, Testimonial (.astro)
  pages/         index, anuncios, christinadauzon, colaboramos, contacto,
                 el-camino-a-la-felicidad, juventud-por-los-derechos-humanos,
                 objetivos, quienes-somos, resultados
  pages/fr/      index.astro (placeholder)
  styles/global.css
public/          robots.txt, images/
COMPARATIVA.md   comparación con el sitio original de Wix
```

## Cómo arrancar en local

```sh
npm install     # solo la primera vez
npm run dev     # https://localhost:4321/
```

Otros comandos: `npm run build` (salida en `./dist/`), `npm run preview`.

## Cambios de la última sesión

**Objetivo:** el dev server debía servirse por HTTPS (el navegador no permitía HTTP).

1. Instalado `@vitejs/plugin-basic-ssl` como devDependency.
2. En `astro.config.mjs` se añadió el bloque `vite`:

```js
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  // ...
  vite: {
    plugins: [basicSsl()],
    server: { https: {} },
  },
});
```

**Consecuencias / cosas a saber:**

- El dev server ahora escucha en `https://localhost:4321/` (ya no en `http://`).
- El certificado es **autofirmado**: la primera vez el navegador muestra un aviso de
  seguridad → "Avanzado" / "Continuar de todos modos". Es esperado.
- Esto afecta **solo a desarrollo**; `astro build` genera estáticos y no se ve afectado.
- Si en el futuro no se quiere HTTPS en local, basta con eliminar el bloque `vite`
  de `astro.config.mjs`.

## Estado del repositorio (en el momento de escribir esto)

- Rama: `feature/pixel-perfect-wix` (por delante de `main`).
- Últimos commits:
  - `36f8968` feat: add 7 missing testimonials from Wix, download PDF formulario, add PDF link in objetivos
  - `c5014fb` feat: add COMPARATIVA.md, christinadauzon page, fr/ placeholder, and UI fixes
  - `7f43039` feat: migrate Wix site to Astro and deploy-ready structure
- Cambios sin commitear: `astro.config.mjs`, `package.json`, `package-lock.json`,
  `src/layouts/Layout.astro`, `src/pages/{colaboramos,el-camino-a-la-felicidad,index}.astro`.
- Sin trackear: `.github/`, `public/robots.txt`, `public/images/{bombilla-encendida.png, ccdh.jpg, drugs-booklet.jpg}`.

## Notas

- `README.md` sigue siendo el template por defecto de Astro (menciona `localhost:4321`
  por HTTP); no se ha actualizado.
- Astro 7.3.1 está disponible; el proyecto sigue en 6.4.4. Actualizar con
  `npx @astrojs/upgrade` si se decide migrar.
