import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/main/Main'
import Order from '../views/order/Order'
import Search from '../views/search/Search'
import Person from '../views/person/Person'
import Login from '../views/login/Login'
import Dx from '../views/dx/Dx'
import Pwd from '../views/pwd/Pwd'
import ShopdetalWrap from '../views/shopdetalWrap/ShopdetalWrap'
import Diancan from '../views/diancan/Diancan'
import Pingjia from '../views/pingjia/Pingjia'
import Shangjia from '../views/shangjia/Shangjia'
Vue.use(Router)//声明使用插件

export default new Router({
  routes:[
    {
      path:'/main',
      component:Main,
      meta:{
        showfooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showfooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showfooter:true
      }
    },
    {
      path:'/person',
      component:Person,
      meta:{
        showfooter:true
      }
    },
    {
      path:'/login',
      component:Login,
      children:[
        {
           path:'/login/dx',
           component:Dx
        },
        {
          path:'/login/pwd',
          component:Pwd
        },
        {
          path:'',
          redirect:'/login/dx'
        }
      ]
    },
    {
      path:'',
      redirect:'/main'
    },
    {
      path:'/shopdetalWrap',
      component:ShopdetalWrap,
      children:[
        {//点餐
          path:'/shopdetalWrap/diancan',
          component:Diancan,
        },
        {//评价
          path:'/shopdetalWrap/pingjia',
          component:Pingjia,
        },
        {//商家
          path:'/shopdetalWrap/shangjia',
          component:Shangjia,
        },
        {//默认显示
          path:'',
          redirect:'/shopdetalWrap/diancan'
        }
      ]
    }
  ]
})
