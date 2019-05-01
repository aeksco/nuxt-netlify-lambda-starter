<template>
  <section class="container mt-4">
    <router-link to="/items">Back</router-link>
    <Item :model="model" />
  </section>
</template>

<script>
import items from '~/assets/content/items.json'
import Item from '~/components/Item'

export default {
  components: {
    Item
  },
  head() {
    return {
      title: 'Item - ' + this.model.label,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Item - ${this.model.label}`
        }
      ]
    }
  },
  computed: {
    model() {
      return items.find(g => g.id === this.$route.params.id)
    }
  }
}
</script>
