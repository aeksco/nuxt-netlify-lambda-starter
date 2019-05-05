<template>
  <b-container>
    <b-row class="mt-4">
      <b-col lg="12">
        <b-row>
          <b-col lg="12" class="text-center">
            <h4 class="display-4">About</h4>
          </b-col>
        </b-row>

        <b-row class="py-2">
          <b-col lg="12" class="text-center">
            <p class="lead">This is just a simple About page</p>
            <p class="lead">
              Use it as a template to build out some new pages
            </p>
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
