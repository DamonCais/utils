import {
  _validateEmail,
  _validatePassword,
  _validatePhone,
  _validateUsername
} from './rules.js'


const aforms = {

  firstname: {
    label: '姓氏',
    placeholder: '',
    type: 'input',
    value: ''
  },
  name: {
    label: '名字',
    placeholder: '',
    type: 'input',
    value: ''
  },
  email: {
    label: '电子邮箱',
    placeholder: '',
    type: 'input',
    value: ''
  },
  cellphone: {
    label: '手机号码',
    placeholder: '',
    type: 'input',
    value: ''
  },
  password: {
    label: '新密码',
    placeholder: '不修改密码,则不填写',
    type: 'input',
    value: ''
  },
  checkpass: {
    label: '再次输入密码',
    placeholder: '不修改密码,则不填写',
    type: 'input',
    value: ''
  },
}

const arules = {
  username: [{
    required: true,
    validator: _validateUsername,
    trigger: 'blur'
  }],
  email: [{
    required: true,
    validator: _validateEmail,
    trigger: 'blur'
  }],
  cellphone: [{
    required: true,
    validator: _validatePhone,
    trigger: 'blur'
  }],
  password: [{
    required: true,
    validator: _validatePassword,
    trigger: 'blur'
  }],
}
export {
  aforms,
  arules
}