import Vue from 'vue'
import App from './App.vue'
import * as router from './router/router.js'
var $ = window.jQuery = require("jquery")
require('bootstrap')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
