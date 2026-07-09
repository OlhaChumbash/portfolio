// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "swiper/css/bundle",
    "vue3-carousel/dist/carousel.css",
    "~/assets/scss/main.scss",
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true
        }
      }
    }
  },

  modules: [
    '@nuxtjs/i18n',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
  ],

  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'uk',
    lazy: true,
    langDir: 'locales',
    locales: [
      // { code: 'en', file: 'en.json', name: 'English' },
      { code: 'uk', file: 'uk.json', name: 'Українська' }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'locale',
      redirectOn: 'root',
      fallbackLocale: 'uk',
      alwaysRedirect: false
    }
  },

  app: {
    head: {
      title: "Lyceum INTITA",
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
        { href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css', rel: 'stylesheet' }
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js",
          integrity:
              "sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2",
          crossorigin: "anonymous",
        },
        { src: 'https://www.google.com/recaptcha/api.js?render=6LcwRRUaAAAAADavxcmw5ShOEUt1xMBmRAcPf6QP', async: true, defer: true }
      ],
    },
  },

  compatibilityDate: '2025-07-02',
});