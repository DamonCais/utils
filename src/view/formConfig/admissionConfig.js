import {
  _validateEmail,
  _validatePassword,
  _validatePhone,
  _validateUsername
} from './rules.js'



const aforms = {
  children: {
    md: {
      span: 12,
      pull: 12,
      offset: 12,
    },
    label: '选择学生',
    placeholder: '选择孩子',
    type: 'select',
    options: [{
        value: 'hardy',
        label: 'hardy'
      }, {
        value: 'mary',
        label: 'mary'
      },
      {
        value: 'other',
        label: 'other'
      }
    ],
    value: ''
  },
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
  line: {
    line: true,
    md: 24,
  },
  year: {
    md: {
      span: 12,
      pull: 12,
      offset: 12,
    },
    label: '选择年份',
    placeholder: '选择年份',
    type: 'select',
    options: [{
      value: '2017',
      label: '2017'
    }, {
      value: '2018',
      label: '2018'
    }, ],
    value: ''
  },
  project: {
    md: {
      span: 12,
      pull: 12,
      offset: 12,
    },
    label: '选择项目',
    placeholder: '选择项目',
    type: 'select',
    options: [{
        value: '项目一',
        label: '项目一'
      }, {
        value: '项目二',
        label: '项目二'
      },

    ],
    value: ''
  },
  grade: {
    md: {
      span: 12,
      pull: 12,
      offset: 12,
    },
    label: '选择年级',
    placeholder: '选择年级',
    type: 'select',
    options: [{
      value: '一年级',
      label: '一年级'
    }, {
      value: '二年级',
      label: '二年级'
    }, ],
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