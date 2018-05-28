<template>
  <div>
    <h1>Mutations</h1>
    <Checkbox
      v-for="(mutation, index) in mutations"
      :key="index"
      :name="mutation.name"
      :checked="mutation.active"
      @toggle="state => toggle(index, state)"
    />
  </div>
</template>

<script>
import Checkbox from './Checkbox'
import VueTypes from 'vue-types'

export default {
  name: 'Mutations',
  components: { Checkbox },
  props: { mutations: VueTypes.array.isRequired },
  data: () => ({ activeMutationIndices: null }),
  mounted () {
    this.activeMutationIndices = new Set(
      this.mutations
        .filter(m => m.active)
        .map((_, index) => index)
    )
    this.update()
  },
  methods: {
    toggle (index, state) {
      state
        ? this.activeMutationIndices.add(index)
        : this.activeMutationIndices.delete(index)
      this.update()
    },
    update () {
      this.$emit(
        'activeMutations',
        this.mutations.filter((_, index) => this.activeMutationIndices.has(index))
      )
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
    background: minty-green
    text-align: center
  .nickname
    padding-left: 15px
    background: green-teal
    flex: 1
</style>
