import Vue from 'vue'
import store from '@/store'

Vue.filter('getLabel', function(val, key) {
    const arr = store.state.dict[key]
    const record = arr.filter(item => {
        return item.value == val
    })
    return record.length > 0 ? record[0].label : ''
})
