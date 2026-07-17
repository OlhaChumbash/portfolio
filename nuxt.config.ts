export default defineNuxtConfig({
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "swiper/css/bundle",
    "vue3-carousel/dist/carousel.css",
    "~/assets/scss/main.scss",
    'devicon/devicon.min.css'
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

//   nitro: {
//   preset: 'github-pages',

//   prerender: {
//     crawlLinks: false,
//   },
// },

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
  bundle: {
    optimizeTranslationDirective: false,
  },

  strategy: 'no_prefix',
  defaultLocale: 'ua',
  lazy: true,
  langDir: 'locales',

  locales: [
    {
      code: 'ua',
      file: 'ua.json',
      name: 'Українська'
    },
    {
      code: 'de',
      file: 'de.json',
      name: 'Deutsch'
    },
    {
      code: 'en',
      file: 'en.json',
      name: 'English'
    }
  ],

  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'locale',
    redirectOn: 'root',
    fallbackLocale: 'ua',
    alwaysRedirect: false
  }
},
  app: {
    baseURL: '/portfolio/',
    head: {
      title: "Portfolio Olha Chumbash",
      meta: [
        { name: 'color-scheme', content: 'dark' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/portfolio/favicon.ico'
        },
        {
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css',
          rel: 'stylesheet'
        }
      ],

      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js",
          integrity:
            "sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2",
          crossorigin: "anonymous",
        },
        {
          src: 'https://www.google.com/recaptcha/api.js?render=6LcwRRUaAAAAADavxcmw5ShOEUt1xMBmRAcPf6QP',
          async: true,
          defer: true
        }
      ],
    },
  },

  ssr: true,

  compatibilityDate: '2025-07-02',
});