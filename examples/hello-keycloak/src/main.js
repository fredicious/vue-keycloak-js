import VueKeycloakJs from '@gemtmp/vue-keycloak-js'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueKeycloakJs, {
  init: {
    // Use 'login-required' to always require authentication
    // If using 'login-required', there is no need for the router guards in router.js
    onLoad: 'login-required'
  },
  config: {
    url: 'http://124.93.26.52:63156/auth/',
    clientId: 'hello-world',
    realm: 'poc'
  },
  onReady: (keycloak) => {
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})

