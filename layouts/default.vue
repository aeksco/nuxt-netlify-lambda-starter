<template>
  <div>
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: 'https://nuxt-netlify-lambda-starter.netlify.com',
      name: 'Nuxt Netlify Lambda Starter',
      author: {
        '@type': 'Person',
        name: 'Alexander Schwartzberg'
      },
      description: 'Configurable starter code for the modern web',
      publisher: 'https://aeks.co'
    }
  },
  head() {
    return {
      title: 'Nuxt Netlify Lambda Starter - Loading...',
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
