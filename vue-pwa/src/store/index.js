import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    datas: null,
    show: false,
    user: true,
    // odd: false,
    count: 0,
    check: true,
  },
})

export default store