import Vue from 'vue'
import router from 'src/router'
import store from 'src/store'
import HeaderSection from 'src/components/HeaderSection'

describe('HeaderSection.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(HeaderSection)
    vm = new Constructor({
      router,
      store
    })
  })

  it('Initialized well', () => {
    vm.$mount()
  })
})
