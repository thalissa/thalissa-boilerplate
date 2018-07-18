import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Import components here
import MainComponent from './components/main.vue'
import IndexComponent from './components/index.vue'

// Import any logic here
import './assets/logic/storage.ts'

// Make routing happen.
const router = new VueRouter({
  mode: 'history',
  routes: [
    // Need one of these for each route
    {
      path: '/',
      components: {
        default: IndexComponent
      }
    }
  ]
})

// Mount the Vue template and components to the app.
new Vue({
  router,
  template: '<Main/>',
  components: {
    Main: MainComponent
  }
}).$mount('#app')
