import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueResource)

Vue.http.options.root = 'https://vue-resource-fef4c.firebaseio.com/'
Vue.http.interceptors.push((request, next) =>{
  console.log(request)
  if(request.method == 'POST'){
    request.method = 'PUT'
  }
  next((response) => {
    response.json = () => { 
      return { 
        message: response.body
      }
    }
  })
})

new Vue({
  render: h => h(App),
}).$mount('#app')
