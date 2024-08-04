import Home from '@/views/Home.vue'
import SiteDetail from '@/views/SiteDetail.vue'
import SiteList from '@/views/SiteList.vue'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ai-techs',
      name: 'SiteList',
      component: SiteList
    },
    {
      path: '/ai-techs/:id',
      name: 'SiteDetail',
      component: SiteDetail
    }
  ]
})
