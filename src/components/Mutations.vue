<template>
  <div>
    <h1>2: Pick some mutations</h1>
    <Checkbox
      v-for="(mutation, index) in mutations"
      :key="index"
      :name="mutation.name"
      :color="colors[index % colors.length]"
      :checked="checked(index)"
      @toggle="toggle(index)"
    />
  </div>
</template>

<script>
import Checkbox from './Checkbox'
import lastUsed from '@/utils/last_used'
import VueTypes from 'vue-types'

const colors = ['orange', 'yellow', 'green', 'teal', 'blue']

export default {
  name: 'Mutations',
  components: { Checkbox },
  props: { mutations: VueTypes.array.isRequired },
  data: () => ({ colors, activeMutationIndices: null }),
  mounted () {
    this.activeMutationIndices = new Set(lastUsed.current())
    this.update()
  },
  methods: {
    toggle (index) {
      const newCheckedState = !this.activeMutationIndices.has(index)
      newCheckedState
        ? this.activeMutationIndices.add(index)
        : this.activeMutationIndices.delete(index)
      this.update()
      lastUsed.update(index, newCheckedState)
    },
    update () {
      // vue can't observe changes to sets
      const ami = this.activeMutationIndices
      this.activeMutationIndices = null
      this.activeMutationIndices = ami

      this.$emit(
        'activeMutations',
        this.mutations.filter((_, index) => this.checked(index))
      )
    },
    checked (index) {
      if (!this.activeMutationIndices) return false
      return !!this.activeMutationIndices.has(index)
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
    font-size: med-text-size
  .checkbox
    display: block
    width: box-size
    background: minty-green
    text-align: center
  .nickname
    padding-left: 15px
    background: green-teal
    flex: 1
</style>
