import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import { meta } from 'eslint-plugin-vue'

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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
