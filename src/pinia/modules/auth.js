import { defineStore } from 'pinia'
import { ref } from 'vue'
import { jwtDecode } from 'jwt-decode'

export const useAuthStore = defineStore('auth', () =>{
  const tokenInfo = ref({
    accessToken: '',
    grantType: "Bearer",
    roles: [],
    tokenExpiration: 0
  })

  const signin = (token) => {
    const decodeToken = jwtDecode(token)
    tokenInfo.value.accessToken = token
    tokenInfo.value.roles = decodeToken.roles.split(',')
    tokenInfo.value.tokenExpiration = decodeToken.exp
  }

  return {
    tokenInfo,
    signin
  }
})