// 表单验证

// 必填
function require(type = 1) {
    return {
        required: true,
        message: type == 1 ? '请输入' : '请选择',
        trigger: type == 1 ? 'blur' : 'change'
    }
}

// 最大长度
function maxLen(num = 20) {
    return {
        max: num,
        message: '最大长度为' + num + '个字符',
        trigger: 'blur'
    }
}

// 手机号码
function phone() {
    const reg = /^[1][3,4,5,7,8][0-9]{9}$/
    const validatePhone = (rule, value, callback) => {
        if (value == '' || value == undefined || value == null) {
            callback()
        } else {
            if ((!reg.test(value)) && value != '') {
                callback(new Error('请输入正确的手机号码'))
            } else {
                callback()
            }
        }
    }
    return {
        validator: validatePhone,
        trigger: 'blur'
    }
}

export default {
    require,
    maxLen,
    phone
}
