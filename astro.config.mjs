// @ts-check
import { defineConfig } from 'astro/config';
import fulldev from 'fulldev-ui/integration'
import tailwind from '@astrojs/tailwind';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output:'server',
  integrations: [tailwind()],
  adapter: netlify({
    edgeMiddleware: true
  }),
});