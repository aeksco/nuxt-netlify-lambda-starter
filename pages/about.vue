<template>
  <section class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h1 class="display-3">About</h1>
          </div>
        </div>

        <div class="row py-2">
          <div class="col-lg-12 text-center">
            <p class="lead">visual code scaffolding for the modern web</p>
            <p class="lead">
              Hand-crafted code scaffolding for the modern web
            </p>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-6 text-center">
            <hr class="mt-2" />
          </div>
        </div>

        <div class="row mt-2 mb-4 justify-content-center">
          <div class="col-lg-4">
            <b-button to="/items" size="lg" variant="primary" block>
              Check out dynamic static content (wow!)
            </b-button>
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
