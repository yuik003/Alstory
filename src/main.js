import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from './store'

import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore"
import './registerServiceWorker'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBKCWBDJtzbvE6Enju3bjvf7BlQRz5xWzM",
  authDomain: "memograph-5c753.firebaseapp.com",
  projectId: "memograph-5c753",
  storageBucket: "memograph-5c753.appspot.com",
  messagingSenderId: "58672513769",
  appId: "1:58672513769:web:3fd8eba405f83772f02678"
};

firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
