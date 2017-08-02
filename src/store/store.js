import api from 'src/api'

export const state = {
  isShowSidebar: false,
  loading: false,
  puskesmasList: [],
  rsuList: [],
  rskList: []
}

export const getters = {
  isShowSidebar: (state) => {
    return state.isShowSidebar
  },
  isLoading: (state) => {
    return state.loading
  },
  puskesmasList: (state) => {
    return state.puskesmasList
  },
  rsuList: (state) => {
    return state.rsuList
  },
  rskList: (state) => {
    return state.rskList
  }
}

export const mutations = {
  setShowSidebar (state, value) {
    state.isShowSidebar = value
  },
  setLoading (state, value) {
    state.loading = value
  },
  setPuskesmasList (state, value) {
    state.puskesmasList = value
  },
  setRsuList (state, value) {
    state.rsuList = value
  },
  setRskList (state, value) {
    state.rskList = value
  }
}

export const actions = {
  getPuskesmasList ({commit}) {
    commit('setLoading', true)
    api.getPuskesmas((response) => {
      commit('setLoading', false)
      let array = response.body.features
      array.sort(function(a, b){
          if(a.properties.nama_Puskesmas < b.properties.nama_Puskesmas) return -1;
          if(a.properties.nama_Puskesmas > b.properties.nama_Puskesmas) return 1;
          return 0;
      })
      commit('setPuskesmasList', array)
    }, () => {
      commit('setLoading', false)
    }, null)
  },
  getRsuList ({commit}) {
    commit('setLoading', true)
    api.getRumahSakitUmum((response) => {
      commit('setLoading', false)
      let array = response.body.features
      array.sort(function(a, b){
          if(a.properties.nama_rsu < b.properties.nama_rsu) return -1;
          if(a.properties.nama_rsu > b.properties.nama_rsu) return 1;
          return 0;
      })
      commit('setRsuList', array)
    }, () => {
      commit('setLoading', false)
    }, null)
  },
  getRskList ({commit}) {
    commit('setLoading', true)
    api.getRumahSakitKhusus((response) => {
      commit('setLoading', false)
      let array = response.body.features
      array.sort(function(a, b){
          if(a.properties.nama_rsk < b.properties.nama_rsk) return -1;
          if(a.properties.nama_rsk > b.properties.nama_rsk) return 1;
          return 0;
      })
      commit('setRskList', array)
    }, () => {
      commit('setLoading', false)
    }, null)
  }
}
