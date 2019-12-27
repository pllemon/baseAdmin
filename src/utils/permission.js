import router from '@/router'
import store from '@/store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // 不重定向的白名单

router.beforeEach(async(to, from, next) => {
    // 开始切换页面进度条
    NProgress.start()

    // 设置页面title
    document.title = getPageTitle(to.meta.title)

    // 是否登录
    const hasToken = getToken()

    if (hasToken) {
        if (to.path === '/login') {
            next({ path: '/' })
            NProgress.done()
        } else {
            if (store.state.user.userInfo) {
                next()
            } else {
                try {
                    await store.dispatch('user/getInfo')
                    next()
                } catch (error) {
                    await store.dispatch('user/logout')
                    Message.error(error || 'Has Error')
                    next(`/login?redirect=${to.path}`)
                    NProgress.done()
                }
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next(`/login?redirect=${to.path}`)
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    // 结束切换页面进度条
    NProgress.done()
})
