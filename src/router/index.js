import { createRouter, createWebHistory } from 'vue-router'

//Views imports
import Home from '../views/Home.vue'
import Actividades from '../views/Actividades.vue'
import Habitos from '../views/Habitos.vue'
import Perfil from '../views/Perfil.vue'
//Fin views imports

//Rutas
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Actividades',
    name: 'Actividades',
    component: Actividades
  },
  {
    path: '/Habitos',
    name: 'Habitos',
    component: Habitos
  },
  {
    path: '/Perfil',
    name: 'Perfil',
    component: Perfil
  }
]

//History mode <no tocar>
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
