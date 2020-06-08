<template>
  <div>
    <div id="nav">
      <Nav/>
    </div>

    <div id="content" class="columns">
      <div class="column is-5 is-offset-1">
        <Form />
      </div>
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
#content {
  margin-top: 2em;
}
</style>
