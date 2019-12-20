// 选择项管理
import request from '@/utils/request'

export function getList(data) {
    return request({
        url: '/api/admin/dict/query/page',
        method: 'post',
        data
    })
}

export function removeSingle(data) {
    return request({
        url: `/api/admin/dict/${data.id}`,
        method: 'delete'
    })
}

export function updateSingle(data) {
    let url = `/api/admin/dict`
    let method = 'post'
    if (data.id) {
        url = url + `/${data.id}`
        method = 'put'
    }
    return request({
        url,
        method,
        data
    })
}
