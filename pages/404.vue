<template>
  <div id="notFound">
    <h1>- 404 Not Found</h1>
    - <a href="https://sateraito.nagoya/">サテライトナゴヤ</a> -
  </div>
</template>

<script>
export default {
  layout: 'simple',
  mouted(){
    console.log(document.body.style.background)
    document.body.style.backgroundImage=''
  }
}
</script>

<style lang="scss">
#notFound {
  padding: 1em;
}
</style>

