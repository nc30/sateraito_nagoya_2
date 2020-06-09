export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'サテライトナゴヤ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '同人サークルサテライトナゴヤ' },
      { hid: 'author', property: 'author', content: 'Haigo' },
      { hid: 'keyword', property: 'keyword', content: 'サテライトナゴヤ' },
      { hid: 'twitter:creator', name: "twitter:creator", content: "@satellitenagoya" },
      { hid: 'twitter:card', name: "twitter:card", content: "summary" },
      { hid: 'og:title', property: "og:title", content: "サテライトナゴヤ" },
      { hid: 'og:description', property: "og:description", content: "世界の中心は常に東海地方にある" },
      { hid: 'og:image', property: "og:image", content: "https://sateraito.nagoya/img/eight-compressor.jpg" }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: "https://cdnjs.cloudflare.com/ajax/libs/font-mfizz/2.4.1/font-mfizz.min.css", rel:"stylesheet"},
    ],
    script: [
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    // 'bulma'
    '~/assets/base.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vue-spinner.js',
  ],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/sentry',
    [
      '@nuxtjs/google-gtag',
      {
        id: process.env.GA_ID,
        debug: false
      }
    ]
  ],

  toast: {
      position: 'center-left',
      duration: 5000,
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.API_ROOT,
    timeout: 30000
  },
  /*
  ** Build configuration
  */
  build: {
    extend (config, ctx) {
    }
  },

  sentry: {
    config: {
    },
  },

  env: {
    RECAPTCHA_KEY: process.env.RECAPTCHA_KEY,
    SENTRY_DSN: process.env.SENTRY_DSN,
  }
}
