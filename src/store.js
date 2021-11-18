// import { userSetter } from 'core-js/fn/symbol'
import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    datas: null,
    show: false,
    user: true,
    // odd: false,
    files: [],
    count: 0
  },
})

export default store