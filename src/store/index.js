import Vue from 'vue'
import Vuex from 'vuex'

import app from '../main'
import loadedDAta from './modules/LoadedData'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    changeLang(state, payload) {
      app.$i18n.locale = payload
    }
  },
  actions: {
    setLang({ commit }, payload) {
      commit('changeLang', payload)
    }
  },
  modules: {
    loadedDAta,
  }
})
