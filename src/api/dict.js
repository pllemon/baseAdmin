import request from '@/utils/request'

export function getDict(data) {
  return request({
    url: '/api/admin/public/dict/combo',
    method: 'post',
    data
  })
}
