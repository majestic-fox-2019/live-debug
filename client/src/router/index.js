import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index'
import ChatHome from '../views/TanyaDokter/components/ChatHome.vue'
import ChatDetail from '../views/TanyaDokter/components/ChatDetail.vue'
import ChatModal from '../views/TanyaDokter/components/ChatModal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tanya-dokter',
    name: 'tanya dokter',
    component: () => import(/* webpackChunkName: "tanyadokter" */ '../views/TanyaDokter'),
    children: [
      {
        path: '',
        name: 'chat home',
        component: ChatHome
      },
      {
        path: ':id',
        name: 'chat',
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
