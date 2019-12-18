
import { getDict } from '@/api/dict'

const state = {
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

