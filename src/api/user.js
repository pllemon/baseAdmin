import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/auth/jwt/token',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/api/admin/user/front/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/api/auth/jwt/invalid',
    method: 'post'
  })
}
