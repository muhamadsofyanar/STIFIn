import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://stifinmulia.com',
  integrations: [sitemap({ filter: (page) => !page.includes('/ikut-tes-stifin/') && !page.includes('/terima-kasih-tes/') })],
  output: 'static',
  build: { format: 'directory' },
});
