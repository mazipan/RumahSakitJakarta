/* eslint-disable space-before-blocks */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import SocialSharing from 'vue-social-sharing'

import router from './router'
import store from './store'
import App from './App.vue'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/RumahSakitJakarta/images/loading.gif',
  loading: '/RumahSakitJakarta/images/loading.gif',
  attempt: 1
})

Vue.use(SocialSharing)

if (process.env.NODE_ENV !== 'production') {
  // require('vue-mock')
  Vue.config.devtools = true
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store,
  components: {App}
})
