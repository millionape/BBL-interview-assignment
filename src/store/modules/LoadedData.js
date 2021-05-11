import {
  loadData,
  getAuthKey
} from '../../utils'

export default {
  state: {
    authkey: null,
    loadedData: null,
    sumOfData: null,
    loadSuccess: false
  },
  getters: {
    getAuthKey: state => state.authkey,
    getLoadedData: state => state.loadedData,
    isLoadSuccess: state => state.loadSuccess,
    getSumOfData: state => state.sumOfData
  },
  mutations: {
    setKey(state, payload) {
      state.authkey = payload
    },
    setLoadSuccess(state, payload){
      state.loadSuccess = payload
    },
    setLoadData(state,payload) {
      state.loadedData = payload
    },
    setSumOfData(state, payload){
      state.sumOfData = payload
    },
    clearAllData(state) {
      state.authkey = null
      state.loadedData = null
      state.processing = false
    }
  },
  actions: {
    loadTheData({
      commit
    }) {
      commit('setLoadSuccess',false);
      getAuthKey().then(res => {
        commit('setKey',res.key);
        loadData().then(data => {
          commit('setLoadData',data.value);
          commit('setSumOfData',data.value.reduce((a, b) => a + b, 0))
          commit('setLoadSuccess',true);
        }).catch(err => {
          commit('setLoadSuccess',true);
        })
      }).catch(err => {
        commit('setLoadSuccess',true);
      })
    }
  }
}
