import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('../views/ProjectView.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
    },
    {
      path: '/blog/:id',
      name: 'blog-post',
      component: () => import('../views/BlogPostView.vue'),
    },
    {
      path: '/life',
      name: 'life',
      component: () => import('../views/LifeView.vue'),
    },
    {
      path: '/life/:id',
      name: 'life-post',
      component: () => import('../views/LifePostView.vue'),
    },
  ],
})

export default router
