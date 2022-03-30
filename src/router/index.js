import Vue from 'vue'
import VueRouter from 'vue-router'

// импортируем все представления, по
// которым будем навигировать пользователя
import Greeting from '@/views/Greeting.vue'
import Nasa from '@/views/Nasa.vue'
import drivers from '../views/drivers'
import getdri from '../views/getdri'
import adddriver from '../views/adddriver'
import putdriver from '../views/putdriver'
Vue.use(VueRouter)

// заводим массив с роутами
const routes = [
  {
    path: '/',
    name: 'Greeting',
    component: Greeting
  },
  {
    path: '/nasa',
    name: 'Nasa',
    component: Nasa
  },
  {
    path: '/dris',
    name: 'drivers',
    component: drivers
  },
  {
    path: '/getdri',
    name: 'getdriver',
    component: getdri
  },
  {
    path: '/putdri',
    name: 'getdriver',
    component: putdriver
  },
  {
    path: '/adddri',
    name: 'getdriver',
    component: adddriver
  }
]

// создаём новый экземпляр класса
// VueRouter, с необходимыми параметрами
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
