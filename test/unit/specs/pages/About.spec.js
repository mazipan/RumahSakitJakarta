import Vue from 'vue'
import router from 'src/router'
import store from 'src/store'
import About from 'src/pages/About'

describe('About.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(About)
    vm = new Constructor({
      router,
      store
    })
  })

  it('Initialized well', () => {
    vm.$mount()
  })
})
