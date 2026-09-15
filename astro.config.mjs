import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkInteractiveMarkers from './src/plugins/remark-interactive-markers.mjs';

export default defineConfig({
  site: 'https://example.com',
  output: 'static',
  integrations: [mdx(), sitemap()],
  markdown: { remarkPlugins: [remarkMath, remarkInteractiveMarkers], rehypePlugins: [rehypeKatex] }
});
