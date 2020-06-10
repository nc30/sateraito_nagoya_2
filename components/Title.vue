<template>
  <div id="heading">
    <h1 id="title">サテライトナゴヤ</h1>
    <menu>
      < <ul>
        <li><router-link to="/">index</router-link> /</li>
        <li><router-link to="/contact">contact</router-link></li>
      </ul> >
    </menu>
  </div>
</template>

<script>

</script>

<style lang="scss">
#heading {
  h1 {
    padding-top: 1em;
    font-size: 1.1em;
  }
  color: #eee;
  text-align: right;
  &>span{
    display: block
  }
  ul, li {
    list-style: none;
    display:inline;
  }
  menu {
    padding-top: .5em;
    padding-bottom: 1em;

    a {
      &:link,
      &:active,
      &:hover,
      &:visited {
        color: #fff;
        text-decoration: underline;
      }
    }
  }
}
</style>
