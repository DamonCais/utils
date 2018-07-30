const components = [{
    type: 'header',
    icon: 'mdi-comment-account-outline',
    bread: '',
    title: '',
  }, {
    type: 'form',
    icon: 'mdi-format-pilcrow',
    forms: [{
      type: '',
      label: '',
      options: [],
      md: '',
      value: '',
    }],
  }, {
    type: 'table',
    icon: 'mdi-table-edit',
    tables: [],
    rows: 0,
    columns: 0,
  },
  {
    type: 'chart',
    icon: 'mdi-table-large',
    data: [],
    options: [],
  }
]

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