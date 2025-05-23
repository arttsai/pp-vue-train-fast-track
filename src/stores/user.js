import { defineStore } from 'pinia'
import { computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const userId = ref(0)

  const userName = computed(() => {
    return `user ${userId.value}`
  })
  const isLogin = computed(() => {
    return userId.value > 0
  })
  const login = (id) => {
    userId.value = id
  }
  const logout = () => {
    userId.value = 0
  }

  return { userId, userName, isLogin, login, logout }
})
