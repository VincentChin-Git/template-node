import request from './_request'

const prefix = '/test'

export const testGet = async (payload: any) => {
  return request.get(prefix + '/get', payload)
}

export const testPost = async (payload: any) => {
  return request.post(prefix + '/post', payload)
}
