import store from '../store'
import { Notification } from 'element-ui'

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

// 成功提示
function successNotify(mes) {
  Notification({
    title: '成功',
    message: mes || '操作成功',
    dangerouslyUseHTMLString: true,
    type: 'success',
    duration: 1000
  })
}

// 对象深拷贝
function deepCopy(obj) {
  var result = Array.isArray(obj) ? [] : {}
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && obj[key] !==  null) {
        result[key] = deepCopy(obj[key])
      } else {
        result[key] = obj[key]
      }
    }
  }
  return result
}


export default {
  getDictList,
  successNotify,
  deepCopy
}