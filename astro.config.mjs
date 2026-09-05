// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://astro.build/config
export default defineConfig({
  site: 'https://komuniki.cabello-torres.com',
  integrations: [sitemap()],

  // Las páginas ES antiguas pasan a redirigir a la sección equivalente de la
  // one-page, para no competir con ella por las mismas búsquedas ni quedarse
  // huérfanas. En build estático Astro genera meta-refresh + canonical.
  redirects: {
    '/quienes-somos': '/#christine',
    '/objetivos': '/#clases',
    '/resultados': '/#opiniones',
    '/contacto': '/#contacto',
    '/christinadauzon': '/#contacto',
    '/anuncios': '/#contacto',
    '/colaboramos': '/',
    '/el-camino-a-la-felicidad': '/',
    '/juventud-por-los-derechos-humanos': '/',
  },

  vite: {
    plugins: [basicSsl()],
    server: {
      https: {},
      allowedHosts: ['.devtunnels.ms'],
    },
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
