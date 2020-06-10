<template>
  <div class="container">
    <Title />
    <Banners />
  </div>
</template>

<script>
import Title from '~/components/Title.vue'
import Banners from '~/components/Banners.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Title,
    Banners,
    Footer
  }
}
</script>

<style>
.container {
  height: 100%;
}
</style>
