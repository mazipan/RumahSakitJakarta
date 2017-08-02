/* eslint-disable no-unused-vars */

import Vue from 'vue'
import {saveDataToStorage, checkDataFromStorage} from './util'

const basePath = '/RumahSakitJakarta/static/json/'

function getDataViaApi (path, cb, errorHandler, payload) {
  let sessionRes = null
  sessionRes = checkDataFromStorage(path)
  if (sessionRes !== null) {
    console.log('Read from session data : ', path)
    cb(sessionRes)
  } else {
    Vue.http.get(path, {
      credentials: true,
      params: payload,
      headers: {
        Accept: 'application/json'
      }
    }).then((res) => {
      console.log('You just call api : ', path)
      saveDataToStorage(path, res)  
      cb(res)
    }, (error) => {
      console.log('Sorry, api ' + path + ' error : ', error)
      if (typeof errorHandler === 'function') {
        errorHandler(error)
      }
    })
  }  
}

export default {
  getPuskesmas: (cb, errorHandler) => {
    let path = `${basePath}puskesmas.json`
    getDataViaApi(path, cb, errorHandler, null)
  },
  getRumahSakitKhusus: (cb, errorHandler) => {
    let path = `${basePath}rumahsakitkhusus.json`
    getDataViaApi(path, cb, errorHandler, null)
  },
  getRumahSakitUmum: (cb, errorHandler) => {
    let path = `${basePath}rumahsakitumum.json`
    getDataViaApi(path, cb, errorHandler, null)
  }
}
