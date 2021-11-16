import Vue from 'vue'
// import Vuex from 'vuex'
// import './plugins/axios'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from './store'

import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/database"

Vue.config.productionTip = false
// Vue.use(Vuex)

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3fJ4At7A9VnYwS2iJYV8R0V1H1drJtYk",
  authDomain: "alstory-44284.firebaseapp.com",
  databaseURL: "https://alstory-44284-default-rtdb.firebaseio.com",
  projectId: "alstory-44284",
  storageBucket: "alstory-44284.appspot.com",
  messagingSenderId: "527028421818",
  appId: "1:527028421818:web:3c6e8f546e28aa214bae83"
};

firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
