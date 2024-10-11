// @ts-check
import { defineConfig } from 'astro/config';
import fulldev from 'fulldev-ui/integration'
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output:'server',
  integrations: [tailwind()]
});