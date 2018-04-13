import Vue from 'vue'
import App from './App'
// import store from './store' // Uncomment if you are using Vuex and a store

import './assets/app.scss'

new Vue({
  // store, // Uncomment if you are using Vuex and a store
  el: '#app',
  render: h => h(App)
})
