<template>
  <b-container>
    <b-row class="mt-3 mb-5">
      <b-col lg="12">
        <h2 class="mb-0">Items</h2>
        <p class="text-muted">
          Pre-render dynamic pages from static data
        </p>
      </b-col>

      <b-col lg="12">
        <b-row>
          <b-col lg="12">
            <Item v-for="m in collection" :key="m.id" :model="m" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Item from '~/components/Item.vue'
import items from '~/assets/content/items.json'

export default {
  components: {
    Item
  },
  head() {
    return {
      title: 'Nuxt Netlify Lambda Starter - Items',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  },
  data() {
    return {
      collection: items
    }
  }
}
</script>
