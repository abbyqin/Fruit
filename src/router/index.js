import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import List from '../pages/List'
import Detail from '../pages/detail'
import Cart from '../pages/cart'
import Me from '../pages/me'

Vue.use(Router)

export default new Router({
  routes: [
   {
        path: '/',
        name: "Home",
        component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    }
  ]
})
