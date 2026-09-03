import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bero1007.github.io',
  base: '/ztk-web',
  output: 'static',
  build: { format: 'directory' },
  vite: { build: { assetsInlineLimit: 0 } }
});
