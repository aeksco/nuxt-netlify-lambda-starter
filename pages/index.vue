<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="row mt-2">
        <div class="col-lg-12 text-center">
          <p class="wow">
            wow, it's...
          </p>
          <h4 class="display-4">Nuxt Netlify Lambda Starter</h4>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12 text-center">
          <p class="text-muted">
            (what a name!)
          </p>
          <p class="lead">
            SEO-friendly website starter backed by Netlify lambda functions
          </p>
          <p class="lead">
            All in a single, friendly repo -
            <i>nice.</i>
          </p>
        </div>

        <div class="col-lg-12 d-flex flex-column align-items-center">
          <h4>Overview</h4>
          <ul class="lead">
            <li>
              Pre-rendered app with
              <a href="https://vuejs.org" target="_blank">Vue</a> +
              <a href="https://nuxtjs.org" target="_blank">Nuxt.js</a>
            </li>
            <li>
              Deploy the full stack in seconds with
              <a href="http://netlify.com" target="_blank">Netlify</a>
            </li>
            <li>
              Amaze your <a href="/friends">friends</a>
              with dynamic static pages
            </li>
          </ul>
        </div>

        <div class="col-lg-12 d-flex flex-column align-items-center">
          <h4>Features</h4>
          <ul>
            <li>
              Includes
              <a
                href="https://analytics.google.com/analytics/web/#/"
                target="_blank"
              >
                Google Analytics
              </a>
              ,
              <a href="https://hotjar.com" target="_blank">HotJar</a>, and
              <a href="https://mailchimp.com" target="_blank">
                MailChimp
              </a>
              out of the box
            </li>
            <li>
              Includes
              <a
                href="https://developers.google.com/search/docs/guides/intro-structured-data"
                target="_blank"
              >
                JSON-LD
              </a>
              snippet for fantastic SEO
            </li>
            <li>
              Bundled with
              <a
                href="https://github.com/FortAwesome/vue-fontawesome"
                target="_blank"
              >
                FontAwesome 5
              </a>
              optimized for performance
            </li>
            <li>
              Built with
              <a href="https://getbootstrap.com" target="_blank">
                Bootstrap
              </a>
              &amp;
              <a href="https://bootstrap-vue.js.org/" target="_blank">
                Bootsrap-Vue
              </a>
            </li>

            <li>
              Written in
              <a href="https://es6.io/" target="_blank">ES6</a> &amp;
              <a href="https://sass-lang.com" target="_blank">SASS</a>
            </li>
          </ul>
        </div>

        <div
          class="col-lg-12 text-center d-flex flex-column align-items-center"
        >
          <gh-btns-star slug="aeksco/nuxt-netlify-lambda-starter" show-count />

          <br />

          <p class="lead mb-0 mt-2">
            <span>Built with </span>
            <font-awesome-icon icon="heart" class="text-danger" />
            <span class="px-1">by</span>
            <a href="https://github.com/aeksco" target="_blank">@aeksco</a>
          </p>

          <gh-btns-follow class="mt-3" user="aeksco" show-count />

          <br />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Nuxt Netlify Lambda - Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt Netlify Lambda Home description'
        }
      ]
    }
  }
}
</script>

<style scoped lang="sass">
p.wow
  -ms-transform: rotate(-7deg)
  -webkit-transform: rotate(-7deg)
  transform: rotate(-7deg)
  font-size: 1.5rem
  margin-bottom: 0
  font-family: "Comic Sans MS", cursive, sans-serif
</style>
