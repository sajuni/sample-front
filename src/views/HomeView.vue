<template>
  <div>
    <h1>테스트</h1>
    <button @click="getTest">GET 테스트</button>
    <button @click="postTest">POST 테스트</button>
  </div>
</template>

<script setup>
import { sampleApi } from '@/api/sample'

const getTest = () => {
  sampleApi.getTest()
}

const postTest = () => {
  const param = {
    test: 'test'
  }
  sampleApi.postTest(param)
}
</script>
