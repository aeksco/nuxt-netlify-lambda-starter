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
          <h4>Features</h4>
          <ul class="lead">
            <li>
              Pre-rendered app with <a href="http://netlify.com">Vue</a> +
              <a href="http://netlify.com">Nuxt.js</a>
            </li>
            <li>
              Run Lambdas on <a href="http://netlify.com">Netlify</a> - wow!
            </li>
            <li>
              Deploy in seconds, with <a href="http://netlify.com">Netlify</a>!
            </li>
            <li>Amaze your <a href="/friends">friends</a>!</li>
          </ul>
        </div>

        <div class="col-lg-12 d-flex flex-column align-items-center">
          <div class="d-flex flex-column">
            <h4>Features</h4>
            <ul>
              <li>
                Includes <a href="https://google.com">Google Analytics</a>,
                <a href="https://google.com">HotJar</a>, and
                <a href="https://google.com">MailChimp</a> out of the box
              </li>
              <li>
                Includes <a href="https://google.com">JSON-LD</a> snippet for
                fantastic SEO
              </li>
              <li>
                Bundled with <a href="https://google.com">FontAwesome 5</a>,
                optimized for performance
              </li>
              <li>
                Built with <a href="https://google.com">Bootstrap</a> &amp;
                <a href="https://google.com">Bootsrap-Vue</a>
              </li>

              <li>
                Written in <a href="https://Es.com">ES6</a> &amp;
                <a href="https://google.com">SASS</a>
              </li>
            </ul>
          </div>
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
