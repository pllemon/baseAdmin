import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/utils/permission' // permission control

Vue.use(ElementUI)

// 全局filter
import filters from './utils/filter'
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

// 时间库
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
