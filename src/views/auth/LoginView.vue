<template>
  <div>
    <b-form-input type="text" v-model="param.id"/>
    <b-form-input type="password" v-model="param.pwd"/>
    <b-button variant="primary" size="lg" @click="signin">
      로그인
    </b-button>
  </div>
</template>

<script setup>

import { authApi } from '@/api/auth/auth.js'
import { useAuthStore } from '@/pinia/modules/auth.js'
import router from '@/router/index.js'
// import { getActivePinia } from "pinia"
// getActivePinia()._s.forEach(store => store.$reset());
const authStore = useAuthStore();
const param = {
  id: '',
  pwd: ''
}

const signin = () => {
  authApi.signin(param)
    .then(res => {
      authStore.signin(res.data.accessToken)
    })
    .then(() => {
      router.push('/memberInfo')
    })
    .catch(err => {
      alert(err.data.msg)
      console.info("요청실패 ::: ", err)
    })

}

</script>
