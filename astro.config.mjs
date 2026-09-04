// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://astro.build/config
export default defineConfig({
  site: 'https://academiakomuniki.carpones.com',
  integrations: [sitemap()],
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
