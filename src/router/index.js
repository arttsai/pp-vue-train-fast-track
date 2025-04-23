import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
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
  {
    path: '/product',
    name: 'product',
    component: () => import('@/views/ProductItemView.vue'),
    meta: {
      title: '產品',
    },
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
