import {
  _validateEmail,
  _validatePassword,
  _validatePhone,
  _validateUsername
} from './rules.js'


const cforms = {
  name: {
    label: '名字',
    placeholder: '',
    type: 'input',
    value: ''
  },
  firstname: {
    label: '姓氏',
    placeholder: '',
    type: 'input',
    value: ''
  },
  birthday: {
    label: '生日',
    placeholder: '',
    type: 'datePicker',
    value: ''
  },
  sex: {
    label: '性别',
    placeholder: '',
    type: 'radio',
    options: [{
      label: '男',
      value: '男'
    }, {
      label: '女',
      value: '女'
    }],
    value: ''
  },
  photo: {
    label: '学生照片',
    placeholder: '',
    type: 'imginput',
    value: '',
    src: ''
  }
}

const crules = {
  name: [{
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
  cforms,
  crules
}