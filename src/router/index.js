import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home.vue'
import RsUmum from '../pages/RsUmum.vue'
import RsKhusus from '../pages/RsKhusus.vue'
import Puskesmas from '../pages/Puskesmas.vue'
import About from '../pages/About.vue'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/rumah-sakit-umum',
      name: 'rs-umum',
      component: RsUmum
    },
    {
      path: '/rumah-sakit-khusus',
      name: 'rs-khusus',
      component: RsKhusus
    },
    {
      path: '/puskesmas',
      name: 'puskesmas',
      component: Puskesmas
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})

export default router
