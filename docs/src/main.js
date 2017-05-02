import Vue from 'vue'
import App from './App.vue'
import * as router from './router/router.js'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
