import request from '@/utils/request'

const prefix = '/sample'

export const sampleApi = {
  getTest: () => {
    return request.get(prefix + `/getTest`)
  },
  postTest: (param) => {
    return request.post(prefix + `/postTest`, param)
  }
}
