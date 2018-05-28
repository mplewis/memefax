<template>
  <div>
    <UserInput />
    <Mutations :mutations="mutations" @activeMutations="mutate" />
    <Result />
  </div>
</template>

<script>
import UserInput from './UserInput'
import Mutations from './Mutations'
import Result from './Result'
import mutations from '@/mutations'

function apply (mutations, text) {
  return mutations.reduce(
    (text, mutation) => mutation.mutator(text),
    text
  )
}

export default {
  components: { UserInput, Mutations, Result },
  data: () => ({ mutations }),
  methods: {
    mutate (activeMutations) {
      console.log(apply(activeMutations, 'qwerty uiop'))
    }
  }
}
</script>
