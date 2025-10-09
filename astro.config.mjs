import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mmhsbulldogs.org',
  integrations: [tailwind({ applyBaseStyles: true })],
  vite: { 
    server: { port: 4321 },
    resolve: { alias: { '@': '/src', '~': '/src' } }
  }

});
