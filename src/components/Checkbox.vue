<template>
  <div :class="['container', color]" @click="$emit('toggle')">
    <div class="checkbox">{{checked ? '✓' : ''}}</div>
    <div class="name">{{name}}</div>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    checked: { type: Boolean, required: true },
    name: { type: String, required: true },
    color: { type: String, default: 'grey' }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/global.styl'

.container
  full-width()
  display: flex
  align-items: center
  cursor: pointer
  user-select: none
  .checkbox, .name
    height: box-size
    line-height: box-size
    font-size: med-text-size
  .checkbox
    display: block
    width: box-size
    text-align: center
    color: black
  .name
    padding-left: 15px
    flex: 1
    color: black
  &.grey
    .checkbox
      background: hint-of-elusive-blue
    .name
      background: london-square
  &.red
    .checkbox
      background: sunset-orange
    .name
      background: red-orange
  &.orange
    .checkbox
      background: narenji-orange
    .name
      background: chrome-yellow
  &.yellow
    .checkbox
      background: yriel-yellow
    .name
      background: vibrant-yellow
  &.green
    .checkbox
      background: minty-green
    .name
      background: green-teal
  &.teal
    .checkbox
      background: fresh-turquoise
    .name
      background: jade-dust
  &.blue
    .checkbox
      background: megaman
    .name
      background: spiro-disco-ball
  &.purple
    .checkbox
      background: dark-periwinkle
    .name
      background: free-speech-blue
</style>
