<template>
  <div>
    <h1>1: Type some text</h1>
    <div class="user-input">
      <input
        class="big-input"
        placeholder="Enter your text here to ruin it"
        v-on:keyup="$emit('text', $event.target.value)"
      />
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

.user-input
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
    dim-white()
</style>
