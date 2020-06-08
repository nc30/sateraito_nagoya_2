<template>
  <span>
    <svg v-if="value" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       width="1em" height="1em" viewBox="0 0 459 459" style="enable-background:new 0 0 459 459;" xml:space="preserve">
      <g> <g id="check-box-outline"> <path d="M124.95,181.05l-35.7,35.7L204,331.5l255-255l-35.7-35.7L204,260.1L124.95,181.05z M408,408H51V51h255V0H51 C22.95,0,0,22.95,0,51v357c0,28.05,22.95,51,51,51h357c28.05,0,51-22.95,51-51V204h-51V408z"/> </g> </g>
    </svg>
    <svg v-if="!value" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       width="1em" height="1em" viewBox="0 0 459 459" style="enable-background:new 0 0 459 459;" xml:space="preserve">
      <g> <g id="check-box-outline-blank"> <path d="M408,51v357H51V51H408 M408,0H51C22.95,0,0,22.95,0,51v357c0,28.05,22.95,51,51,51h357c28.05,0,51-22.95,51-51V51 C459,22.95,436.05,0,408,0L408,0z"/> </g> </g>
    </svg>
  </span>
</template>

<script lang="ts">
export default {
  props: [
    'value'
  ]
}
</script>
