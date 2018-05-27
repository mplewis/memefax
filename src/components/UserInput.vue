<template>
  <div>
    <h1>UserInput</h1>
    <div class="wider">
      <input class="big-input" placeholder="Enter your text here to ruin it" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInput'
}
</script>

<style lang="stylus" scoped>
@import '../assets/global.styl'

.wider
  full-width()

.big-input
  pad-width-inside()
  pad-vert()
  width: 100%
  font-size: big-text-size
  font-family: core-font
  color: white
  background-color: sizzling-red
  border: none
  &::placeholder
    color: rgba(255, 255, 255, 0.7)
</style>
