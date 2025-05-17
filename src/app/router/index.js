import { createRouter, createWebHistory } from 'vue-router'

import { Routes } from '@/shared'

const routes = [
  {
    name: Routes.landing.name,
    path: Routes.landing.path,
    component: () => import('@/pages/landing-page/LandingPage.vue'),
  },
  {
    name: Routes.catalog.name,
    path: Routes.catalog.path,
    component: () => import('@/pages/catalog-page/CatalogPage.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { top: 0 }
    }
  },
})
