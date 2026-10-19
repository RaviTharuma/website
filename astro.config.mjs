import { defineConfig } from "astro/config";

/** Static site. The build reads local JSON only and does not call Sanity. */
export default defineConfig({
  site: "https://ravitharuma.io",
  output: "static",
});
