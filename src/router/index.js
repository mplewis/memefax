import Vue from 'vue'
import Router from 'vue-router'
// import UserInput from '@/components/UserInput'
import Mutate from '@/components/Mutate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mutate',
      component: Mutate
    }
  ]
})
