import Cookies from 'js-cookie'
import setting from '@/utils/setting'

const appKey = setting.appKey

export function getToken() {
    return Cookies.get(appKey)
}

export function setToken(token) {
    return Cookies.set(appKey, token)
}

export function removeToken() {
    return Cookies.remove(appKey)
}

export function getLoginStorage() {
    let localData = localStorage.getItem(appKey) ? JSON.parse(localStorage.getItem(appKey)) : {}
    const username = localData.username
    const password = localData.password
    let remember = false
    if (username) {
        remember = true
    }
    return {
        username,
        password,
        remember
    }
}

export function setLoginStorage(mes) {
    localStorage.setItem(appKey, JSON.stringify(mes))
}

export function removeLoginStorage() {
    localStorage.removeItem(appKey)
}
