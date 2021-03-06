import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true
    },
    
    {
        path: '/404',
        component: () => import('@/views/404'),
        hidden: true
    },

    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            name: 'Dashboard',
            component: () => import('@/views/dashboard/index'),
            meta: { title: 'Dashboard', icon: 'dashboard' }
        }]
    },

    {
        path: '/systemManager',
        name: 'systemManager',
        component: Layout,
        children: [
            {
                path: 'menuMng',
                name: 'menuMng',
                component: () => import('@/views/systemManager/menuMng/index'),
                meta: { title: '菜单管理' }
            },
            {
                path: 'roleMng',
                name: 'roleMng',
                component: () => import('@/views/systemManager/roleMng/index'),
                meta: { title: '角色权限管理' }
            },
            {
                path: 'baseParam',
                name: 'baseParam',
                component: () => import('@/views/systemManager/baseParam/index'),
                meta: { title: '选择项管理' }
            },
            {
                path: 'userMng',
                name: 'userMng',
                component: () => import('@/views/systemManager/userMng/index'),
                meta: { title: '用户管理' }
            }
        ]
    },

    { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router
