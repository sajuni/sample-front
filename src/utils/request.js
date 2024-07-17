import { baseURL, requestTimeout, contentType } from '@/config/netConfig'
import axios from 'axios'

const instance = axios.create({
  baseURL,
  timeout: requestTimeout,
  headers: {
    'Content-Type': contentType
  }
})

instance.interceptors.request.use(config => {
  return config
})

instance.interceptors.response.use(  res => {
    return res;  // 성공한 응답은 그대로 반환
  },
  error => {
    return Promise.reject(error.response || error);  // 오류를 반환하여 이후 처리
  })

export default instance
