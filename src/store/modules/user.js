import { login, getInfo } from '@/api/user'
import { getToken, setToken, removeToken, setLoginStorage, removeLoginStorage } from '@/utils/auth'
import { resetRouter } from '@/router'

const state = {
    token: getToken(),
    userInfo: null
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_USERINFO: (state, data) => {
        state.userInfo = data
    }
}

const actions = {
    // 登录
    login({ commit }, loginInfo) {
        const { username, password, remember } = loginInfo
        return new Promise((resolve, reject) => {
            login({ username: username, password: password }).then(response => {
                const { data } = response
                commit('SET_TOKEN', data)
                setToken(data)
                if (remember) {
                    setLoginStorage(loginInfo)
                } else {
                    removeLoginStorage()
                }
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

    // 获取个人信息
    getInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            getInfo(state.token).then(response => {
                const { data } = response
                if (!data) {
                    reject('登录已过期，请重新登录')
                }
                commit('SET_USERINFO', data)
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // 用户退出
    logout({ commit, state }) {
        return new Promise((resolve, reject) => {
            commit('SET_TOKEN', '')
            commit('SET_USERINFO', null)
            removeToken()
            resetRouter()
            resolve()
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

