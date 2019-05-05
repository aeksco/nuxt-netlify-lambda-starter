<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="row mt-2">
        <div class="col-lg-12 text-center">
          <h4 class="display-4">404 Not Found</h4>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12 text-center">
          <p class="lead">
            It's even got a 404 page, wowza!
          </p>
          <p class="lead">
            Sorry about your friends, bud :(
          </p>
          <p class="lead mb-0 mt-2">
            <span>But you can be friends with me maybe?</span>
            <a href="https://github.com/aeksco" target="_blank">@aeksco</a>
          </p>
          <div class="d-flex flex-column align-items-center">
            <gh-btns-follow class="mt-3" user="aeksco" show-count />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Nuxt Netlify Lambda - 404',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt Netlify Lambda 404 description'
        }
      ]
    }
  }
}
</script>
