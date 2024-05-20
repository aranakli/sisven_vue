import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditCustomer from '../components/customer/EditCustomer.vue';
import NewCustomer from '../components/customer/NewCustomer.vue';
import Customer from '../views/Customer';
import EditPaymode from '../components/paymode/EditPaymode.vue';
import NewPaymode from '../components/paymode/NewPaymode.vue';
import Paymode from '../views/Paymode';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/customer',
    name: 'Customer',
    component: Customer
  },
  {
    path: '/add-customer',
    name: 'NewCustomer',
    component: NewCustomer
  },
  {
    path: '/editar-customer/:id',
    name: 'EditCustomer',
    component: EditCustomer
  },
  {
    path: '/add-paymode',
    name: 'NewPaymode',
    component: NewPaymode
  },
  {
    path: '/editar-paymode/:id',
    name: 'EditPaymode',
    component: EditPaymode
  },
  {
    path: '/paymode',
    name: 'Paymode',
    component: Paymode
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
