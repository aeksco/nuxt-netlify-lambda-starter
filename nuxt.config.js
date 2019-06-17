import pkg from './package'
import items from './assets/content/items.json'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },

      // Twitter Card Meta
      // Doc: https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started.html
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:site', value: '@aeksco' },
      { property: 'twitter:creator', value: '@aeksco' },

      // OpenGraph Meta
      // Doc: http://ogp.me/
      { property: 'og:url', content: 'https://nuxt-netlify-lambda-starter.netlify.com' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Nuxt Netlify Lambda Starter' },
      { property: 'og:description', content: 'SEO-friendly website starter backed by Netlify lambda functions' },
      { property: 'og:image', content: 'https://nuxtjs.org/meta_640.png' },
      { property: 'og:image:height', content: 640 },
      { property: 'og:image:width', content: 640 },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:alt', content: 'Nuxt.js Logo' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Generate static pages for all Items
  // Must be done because Item routes are dynamic,
  // but all content is pulled from static data
  // Doc: https://nuxtjs.org/api/configuration-generate
  generate: {
    routes: items.map(g => '/items/' + g.id)
  },

  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/sass/main.sass',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/jsonld.js',
    { src: '~plugins/ga.js', ssr: false },
    { src: '~plugins/hotjar.js', ssr: false },
    { src: '~plugins/mailchimp.js', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://www.npmjs.com/package/vue-github-buttons#using-with-nuxt
    'vue-github-buttons/nuxt',
  ],

  // Bootstrap vue configuration
  bootstrapVue: {
    bootstrapCSS: false, // or `css`
    bootstrapVueCSS: false // or `bvCSS`
  },

  // @nuxtjs/axios plugin configuration
  axios: {
    prefix: '/',
    baseUrl: '/', // For the server
    browserBaseURL: '/'
  },

  // @nuxtjs/proxy configuration
  proxy: {
    '/.netlify': {
      target: 'http://localhost:9000',
      pathRewrite: { '^/.netlify/functions': '' }
    }
  },

  // Frontend environment variables configuration
  // Doc: https://nuxtjs.org/api/configuration-env
  env: {
    HOTJAR_SITE_ID: process.env.HOTJAR_SITE_ID ? Number(process.env.HOTJAR_SITE_ID) : undefined,
    GA_TRACKING_ID: String(process.env.GA_TRACKING_ID),
    MAILCHIMP_BASE_URL: String(process.env.MAILCHIMP_BASE_URL),
    MAILCHIMP_UUID: String(process.env.MAILCHIMP_UUID),
    MAILCHIMP_LID: String(process.env.MAILCHIMP_LID)
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true // NOTE - this is set to `true` so prettier automatically cleans up the file on save
          }
        })
      }
    }
  }
}
