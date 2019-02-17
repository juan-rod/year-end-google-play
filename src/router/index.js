import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Onboard from '../components/views/Onboard'
import Main from '../components/views/Main'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        { path: '', component: Onboard },
        { path: 'main', component: Main }
      ]
    }
  ]
})