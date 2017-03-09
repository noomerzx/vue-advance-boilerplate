import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/views/Index/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'index', component: IndexPage },
    { path: '*', redirect: { name: 'index' } }
  ]
})
