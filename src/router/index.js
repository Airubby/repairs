import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',component: (resolve) => require(['@/page/index'], resolve),
    },{
      path: '/',component: (resolve) => require(['@/page/index'], resolve),
    },{
      path: '/login',component: (resolve) => require(['@/page/login'], resolve)
    },
    
    
    ,{
      path: '/test',
      component: (resolve) => require(['@/page/test'], resolve),
    },
    
  ]
})
