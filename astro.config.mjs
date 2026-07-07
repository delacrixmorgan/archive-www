// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://delacrixmorgan.github.io',
  base: '/archive-www',
  build: {
    format: 'directory',
  },
});
