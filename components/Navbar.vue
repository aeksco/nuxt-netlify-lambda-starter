<template>
  <b-navbar toggleable="md" type="light" variant="light">
    <b-navbar-brand to="/">
      <strong>Nuxt Netlify Lambda Starter</strong>
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse id="nav_collapse" is-nav>
      <b-navbar-nav class="mr-auto">
        <b-nav-item to="/items">
          Items
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/about">
          <font-awesome-icon icon="question-circle" />
          About
        </b-nav-item>

        <b-nav-item target="_blank" href="https://twitter.com/aeksco">
          <font-awesome-icon :icon="['fab', 'twitter']" class="text-primary" />
          Twitter
        </b-nav-item>

        <b-nav-item
          target="_blank"
          href="https://github.com/aeksco/nuxt-netlify-lambda-starter"
        >
          <font-awesome-icon :icon="['fab', 'github']" />
          GitHub
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
nav.navbar {
  border-bottom: 1px solid #d3d3d3;
}
</style>
