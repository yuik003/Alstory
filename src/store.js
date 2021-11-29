// import { userSetter } from 'core-js/fn/symbol'
import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    show: false,
    user: null,
    // odd: false,
    count: 0,
    check: true,
  },
})

export default store