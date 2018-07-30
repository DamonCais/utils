const components = [{
    type: 'tips',
    icon: 'mdi-alert-circle-outline',
    title: {
      zh: '',
      en: ''
    },
    description: {
      zh: '',
      en: ''
    }
  },
  {
    type: 'textbox',
    icon: 'mdi-format-font',
    title: {
      zh: '',
      en: ''
    },
    inputType: '',
    required: false,
    maxLength: null,
    trackFun: ''
  },
  {
    type: 'textarea',
    icon: 'mdi-format-pilcrow',
    title: {
      zh: '',
      en: ''
    },
    default: {
      zh: '',
      en: ''
    },
    required: false,
    maxLength: null,
    trackFun: ''
  },
  {
    type: 'radio',
    icon: 'mdi-check-circle',
    title: {
      zh: '',
      en: ''
    },
    required: false,
    options: [{
      zh: '选项一',
      en: 'option1'
    }],
    trackFun: ''
  },
  {
    type: 'checkbox',
    icon: 'mdi-checkbox-multiple-marked',
    title: {
      zh: '',
      en: ''
    },
    required: false,
    options: [{
      zh: '选项一',
      en: 'option1'
    }],
    maxOptions: 2,
    trackFun: ''
  },
  {
    type: 'select',
    icon: 'mdi-arrow-down-drop-circle',
    title: {
      zh: '',
      en: ''
    },
    required: false,
    options: [{
      zh: '选项一',
      en: 'option1'
    }],
    trackFun: ''
  },
  {
    type: 'datePicker',
    icon: 'mdi-calendar',
    title: {
      zh: '',
      en: ''
    },
    inputType: '',
    limitType: '',
    limitTime: [],
    required: false,
    maxSize: null,
    trackFun: ''
  },
  {
    type: 'table',
    icon: 'mdi-table-large',
    title: {
      zh: '',
      en: ''
    },
    maxRow: 2,
    columns: [{
      title: {
        zh: '标题一',
        en: 'title1'
      },
      type: '',
      required: false,
      options: {
        zh: [],
        en: []
      },
      optionText: ''
    }],
    trackFun: ''
  },
  {
    type: 'download',
    icon: 'mdi-cloud-download',
    title: {
      zh: '',
      en: ''
    },
    files: []
  },
  {
    type: 'upload',
    icon: 'mdi-cloud-upload',
    title: {
      zh: '',
      en: ''
    },
    uploadType: 'unlimited',
    required: false,
    maxSize: null,
    trackFun: ''
  }
]

const forms = [{
  sectionName: {
    zh: '第一章',
    en: 'Section one'
  },
  _id: 'abc',
  components: [],
  openList: [],
  checkList: []
}]

export {
  forms,
  components
}