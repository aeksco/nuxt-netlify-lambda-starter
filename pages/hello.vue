<template>
  <div>
    <h2>Hello, World!</h2>
    <b-btn variant="primary" @click="helloWorld()">Hello</b-btn>
    <p>Response: {{ response }}</p>
    <p v-if="error">
      <strong>Error {{ error.status }}</strong>
      <br />
      {{ error.data }}
    </p>
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
  },
  data() {
    return {
      response: '—',
      error: null
    }
  },
  methods: {
    async helloWorld() {
      try {
        const res = await this.$axios.$get('/.netlify/functions/hello')
        this.response = res
        this.error = null
      } catch (e) {
        this.error = e.response
        this.response = '—'
      }
    }
  }
}
</script>
