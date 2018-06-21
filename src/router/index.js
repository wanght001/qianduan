import Vue from 'vue'
import Router from 'vue-router'
import LH from '@/components/LH'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LH',
      component: LH
    }
  ]
})
