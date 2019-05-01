<template>
  <div class="card card-body mb-2">
    <div class="row">
      <div class="col-lg-12 d-flex justify-content-between align-items-center">
        <p
          class="lead mb-0 w-100 d-flex justify-content-between align-items-center"
        >
          <router-link :to="'/items/' + model.id">
            <img class="item-icon" :src="model.icon" />
            {{ model.label }}
          </router-link>
        </p>
      </div>

      <div class="col-lg-12">
        <p class="card-text mb-2">
          {{ model.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    model: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="sass">
img.item-icon
  width: 2rem
</style>
