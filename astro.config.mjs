import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mmhsbulldogs.org',
  integrations: [tailwind({ applyBaseStyles: true })],

  // add target=_blank to external link
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener','noreferrer'] }]
    ]
  },
  vite: { 
    server: { port: 4321 },
    resolve: { alias: { '@': '/src', '~': '/src' } }
  }

});
