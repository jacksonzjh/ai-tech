import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/views/Home.vue'
import BlogList from '@/views/BlogList.vue'
import BlogDetail from '@/views/BlogDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: HomeComponent },
    { path: '/blogs', name: 'blogs', component: BlogList },
    { path: '/blogs/:id', name: 'blogDetail', component: BlogDetail }
  ]
})
