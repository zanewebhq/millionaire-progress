import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  site: 'https://millionaireprogress.com',
  integrations: [sitemap()],
});
