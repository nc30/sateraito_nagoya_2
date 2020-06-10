<template>
  <div>
    <div id="nav">
      <Nav/>
    </div>

    <div id="content">
      <Form />
    </div>

    <Footer id="footer" />
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
    Footer,
    Form
  },
  head () {
    return {
      title: 'contact|サテライトナゴヤ',
      meta: [
        { hid: 'og:title', property: "og:title", content: "contact|サテライトナゴヤ" },
      ]
    }
  }
})
</script>

<style>
#content {
  margin-top: 2em;
}
</style>
