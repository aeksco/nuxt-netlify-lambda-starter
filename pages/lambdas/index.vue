<template>
  <section class="container">
    <div class="row mt-3 mb-5">
      <div class="col-lg-12">
        <h2 class="mb-0">Lambdas</h2>
        <p class="text-muted">
          A series of example Netlify Lambda functions
        </p>
      </div>

      <b-col lg="12">
        <b-row>
          <b-col lg="12">
            <div class="card card-body">
              <router-link to="/lambdas/hello">Hello, World Lambda</router-link>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Nuxt Netlify Lambda Starter - Lambdas',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>
