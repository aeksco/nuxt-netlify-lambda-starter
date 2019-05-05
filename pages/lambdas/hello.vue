<template>
  <b-container>
    <b-row class="mt-3 mb-5">
      <b-col lg="12">
        <h2 class="mb-0">Hello World Lambda</h2>
        <p class="text-muted">
          A very simple lambda function that returns some text
        </p>
      </b-col>

      <b-col lg="12">
        <b-card class="bg-dark text-light">
          <b-row>
            <b-col v-if="loading" lg="12" class="text-center">
              <font-awesome-icon size="4x" icon="spinner" spin />
            </b-col>
            <b-col v-else lg="12">
              <p class="mb-0">Response from Lambda: {{ response }}</p>
              <p v-if="error">
                <strong>Error {{ error.status }}</strong>
                <br />
                {{ error.data }}
              </p>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  head() {
    return {
      title: 'Nuxt Netlify Lambda - Hello World',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt Netlify Lambda - Hello World Description'
        }
      ]
    }
  },
  data() {
    return {
      response: '',
      error: null,
      loading: false
    }
  },
  created() {
    this.invokeLambda()
  },
  methods: {
    async invokeLambda() {
      this.loading = true
      try {
        const res = await this.$axios.$get('/.netlify/functions/hello')
        this.response = res
        this.error = null
        this.loading = false
      } catch (e) {
        this.error = e.response
        this.response = '—'
        this.loading = false
      }
    }
  }
}
</script>
