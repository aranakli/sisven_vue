import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import EditCustomer from '../components/customer/EditCustomer.vue'
import NewCustomer from '../components/customer/NewCustomer.vue'
import Categorie from '../views/Categorie';

import EditPaymode from '../components/paymode/EditPaymode.vue'
import NewPaymode from '../components/paymode/NewPaymode.vue'
import EditCategorie from '../components/Categorie/EditCategorie.vue';
import NewCategorie from '../components/Categorie/NewCategorie.vue';



import EditProduct from '../components/product/EditProduct.vue';
import NewProduct from '../components/product/NewProduct.vue';
import NewProduct from '../views/Product';

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
    component: HomeView
  },
  {
    path: '/paymode',
    name: 'Paymode',
    component: HomeView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
