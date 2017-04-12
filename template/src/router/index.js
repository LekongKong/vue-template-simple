import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('../views/home/index.vue')
    },
    {
      path: '/docs',
      name: 'docs',
      component: require('../views/docs/index.vue')
    }
  ]
})

