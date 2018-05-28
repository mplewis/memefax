<template>
  <div>
    <h1>3: Look at what you did</h1>
    <div class="result">
      <p v-if="text === ''" class="dim">Type some text to get started</p>
      <p v-else>{{text}}</p>
    </div>
    <button>Copy</button>
  </div>
</template>

<script>
export default {
  name: 'Result',
  props: { text: { type: String } }
}
</script>

<style lang="stylus" scoped>
@import '../assets/global.styl'

.result
  full-width-padded()
  pad-vert()
  display: block
  background-color: dark-periwinkle

.dim
  dim-white()
</style>
