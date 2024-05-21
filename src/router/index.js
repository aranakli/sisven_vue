import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import EditCustomer from '../components/customer/EditCustomer.vue'
import NewCustomer from '../components/customer/NewCustomer.vue'
import Customer from '../views/Customer.vue'

import Paymode from '../views/Paymode.vue'
import EditPaymode from '../components/paymode/EditPaymode.vue'
import NewPaymode from '../components/paymode/NewPaymode.vue'

import Categorie from '../views/Categorie';
import EditCategorie from '../components/Categorie/EditCategorie.vue';
import NewCategorie from '../components/Categorie/NewCategorie.vue';

import Product from '../views/Product';
import EditProduct from '../components/product/EditProduct.vue';
import NewProduct from '../components/product/NewProduct.vue';

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
    path: '/edit-customer',
    name: 'EditCustomer',
    component: EditCustomer
  },
  {
    path: '/new-customer',
    name: 'NewCustomer',
    component: NewCustomer
  },
  {
    path: '/paymode',
    name: 'Paymode',
    component: Paymode
  },
  {
    path: '/edit-paymode',
    name: 'EditPaymode',
    component: EditPaymode
  },
  {
    path: '/new-paymode',
    name: 'NewPaymode',
    component: NewPaymode
  },
  {
    path: '/categorie',
    name: 'Categorie',
    component: Categorie
  },
  {
    path: '/edit-categorie',
    name: 'EditCategorie',
    component: EditCategorie
  },
  {
    path: '/new-categorie',
    name: 'NewCategorie',
    component: NewCategorie
  },

  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/edit-product/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/new-product',
    name: 'NewProduct',
    component: NewProduct
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
