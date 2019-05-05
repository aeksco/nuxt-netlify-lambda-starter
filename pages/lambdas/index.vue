<template>
  <b-container>
    <b-row class="mt-3 mb-5">
      <b-col lg="12">
        <h2 class="mb-0">Lambdas</h2>
        <p class="text-muted">
          A series of example Netlify Lambda functions
        </p>
      </b-col>

      <b-col lg="12">
        <b-row>
          <b-col lg="12">
            <b-card>
              <router-link to="/lambdas/hello">Hello, World Lambda</router-link>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
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
