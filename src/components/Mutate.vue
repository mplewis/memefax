<template>
  <div>
    <UserInput />
    <Mutations />
    <Result />
  </div>
</template>

<script>
import UserInput from './UserInput'
import Mutations from './Mutations'
import Result from './Result'

export default {
  components: {
    UserInput, Mutations, Result
  }
}
</script>

<style lang="stylus" scoped>
  p
    color: red
</style>
