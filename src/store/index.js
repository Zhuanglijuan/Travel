import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters: {
    //当我们需要根据state里面数据算出新的数据时，我们可以借助getter，避免数据的冗余
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
