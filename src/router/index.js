import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      title: '首頁',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: '關於我們',
    },
  },
  {
    path: '/upvote',
    name: 'upvote',
    component: () => import('../views/UpVoteView.vue'),
    meta: {
      title: 'Blog 投票',
    },
  },
  // {
  //   path: '/products/:id',
  //   name: 'product',
  //   component: () => import('@/views/ProductItemView.vue'),
  //   props: true,
  //   meta: {
  //     title: '產品',
  //   },
  // },
  {
    path: '/products',
    name: 'productlist',
    component: () => import('@/views/ProductListView.vue'),
    meta: {
      title: '產品列表',
    },
    children: [
      {
        path: '',
        component: () => import('@/views/ProductNoneView.vue'),
        name: 'productnone',
        meta: {
          title: '產品列表',
        },
      },
      {
        path: ':id',
        name: 'product',
        component: () => import('@/views/ProductItemView.vue'),
        meta: { title: 'Product Detail' },
        props: true,
      },
    ],
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: () => import('../views/TabsView.vue'),
    meta: { title: 'Tabs Page' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const DEFAULT_TITLE = 'Vue 高手直達車'
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE
  next()
})

export default router
