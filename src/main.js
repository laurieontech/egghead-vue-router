import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Egghead from './components/Egghead.vue'
import Blog from './components/Blog.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {
    //show home path, only one of these can exist
    path: '/',
    component: Home,
  },
  {
    path: '/egghead',
    component: Egghead,
  },
  {
    path: '/egghead',
    component: Blog,
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
