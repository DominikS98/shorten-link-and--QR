import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TheForm from '../components/TheForm.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/form',
    name: 'form',
    component: TheForm
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
