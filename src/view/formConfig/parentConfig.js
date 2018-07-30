import {
  _validateEmail,
  _validatePassword,
  _validatePhone,
  _validateUsername
} from './rules.js'


const pforms = {

  relationship: {
    label: '称呼',
    placeholder: '请选择',
    type: 'select',
    options: [{
        value: '爸爸',
        label: '爸爸'
      }, {
        value: '妈妈',
        label: '妈妈'
      },
      {
        value: '其他',
        label: '其他'
      }
    ],
    value: ''
  },
  email: {
    label: '电子邮箱',
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
  username: {
    label: '名字',
    placeholder: '',
    type: 'input',
    value: ''
  },


  cellphone: {
    label: '手机',
    placeholder: '',
    type: 'input',
    value: ''
  },

  phone: {
    label: '家庭电话',
    placeholder: '',
    type: 'input',
    value: ''
  },

  region: {
    label: '国籍',
    placeholder: '请选择',
    type: 'select',
    options: [{
        value: '中国',
        label: '中国'
      }, {
        value: '美国',
        label: '美国'
      },
      {
        value: '其他',
        label: '其他'
      }
    ],
    value: ''
  },
  id: {
    label: '身份证',
    placeholder: '',
    type: 'input',
    value: ''
  },
  address: {
    label: '家庭住址',
    placeholder: '',
    type: 'textarea',
    inputType: 'textarea',
    value: ''

  },
}

const prules = {
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
  pforms,
  prules
}