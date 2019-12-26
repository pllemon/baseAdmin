
import { getDict } from '@/api/dict'

const state = {
  MENU_TYPE: [ // 菜单类型
    {value: 'menu', label: '菜单', text: '菜单'},
    {value: 'dirt', label: '目录', text: '目录'},
    {value: 'button', label: '按钮', text: '按钮'}
  ],
  REQUEST_TYPE: [ // 请求方式
    {value: 'GET', label: 'GET', text: 'GET'},
    {value: 'POST', label: 'POST', text: 'POST'},
    {value: 'DELETE', label: 'DELETE', text: 'DELETE'},
    {value: 'PUT', label: 'PUT', text: 'PUT'}
  ],
  ICODE_TYPE: [ // 标识码类型
    {value: '_blank', label: '_blank', text: '_blank'},
    {value: '_self', label: '_self', text: '_self'}
  ],
  ENABLE_TYPE: [ // 启用状态
    {value: '1', label: '启用', text: '启用'},
    {value: '0', label: '禁用', text: '禁用'},
  ],

  GUEST_TYPE: undefined, //访客类型
  ID_TYPE: undefined, // 证件类型
}

const mutations = {
  SET_DICT: (state, data) => {
    state[data.code] = data.result
  }
}

const actions = {
  getDict({ commit }, dictCode) {
    return new Promise((resolve, reject) => {
      getDict({ dictCode }).then(response => {
        let { result } = response
        result.forEach(item => {
          item.text = item.label
        })
        commit('SET_DICT', {
          code: dictCode,
          result: result
        })
        resolve(result)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

