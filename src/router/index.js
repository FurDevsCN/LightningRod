import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import About from '@/components/About'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: index
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
