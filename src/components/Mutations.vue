<template>
  <div>
    <h1>Mutations</h1>
    <div class="mutation" @click="toggle">
      <div class="checkbox">{{checked ? '✓' : ''}}</div>
      <div class="nickname">{{nickname}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mutations',
  data: () => ({
    checked: true,
    nickname: 'Clapify'
  }),
  methods: {
    toggle () {
      this.checked = !this.checked
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/global.styl'

.mutation
  full-width()
  display: flex
  align-items: center
  cursor: pointer
  user-select: none
  .checkbox, .nickname
    height: box-size
    line-height: box-size
    font-size: big-text-size
  .checkbox
    display: block
    width: box-size
    background: free-speech-blue
    text-align: center
  .nickname
    padding-left: 15px
    background: dark-periwinkle
    flex: 1
</style>
