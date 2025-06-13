import axios from 'axios'
import { ref, toValue, watchEffect } from 'vue'

export function useFetchUserInfo(userId) {
  const data = ref(null)
  const error = ref(null)

  const fetchUserInfo = () => {
    data.value = null
    error.value = null

    const userIdStr = toValue(userId)
    console.log('userId in useFetchUserInfo: ', userIdStr)
    if (!userIdStr) {
      error.value = new Error('User ID is required')
      return
    }

    axios
      .get('https://jsonplaceholder.typicode.com/users/' + userIdStr)
      .then((response) => {
        data.value = response.data
      })
      .catch((err) => {
        error.value = err
      })
  }

  watchEffect(() => fetchUserInfo())

  return { data, error }
}
