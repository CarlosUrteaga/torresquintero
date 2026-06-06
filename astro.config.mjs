import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://torresquintero.edu.mx",
  output: "static",
  integrations: [sitemap()],
});
