import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/views/Home.vue'
import SiteList from '@/views/SiteList.vue'
import SiteDetail from '@/views/SiteDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: HomeComponent },
    { path: '/ai-techs', name: 'siteList', component: SiteList },
    { path: '/ai-techs/:id', name: 'siteDetail', component: SiteDetail }
  ]
})
