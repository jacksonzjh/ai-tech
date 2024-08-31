import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SiteList from '../views/SiteList.vue'
import SiteDetail from '../views/SiteDetail.vue'
import AboutMe from '../views/AboutMe.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/ai-techs', name: 'AiTechs', component: SiteList },
  { path: '/ai-techs/:id', name: 'SiteDetail', component: SiteDetail },
  { path: '/about', name: 'AboutMe', component: AboutMe }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router