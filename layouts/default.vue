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
  background-color: #00053d;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
body {
  position: relative;
  background-image:url('~static/img/hr.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
#nav {
  max-width: 500px;
  min-width: 400px;
  margin-right: 20px;
}
#content {
  width: 90%;
  margin: 3em auto;
}
#footer {
  width: 100%;
}
#footer.bottomFix {
  position: absolute;
  bottom: 0;
}

@media screen and (min-width: 820px) {
  #wrp {
  }
  #nav {
    margin-right: 1em;
    position: fixed;
    right: 0px;
  }
  #content {
    position: absolute;
    max-width: 400px;
    left: 30px;
  }
  #footer {
    width: 400px;
    position: fixed;
    bottom: 0;
    right: 0;
  }
}
@media screen and (min-width: 1200px) {
  #content {
    left: 15em;
  }
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