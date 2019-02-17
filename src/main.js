import Vue from 'vue'
import App from './App.vue'
import VueApollo from 'vue-apollo'
import router from './router/index.js'
import client from './apollo-client'

// const apolloClient = new ApolloClient({

// })

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: client
})

Vue.config.productionTip = false

new Vue({
  client,
  apolloProvider,
  router,
  render: h => h(App)
}).$mount('#app')
