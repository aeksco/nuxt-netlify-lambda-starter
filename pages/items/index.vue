<template>
  <section class="container">
    <div class="row mt-3 mb-5">
      <div class="col-lg-12">
        <h2 class="mb-0">Items</h2>
        <p class="text-muted">
          Instantly generate your next codebase using any of the following
          Collection
        </p>
      </div>

      <b-col lg="12">
        <b-row>
          <b-col lg="12">
            <transition-group name="generator-list" tag="div">
              <Item v-for="m in collection" :key="m.id" :model="m" />
            </transition-group>
          </b-col>
        </b-row>
      </b-col>
    </div>
  </section>
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

<style type="text/css">
.generator-list-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}

.generator-list-enter,
.generator-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.generator-list-leave-active {
  position: absolute;
}
</style>
