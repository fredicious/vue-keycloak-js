import VueKeycloakJs from '@gemtmp/vue-keycloak-js'
import KeycloakAuthorization from 'keycloak-js/dist/keycloak-authz'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// Vue.test = (function name(params) {
//   VueKeycloakJs.keycloak.authServerUrl = "http://124.93.26.52:63156/auth/";
//   return new KeycloakAuthorization(VueKeycloakJs.keycloak);
//  }
// )(),

Vue.use(VueKeycloakJs, {
  init: {
    // Use 'login-required' to always require authentication
    // If using 'login-required', there is no need for the router guards in router.js
    onLoad: 'login-required'
  },
  config: {
    url: 'http://124.93.26.52:63156/auth',
    clientId: 'hello-world',
    realm: 'poc'
  },
  onReady: (keycloak) => {
    keycloak.loadUserProfile().success((data) => {
      console.log(data);
      console.log(keycloak);
      const client = new KeycloakAuthorization(keycloak);
      console.log(client);
    }),
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});

