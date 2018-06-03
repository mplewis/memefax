<template>
  <div>
    <h1>3: Look at what you did</h1>
    <div class="result">
      <p v-if="text === ''" class="dim">Type some text to get started</p>
      <p v-else>{{text}}</p>
    </div>
    <button
      v-if="text !== ''"
      :disabled="copied"
      v-clipboard:copy="text"
      v-clipboard:success="onCopy"
      class="copy-button"
    >
      {{ copied ? 'Copied!' : 'Copy to clipboard' }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Result',
  props: { text: { type: String } },
  data: () => ({ copied: false }),
  methods: {
    onCopy () {
      this.copied = true
      setTimeout(() => (this.copied = false), 1000)
    }
  }
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

.copy-button
  font-family: core-font
  font-size: med-text-size
  color: black-pearl
  background: elusive-white
  margin-top: 15px
  border: none
  border-radius: med-text-size
  height: med-text-size * 2
  padding: med-text-size
  line-height: 0
  box-shadow: deep-shadow
</style>
