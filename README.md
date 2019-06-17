# nuxt-netlify-lambda-starter

:hammer_and_wrench: SEO-friendly website starter backed by Netlify lambda functions in a simple, friendly repo

This is a basic starter project for a prerendered [Vue.js](https://vuejs.org/) + [Nuxt.js](https://nuxtjs.org/) frontend with a [Netlify lambda function](https://www.netlify.com/docs/functions/) backend. The Nuxt.js app is pre-rendered for improved SEO.

### [You can view the deployed app here](https://nuxt-netlify-lambda-starter.netlify.com/)

### Features
- Home, About, and 404 Pages
- `HelloWorld` example Lambda function with associated frontend code
- Pre-rendered dynamic pages using a sample `Item` datatype
- Integrates with [HotJar](https://hotjar.com"), [Mailchimp](https://mailchimp.com"), and [Google Analytics](https://analytics.google.com/analytics/web/#/)
- Includes [JSON-LD Structured Data](https://developers.google.com/search/docs/guides/intro-structured-data) for outstanding SEO
- Pre-configured with [OpenGraph](http://ogp.me/) and [Twitter Cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started.html) meta tags for beautiful [unfurls](https://medium.com/slack-developer-blog/everything-you-ever-wanted-to-know-about-unfurling-but-were-afraid-to-ask-or-how-to-make-your-e64b4bb9254) when sharing on social media
- Customizable UI using [Bootstrap](https://getbootstrap.com) & [SASS](https://sass-lang.com) variables

**NOTE:** this project can only be deployed via Netlify with [continuous deployment](https://www.netlify.com/docs/continuous-deployment/) enabled.

### Build Setup

``` bash
# Install dependencies
$ yarn install

# Serve with hot reload at localhost:3000 and serves Netlify Functions
$ yarn run dev

# Build for production
$ yarn run build
```

Note that [Prettier]() will automatically clean up your code when you save. You can adjust this behavior in the `build` section at line `127` in `nuxt.config.js`.

### Pre-rendered Dynamic Pages

This project includes a series of pre-rendered pages using a generic `Item` datatype. The data for these pages is maintained in `assets/content/items.json` and they're generated with a custom `generate` field in `nuxt.config.js`:

```js
generate: {
  routes: items.map(g => '/items/' + g.id)
}
```

This ensures that each item has a page that's pre-renderd and SEO-optimized. You can clone, modify, or remove the `Item` datatype and associated pages to better suit your needs.

### Environment Configuration
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

### JSON-LD Structured Data

The [JSON-LD Structured Data](https://developers.google.com/search/docs/guides/intro-structured-data) can be updated by modifying the `jsonld()` function in the `layouts/default.vue` file. This feature shouldn't be used anywhere else - one `JSON-LD` snippet should describe the entire site.

### OpenGraph and Twitter Card Meta Tags

The `<meta>` tags for [OpenGraph](http://ogp.me/) and [Twitter Cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started.html) are located in the `head` section of `nuxt.config.js`. **You should change these from their default values**. You can validate your changes using the [Twitter Card Validator](https://cards-dev.twitter.com/validator) and the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/sharing).

### Bootstrap + SASS Configuration

You can modify the `assets/sass/main.sass` file to optionally include Bootstrap component styles as-needed. **PROTIP** - only include the Bootstrap components your app depends on - this will keep your CSS bundle nice and slim :)

You can also modify any of [Bootstrap's SASS Variables](https://github.com/twbs/bootstrap/blob/master/scss/_variables.scss) inside the `assets/sass/variables.sass` file to customize the framework to your liking.

### FontAwesome Vue Configuration

The repo includes a minimal subset of icons by default. When you need an additional icon, you must import it directly in `plugins/fontawesome.js` and register it with the FontAwesome plugin. You can learn more about the Vue-FontAwesome library [here](https://github.com/FortAwesome/vue-fontawesome).

### References
- [Vue.js](https://vuejs.org)
- [Nuxt.js](https://nuxtjs.org)
- [Netlify Functions](https://www.netlify.com/docs/functions/)
- [Bootstrap-Vue](https://bootstrap-vue.js.org/)
- [Bootstrap Components](https://getbootstrap.com/docs/4.3/components/alerts/)
- [FontAwesome Vue](https://github.com/FortAwesome/vue-fontawesome)
- [`netlify.toml` Docs](https://www.netlify.com/docs/netlify-toml-reference/)
