import request from '@/utils/request'

const prefix = '/auth'

export const authApi = {
  signin: (param) => {
    return request.post(`${prefix}/signin`, param)
  }
}
