import Cookies from 'js-cookie'

const TokenKey = 'grgBanking'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

export function getLoginStorage() {
    const username = localStorage.getItem('grgUser') || ''
    const password = localStorage.getItem('grgPwd') || ''
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
    localStorage.setItem('grgUser', mes.username)
    localStorage.setItem('grgPwd', mes.password)
}

export function removeLoginStorage() {
    localStorage.removeItem('grgUser')
    localStorage.removeItem('grgPwd')
}
