<template>
  <div>
    <h1>UserInput</h1>
    <input class="big-input" placeholder="Enter your text here to ruin it" />
  </div>
</template>

<script>
export default {
  name: 'UserInput'
}
</script>

<style lang="stylus" scoped>
@import '../assets/global.styl'

.big-input
  width: 100%
  font-size: big-text-size
  font-family: core-font
  border: none
  padding: 8px
  background-color: megaman
  color: white
  &::placeholder
    color: rgba(255, 255, 255, 0.7)
</style>
