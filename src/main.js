import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/scss/style.scss'
import '@/packages/fontawesome/index.js'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
