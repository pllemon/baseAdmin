// 菜单管理
import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/api/admin/public/menu/tree',
    method: 'post',
    data
  })
}
