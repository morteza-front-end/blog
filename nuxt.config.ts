// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr:true,
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    tailwindcss: {
        configPath:'./tailwind.config.js'
    }
})
