<template>
  <nuxt />
</template>

<style lang="scss">
</style>

<script>
export default{
  mounted() {
    document.body.style.minHeight = window.innerHeight + 'px';
  }
}
</script>