<template>
  <div>
    <UserInput @text="text => this.text = text" />
    <Mutations :mutations="mutations" @activeMutations="activeMutations => this.activeMutations = activeMutations" />
    <Result :text="mutatedText" />
  </div>
</template>

<script>
import UserInput from './UserInput'
import Mutations from './Mutations'
import Result from './Result'
import mutations from '@/mutations'

export default {
  components: { UserInput, Mutations, Result },
  data: () => ({
    text: '',
    activeMutations: [],
    mutations
  }),
  computed: {
    mutatedText (activeMutations) {
      return this.activeMutations.reduce((text, mutation) => mutation.mutator(text), this.text)
    }
  }
}
</script>
