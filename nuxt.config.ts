// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    $production: {
        routeRules: {
            '/**': { isr: true },
        },
    },
    $development: {
        //
    },
    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
            apiBase: '/api',
        },
    },
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    vite: {
        vue: {
            template: {},
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/css/_colors.scss" as *;',
                },
            },
        },
    },
    // css: ['~/assets/css/main.scss']
})
