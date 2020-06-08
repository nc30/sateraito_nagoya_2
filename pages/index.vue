<template>
  <div>
    <div id="nav">
      <Nav/>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import Nav from '~/components/Nav'
import Form from '~/components/Form.vue'

export default Vue.extend({
  components: {
    Nav,
    Form
  }
})
</script>

<style>
.container {
  height: 100%;
}
</style>
