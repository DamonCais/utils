const components = [{
  type: 'form',
  icon: 'mdi-table-edit',
  stepName: {
    zh: '',
    en: ''
  },
  remark: {
    zh: '',
    en: ''
  },
  form: [],
  needPay: false,
  pay: null,

  paymentOptions: [],
  needBill: false
}, {
  type: 'interview',
  icon: 'mdi-comment-account-outline',

  stepName: {
    zh: '',
    en: ''
  },
  remark: {
    zh: '',
    en: ''
  },
  interviewTime: '',
  interviewPlace: '',
  needGroup: false,
  groups: [{
    name: '',
    form: []
  }],
  multiInterview: false,
  nextStepWhenPass: '',
  nextStepWhenFail: ''
}, {
  type: 'payment',
  icon: 'mdi-square-inc-cash',
  stepName: {
    zh: '',
    en: ''
  },
  remark: {
    zh: '',
    en: ''
  },
  pay: null,

  paymentOptions: [],
  needBill: false
}, {
  type: 'admission',
  icon: 'mdi-contact-mail',
  stepName: {
    zh: '',
    en: ''
  },
  remark: {
    zh: '',
    en: ''
  }
}]

const steps = {
  title: {
    zh: '步骤',
    en: 'Step'
  },
  type: '',
  _id: 'abc',
  components: [],
  openList: [],
  checkList: []
}

export {
  steps,
  components
}