import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify"
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: netlify()
});
