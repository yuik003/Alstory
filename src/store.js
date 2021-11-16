// import { userSetter } from 'core-js/fn/symbol'
import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 後で読み込むので最初のデータの中は空に。
    datas: null,
    show: false,
    user: false,
  },

  // mutation: {

  // },

  // actions: {
  //   // 1.外部JSONデータを入れる処理
  //   async fetchDatas({ commit }) {
  //     // 'response'に外部データを入れる
  //     const response = await axios.get('https://covid19-japan-web-api.vercel.app/api/v1/prefectures')
    
  //     // 2.受け取ったデータを'setDatas'の中に入れる
  //     commit('setDatas', response.data)
  //   }
  // },

  // mutations: {
  //   // 3.2の処理がここにかかってくる
  //   // commitで定義した'setDatas'のstate.datasのdatasに入れる。
  //   setDatas: (state, datas) => (state.datas = datas)
  // }
})


export default store