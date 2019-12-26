import store from '../store'

export function getLabel(val, key) {
    const arr = store.state.dict[key]
    const record = arr.filter(item => {
        return item.value == val
    })
    return record.length > 0 ? record[0].label : ''
}
