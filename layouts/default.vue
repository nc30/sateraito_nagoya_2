<template>
  <nuxt />
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
body {
  background-color: #333;
  background-image:url('~static/img/hr.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  position: relative;
}
#nav {
  max-width: 500px;
  min-width: 400px;
  min-height: 100%;
  margin-right: 1em;
  position: fixed;
  right: 0px;
}
#content {
  position: absolute;
  width: 70%;
}
</style>

<script>

export default {
  mounted() {
    document.body.style.minHeight = window.innerHeight + 'px';
    // window.addEventListener('load', ()=>{
    //   console.log("famas")
    //   let h = (window.innerHeight > document.getElementById('wrp').offsetHeight)? window.innerHeight : document.getElementById('wrp').offsetHeight;
    // // // document.body.style.minHeight = window.innerHeight + 'px';
    //   document.body.style.minHeight = h + 'px';
    // // document.getElementById('wrp').minHeight = window.innerHeight + 'px';
    // })
  }
}
</script>