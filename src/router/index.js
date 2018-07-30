import Vue from 'vue'
import Router from 'vue-router'
import layouts from '../layout'
import store from '../store'

Vue.use(Router)


const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      alias: '/dashboard',
      name: 'dashboard',
      component: () =>
        import ('@/view/apps/Dashboard'),
      meta: {
        auth: true,
        layout: layouts.navLeft,
        searchable: true,
        tags: ['app']
      }
    },
    {
      path: '/user/parent',
      name: 'parent',
      component: () =>
        import ('@/view/pages/user/parent'),
      meta: {
        auth: true,
        layout: layouts.navLeft,
        searchable: true,
        tags: ['app']
      }
    }, {
      path: '/user/parent/:id',
      name: 'parent',
      component: () =>
        import ('@/view/pages/user/parent/info'),
      meta: {
        auth: true,
        layout: layouts.navLeft,
        searchable: true,
        tags: ['app']
      }
    }, {
      path: '/user/children',
      name: 'children',
      component: () =>
        import ('@/view/pages/user/children'),
      meta: {
        auth: true,
        layout: layouts.navLeft,
        searchable: true,
        tags: ['app']
      }
    }, {
      path: '/set/form',
      name: 'form',
      component: () =>
        import ('@/view/pages/set/form'),
      meta: {
        auth: true,
        layout: layouts.navLeft,
        searchable: true,
        tags: ['app']
      }
    }, {
      path: '/set/form/:id',
      name: 'form',
      component: () =>
        import ('@/view/pages/set/form/form.vue'),
      meta: {
        auth: true,
        layout: layouts.navLeft,
        searchable: true,
        tags: ['app']
      }
    }, {
      path: '/set/step',
      name: 'step',
      component: () =>
        import ('@/view/pages/set/step'),
      meta: {
        auth: true,
        layout: layouts.navLeft,
        searchable: true,
        tags: ['app']
      }
    }, {
      path: '/set/step/:id',
      name: 'step',
      component: () =>
        import ('@/view/pages/set/step/step.vue'),
      meta: {
        auth: true,
        layout: layouts.navLeft,
        searchable: true,
        tags: ['app']
      }
    }, {
      path: '/set/project',
      name: 'project',
      component: () =>
        import ('@/view/pages/set/project'),
      meta: {
        auth: true,
        layout: layouts.navLeft,
        searchable: true,
        tags: ['app']
      }
    }, {
      path: '/set/project/:id',
      name: 'project',
      component: () =>
        import ('@/view/pages/set/project/project'),
      meta: {
        auth: true,
        layout: layouts.navLeft,
        searchable: true,
        tags: ['app']
      }
    }, {
      path: '/admissions',
      name: 'admissions',
      component: () =>
        import ('@/view/pages/admissions'),
      meta: {
        auth: true,
        layout: layouts.navLeft,
        searchable: true,
        tags: ['app']
      }
    }, {
      path: '/profile',
      name: 'profile',
      component: () =>
        import ('@/view/pages/Profile'),
      meta: {
        auth: true,
        layout: layouts.navLeft,
        searchable: true,
        tags: ['app']
      }
    },
    {
      path: '/interview',
      name: 'interview',
      component: () =>
        import ('@/view/pages/interview'),
      meta: {
        auth: true,
        layout: layouts.navLeft,
        searchable: true,
        tags: ['app']
      }
    },
    {
      path: '/codeMaker',
      name: 'codeMaker',
      component: () =>
        import ('@/view/pages/codeMaker'),
      meta: {
        auth: true,
        layout: layouts.navLeft,
        searchable: true,
        tags: ['app']
      }
    }, {
      path: '/test',
      name: 'test',
      component: () =>
        import ('@/view/pages/test'),
      meta: {
        auth: true,
        layout: layouts.navLeft,
        searchable: true,
        tags: ['app']
      }
    },
    // {
    // 	path: '/interview/:id/:id',
    // 	name: 'interview',
    // 	component: () =>
    // 		import ('@/view/pages/interview/group'),
    // 	meta: {
    // 		auth: true,
    // 		layout: layouts.navLeft,
    // 		searchable: true,
    // 		tags: ['app']
    // 	}
    // },

    {
      path: '/login',
      name: 'login',
      component: () =>
        import ('@/view/pages/authentication/Login'),
      meta: {
        layout: layouts.contenOnly
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () =>
        import ('@/view/pages/authentication/Register'),
      meta: {
        layout: layouts.contenOnly
      }
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () =>
        import ('@/view/pages/authentication/ForgotPassword'),
      meta: {
        layout: layouts.contenOnly
      }
    },
    {
      path: '/logout',
      beforeEnter(to, from, next) {
        auth.logout()
        next({
          path: '/login'
        })
      }
    },
    {
      path: '*',
      name: 'not-found',
      component: () =>
        import ('@/view/pages/NotFound'),
      meta: {
        layout: layouts.contenOnly
      }
    }
  ]
})


const l = {
  contenOnly() {
    store.commit('setLayout', layouts.contenOnly)
  },
  navLeft() {
    store.commit('setLayout', layouts.navLeft)
  },
  navRight() {
    store.commit('setLayout', layouts.navRight)
  },
  navTop() {
    store.commit('setLayout', layouts.navTop)
  },
  navBottom() {
    store.commit('setLayout', layouts.navBottom)
  },
  set(layout) {
    store.commit('setLayout', layout)
  }
}

//insert here login logic
const auth = {
  loggedIn() {
    return store.getters.isLogged
  },
  logout() {
    store.commit('setLogout')
  }
}

router.beforeEach((to, from, next) => {
  let authrequired = false
  if (to && to.meta && to.meta.auth)
    authrequired = true

  //console.log('authrequired', authrequired, to.name)

  if (authrequired) {
    if (auth.loggedIn()) {
      if (to.name === 'login') {
        window.location.href = '/'
        return false
      } else {
        next()
      }
    } else {
      if (to.name !== 'login') {
        window.location.href = '/login'
        return false
      }
      next()
    }
  } else {
    if (auth.loggedIn() && to.name === 'login') {
      window.location.href = '/'
      return false
    } else {
      next()
    }
  }

  if (to && to.meta && to.meta.layout) {
    l.set(to.meta.layout)
  }
})

router.afterEach((to, from) => {
  setTimeout(() => {
    store.commit('setSplashScreen', false)
  }, 50)
})

export default router
