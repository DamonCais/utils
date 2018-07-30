import Vue from 'vue'
import Vuex from 'vuex'
import editor from './modules/editor'
import app from './modules/app'
import getters from './getters'

import createPersistedState from 'vuex-persistedstate'
const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    editor,
  },
  getters,
  plugins: [createPersistedState({
    paths: ['layout']
  })],
  strict: debug

})

export default store