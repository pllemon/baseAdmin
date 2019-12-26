import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import settings from './modules/settings'
import user from './modules/user'
import dict from './modules/dict'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        settings,
        user,
        dict
    },
    getters
})

export default store
