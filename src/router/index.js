import Vue from 'vue'
import Router from 'vue-router'
import cxkPdl from '@/components/cxk_pdl.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/cxkPdl',
      name: 'cxkPdl',
      component: cxkPdl
    }
  ]
})
