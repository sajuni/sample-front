import { baseURL, requestTimeout, contentType } from '@/config/netConfig'
import axios from 'axios'

const instance = axios.create({
  baseURL,
  timeout: requestTimeout,
  headers: {
    'Content-Type': contentType
  }
})

export default instance
