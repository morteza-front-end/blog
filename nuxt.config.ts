// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    devtools: {enabled: true},
    css: ['~/assets/css/tailwind.css'],
    runtimeConfig:{
        public:{
            baseUrl: process.env.BASE_URL
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
