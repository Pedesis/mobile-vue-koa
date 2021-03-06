import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/components/pages/ShoppingMall'
import Register from '@/components/pages/Register'
import Login from '@/components/pages/Login'
import Goods from '@/components/pages/Goods'
import CategoryList from '@/components/pages/CategoryList'
import Carts from '@/components/pages/Carts'
import Main from '@/components/pages/Main'
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/Main",name:"Main",component:Main,
      children:[
        {
          path: '/',
          name: 'ShoppingMall',
          component: ShoppingMall
        },
        {path: '/CategoryList',name: 'CategoryList',component: CategoryList},
        {path: '/Carts',name: 'Carts',component: Carts},
      ]
  },

    {path: '/Login',name: 'Login',component: Login},
    {path: '/Goods',name: 'Goods',component: Goods},
    {path: '/register',name: 'Register',component: Register},
  ]
})
