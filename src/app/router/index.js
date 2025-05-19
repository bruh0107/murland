import { createRouter, createWebHistory } from 'vue-router'
import { accountEntity } from '@/entities'

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
  {
    name: Routes.cat.name,
    path: Routes.cat.path,
    component: () => import('@/pages/cat-detail-page/CatDetailPage.vue')
  },
  {
    name: Routes.admin.name,
    path: Routes.admin.path,
    component: () => import('@/pages/admin-page/AdminPage.vue'),
    meta: { title: 'Murland - Админ-панель' },
    redirect: { name: 'admin.login' },
    children: [
      {
        name: 'admin.login',
        path: 'login',
        component: () => import('@/features/admin/auth/ui/AdminAuth.vue'),
      },
      {
        name: 'admin.cats',
        path: 'cats',
        component: () => import('@/features/admin/cats/ui/AdminCats.vue'),
      },
      {
        name: 'admin.add-cats',
        path: 'cats/add',
        component: () => import('@/features/admin/cats/ui/AdminCatsAdd.vue'),
      },
      {
        name: 'admin.parents',
        path: 'parents',
        component: () => import('@/features/admin/parents/ui/AdminParents.vue'),
      },
      {
        name: 'admin.add-parents',
        path: 'parents/add',
        component: () => import('@/features/admin/parents/ui/AdminParentsAdd.vue'),
      },
      {
        name: 'admin.order',
        path: 'orders',
        component: () => import('@/features/admin/orders/ui/AdminOrders.vue'),
      },
      {
        name: 'admin.contacts',
        path: 'contacts',
        component: () => import('@/features/admin/contacts/ui/AdminContacts.vue'),
      },
      {
        name: 'admin.edit-cats',
        path: 'cats/edit/:id',
        component: () => import('@/features/admin/cats/ui/AdminCatsUpdate.vue')
      },
    ],
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

router.beforeEach((to, from, next) => {
  const { isAuth } = accountEntity.useStore()

  if (to.name?.startsWith('admin') && to.name !== 'admin.login' && !isAuth) {
    return next({ name: `${Routes.admin.children.login}` })
  }

  next()
})
