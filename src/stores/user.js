import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  // js-cookie 是在 index.html 中利用 cdn 引入的
  // 因此由 window.Cookies 取得
  const cookies = window.Cookies

  const userId = ref(cookies.get('userId') ? parseInt(cookies.get('userId')) : 0)

  const userName = computed(() => {
    return `user ${userId.value}`
  })
  const isLogin = computed(() => {
    return userId.value > 0
  })
  const login = (id) => {
    userId.value = id
    cookies.set('userId', id, { expires: 7 }) // Set cookie for 7 days
  }
  const logout = () => {
    userId.value = 0
    cookies.remove('userId') // Remove cookie
  }

  return { userId, userName, isLogin, login, logout }
})
