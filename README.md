# nuxt-netlify-lambda-starter

:hammer_and_wrench: SEO-friendly website starter backed by Netlify lambda functions in a simple, friendly repo

This is a basic starter project for a prerendered [Vue.js](https://vuejs.org/) + [Nuxt.js](https://nuxtjs.org/) frontend with a [Netlify lambda function](https://www.netlify.com/docs/functions/) backend. The Nuxt.js app is pre-rendered for improved SEO.

### [You can view the deployed app here](https://nuxt-netlify-lambda-starter.netlify.com/)

#### Features
- Home and About Pages
- `HelloWorld` example Lambda function with associated frontend code
- Pre-rendered dynamic pages using a sample `Item` datatype
- Integrates with [HotJar](https://hotjar.com"), [Mailchimp](https://mailchimp.com"), and [Google Analytics](https://analytics.google.com/analytics/web/#/)
- Includes [JSON-LD Structured Data](https://developers.google.com/search/docs/guides/intro-structured-data)

**NOTE:** this project can only be deployed via Netlify with [continuous deployment](https://www.netlify.com/docs/continuous-deployment/) enabled.

#### Build Setup

``` bash
# Install dependencies
$ yarn install

# Serve with hot reload at localhost:3000 and serves Netlify Functions
$ yarn run dev

# Build for production
$ yarn run build
```

#### Environment Configuration
The following production environment variables are required for the respective plugins to work correctly:

```bash
# Google Analytics Tracking Code
GA_TRACKING_ID=UA-XXX-X

# HotJar Site Identifier
HOTJAR_SITE_ID=1234567

# Mailchimp Script Variables
MAILCHIMP_BASE_URL=mc.us19.list-manage.com
MAILCHIMP_LID=abcde12345
MAILCHIMP_UUID=aabbccddeeffgghhiijj12345
```

These variables can be configured in a variety of ways - please consult the [Netlify Continuous Deployment Docs](https://www.netlify.com/docs/continuous-deployment/#environment-variables). You can deactivate any of these plugins by modifying the `plugins` field in the `nuxt.config.js` file.

#### JSON-LD Structured Data

The [JSON-LD Structured Data](https://developers.google.com/search/docs/guides/intro-structured-data) can be updated by modifying the `jsonld()` function in the `layouts/default.vue` file. This feature shouldn't be used anywhere else - one `JSON-LD` snippet should describe the entire site.

#### Bootstrap + SASS Configuration

You can modify the `assets/sass/main.sass` file to optionally include Bootstrap component styles as-needed. **PROTIP** - only include the Bootstrap components your app depends on - this will keep your CSS bundle nice and slim :)

#### FontAwesome Vue Configuration

The repo includes a minimal subset of icons by default. When you need an additional icon, you must import it directly in `plugins/fontawesome.js` and register it with the FontAwesome plugin. You can learn more about the Vue-FontAwesome library [here](https://github.com/FortAwesome/vue-fontawesome).

#### References
- [Vue.js](https://vuejs.org)
- [Nuxt.js](https://nuxtjs.org)
- [Netlify Functions](https://www.netlify.com/docs/functions/)
- [Bootstrap-Vue](https://bootstrap-vue.js.org/)
- [Bootstrap Components](https://getbootstrap.com/docs/4.3/components/alerts/)
- [FontAwesome Vue](https://github.com/FortAwesome/vue-fontawesome)
- [`netlify.toml` Docs](https://www.netlify.com/docs/netlify-toml-reference/)
