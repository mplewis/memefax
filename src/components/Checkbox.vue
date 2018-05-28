<template>
  <div class="container" @click="toggle">
    <div class="checkbox">{{state ? '✓' : ''}}</div>
    <div class="name">{{name}}</div>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    name: { type: String, required: true },
    checked: { type: Boolean, default: false }
  },
  data: () => ({ state: null }),
  mounted () { this.state = !!this.checked },
  methods: {
    toggle () {
      this.state = !this.state
      this.$emit('toggle', this.state)
    }
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
    font-size: big-text-size
  .checkbox
    display: block
    width: box-size
    background: minty-green
    text-align: center
  .name
    padding-left: 15px
    background: green-teal
    flex: 1
</style>
