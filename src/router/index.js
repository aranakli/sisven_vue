import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Categorie from '../views/Categorie';

import EditCategorie from '../components/Categorie/EditCategorie.vue';
import NewCategorie from '../components/Categorie/NewCategorie.vue';

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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
