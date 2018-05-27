<template>
  <div>
    <h1>Result</h1>
    <div class="result">
      <p>Clapified👏text</p>
    </div>
    <button>Copy</button>
  </div>
</template>

<script>
export default {
  name: 'Result'
}
</script>

<style lang="stylus" scoped>
@import '../assets/global.styl'

.result
  full-width-padded()
  pad-vert()
  display: block
  background-color: dark-periwinkle
</style>
