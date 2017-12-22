import axios from 'axios'
const basePath = '/RumahSakitJakarta/json/'

export const state = {
  isShowSidebar: false,
  loading: false,
  tabActive: 'home',
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
  tabActive: (state) => {
    return state.tabActive
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
  setTabActive (state, value) {
    state.tabActive = value
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
    axios.get(`${basePath}puskesmas.json`)
    .then(function (response) {
      commit('setLoading', false)
      let array = response.data.features
      array.sort(function(a, b){
          if(a.properties.nama_Puskesmas < b.properties.nama_Puskesmas) return -1;
          if(a.properties.nama_Puskesmas > b.properties.nama_Puskesmas) return 1;
          return 0;
      })
      commit('setPuskesmasList', array)
    })
    .catch(function (error) {
      commit('setLoading', false)
    });
  },
  getRsuList ({commit}) {
    commit('setLoading', true)
    axios.get(`${basePath}rumahsakitumum.json`)
    .then(function (response) {
      commit('setLoading', false)
      let array = response.data.features
      array.sort(function(a, b){
          if(a.properties.nama_rsu < b.properties.nama_rsu) return -1;
          if(a.properties.nama_rsu > b.properties.nama_rsu) return 1;
          return 0;
      })
      commit('setRsuList', array)
    })
    .catch(function (error) {
      commit('setLoading', false)
    });
  },
  getRskList ({commit}) {
    commit('setLoading', true)
    axios.get(`${basePath}rumahsakitkhusus.json`)
    .then(function (response) {
      commit('setLoading', false)
      let array = response.data.features
      array.sort(function(a, b){
          if(a.properties.nama_rsk < b.properties.nama_rsk) return -1;
          if(a.properties.nama_rsk > b.properties.nama_rsk) return 1;
          return 0;
      })
      commit('setRskList', array)
    })
    .catch(function (error) {
      commit('setLoading', false)
    });
  },
  updateTabActive ({commit}, tabActive) {
    commit('setTabActive', tabActive)
  }
}
