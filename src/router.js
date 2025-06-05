import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Courses from './components/Courses.vue'
import Contacts from './components/Contacts.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/courses', component: Courses },
  { path: '/contacts', component: Contacts },
  { 
    path: '/courses/:id', 
    component: () => import('./components/CourseDetails.vue'),
    props: true
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router