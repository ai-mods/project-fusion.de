// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://project-fusion.de",
  // The sitemap i18n mapping only pairs routes sharing the same path behind
  // the locale prefix (`/` ↔ `/de/`); the privacy pages use localized slugs
  // (`/privacy/` ↔ `/de/datenschutz/`) and are linked solely via the
  // hreflang tags in the HTML (BaseLayout).
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", de: "de" },
      },
    }),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    routing: { prefixDefaultLocale: false },
  },
});
