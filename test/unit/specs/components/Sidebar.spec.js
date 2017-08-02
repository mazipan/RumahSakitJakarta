import Vue from 'vue'
import router from 'src/router'
import store from 'src/store'
import Sidebar from 'src/components/Sidebar'

describe('Sidebar.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(Sidebar)
    vm = new Constructor({
      router,
      store
    })
  })

  it('Initialized well', () => {
    vm.$mount()
  })
})
