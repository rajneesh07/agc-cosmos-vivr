import Vue from 'vue'
import Router from 'vue-router'
import MainWindow from './../components/MainWindow.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/chat/:state',
    name: 'MainWindow',
    component: MainWindow
  },
  {
    path: '/',
    name: 'MainWindow',
    component: MainWindow
  }
  ]
})

// props: {
//   page: 1
// }
