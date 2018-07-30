import {
    validateEmail,
    validatePhone,
    // validateChinaId,
    // validatePassport,
    // validateTaiwanPermit,
    // validateHongKongPermit
} from '@/utils/validate'

var _validateEmail = (rule, obj, callback) => {
    if (obj.value === '') {
        callback(new Error('请输入邮箱'))
    } else {
        if (!validateEmail(obj.value)) {
            callback(new Error('请输入正确邮箱'))
        }
        callback()
    }
}
var _validatePhone = (rule, obj, callback) => {
    if (obj.value === '') {
        callback(new Error('请输入手机'))
    } else {
        if (!validatePhone(obj.value)) {
            callback(new Error('请输入正确手机'))
        }
        callback()
    }
}
var _validateFullName = (rule, obj, callback) => {
    if (obj.value === '') {
        callback(new Error('请输入姓名'))
    } else {
        callback()
    }
}
var _validatePassword = (rule, obj, callback) => {
    if (obj.value === '') {
        callback(new Error('请输入密码'))
    } else {
        callback()
    }
}

var _validateUsername = (rule, obj, callback) => {
    if (obj.value.trim() === '') {
        callback(new Error('请输入用户名'))
    } else {
        callback()
    }
}

export {
    _validateEmail,
    _validatePhone,
    _validateFullName,
    _validatePassword,
    _validateUsername,
}