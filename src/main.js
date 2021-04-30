import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
