import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'
import ChatHome from '../views/TanyaDokter/components/ChatHome.vue'
import ChatDetail from '../views/TanyaDokter/components/ChatDetail.vue'
import TanyaDokter from '../views/TanyaDokter/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tanya-dokter',
    name: 'TanyaDokter',
    component: TanyaDokter,
    children: [
      {
        path: '',
        name: 'ChatHome',
        component: ChatHome
      },
      {
        path: ':id',
        name: 'ChatDetail',
        component: ChatDetail
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
