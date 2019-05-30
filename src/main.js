import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueResource)

Vue.http.options.root = 'https://vue-resource-fef4c.firebaseio.com/data.json'

new Vue({
  render: h => h(App),
}).$mount('#app')
