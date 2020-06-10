<template>
  <div>
    <div id="nav">
      <Nav/>
    </div>
    <Footer class="bottomFix" />
  </div>
</template>

<script>

import Vue from 'vue'
import Nav from '~/components/Nav'
import Form from '~/components/Form.vue'
import Footer from '~/components/Footer'

export default Vue.extend({
  components: {
    Nav,
    Form,
    Footer
  }
})
</script>

<style>
.container {
  height: 100%;
}
</style>
