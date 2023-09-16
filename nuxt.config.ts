import path from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
  ],
  devtools: { enabled: true },
  ssr: false,
  alias: {
    "~": path.resolve(__dirname),
  }
})
