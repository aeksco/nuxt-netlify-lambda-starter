<template>
  <section class="container">
    <div class="row mt-4">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h4 class="display-4">About</h4>
          </div>
        </div>

        <div class="row py-2">
          <div class="col-lg-12 text-center">
            <p class="lead">This is just a simple About page</p>
            <p class="lead">
              Use it as a template to build out some simple pages
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Nuxt Netlify Lambda - About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt Netlify Lambda About description'
        }
      ]
    }
  }
}
</script>
