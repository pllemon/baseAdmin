import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import 'normalize.css/normalize.css' // 重置css

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // 全局css

import '@/icons' // icon组件
import '@/utils/permission' // 权限控制
import '@/utils/filter' // 全局filter

Vue.use(ElementUI)

// 时间处理库
import moment from 'moment'
Vue.prototype.$moment = moment

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import common from './utils/common.js'
Vue.prototype.$common = common

import SelectTree from '@/components/SelectTree'
Vue.component('SelectTree', SelectTree)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
