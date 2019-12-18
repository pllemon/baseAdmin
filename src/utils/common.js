import store from '../store'

// 字典获取
function getDictList(arr, callback) {
  let dictArr = []
  arr.forEach(code => {
    if (!store.state.dict[code]) {
      dictArr.push(store.dispatch('dict/getDict', code))
    }
  })
  Promise.all(dictArr).then(result => {
    if (callback) {
      callback()
    }
  })
}

// 对象深拷贝

export default {
  getDictList
}