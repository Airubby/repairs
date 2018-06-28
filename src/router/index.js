import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',component: (resolve) => require(['@/page/index'], resolve),
    },{
      path: '/login',component: (resolve) => require(['@/page/login'], resolve)
    },{
      path: '/register',component: (resolve) => require(['@/page/register'], resolve)
    },{
      path: '/addDev',component: (resolve) => require(['@/page/addDev'], resolve)
    },{
      path: '/devDetail',component: (resolve) => require(['@/page/devDetail'], resolve)
    },{
      path: '/editMyInfo',component: (resolve) => require(['@/page/editMyInfo'], resolve)
    },{
      path: '/forgot',component: (resolve) => require(['@/page/forgot'], resolve)
    },{
      path: '/myDev',component: (resolve) => require(['@/page/myDev'], resolve)
    },{
      path: '/myInfo',component: (resolve) => require(['@/page/myInfo'], resolve)
    },{
      path: '/repairsDetail',component: (resolve) => require(['@/page/repairsDetail'], resolve)
    },{
      path: '/search',component: (resolve) => require(['@/page/search'], resolve)
    },{
      path: '/searchDevDetail',component: (resolve) => require(['@/page/searchDevDetail'], resolve)
    },{
      path: '/pollingList',component: (resolve) => require(['@/page/pollingList'], resolve)
    },{
      path: '/repairsList',component: (resolve) => require(['@/page/repairsList'], resolve)
    },{
      path: '/repairs',component: (resolve) => require(['@/page/repairs'], resolve)
    },
    
    
    ,{
      path: '/test',
      component: (resolve) => require(['@/page/test'], resolve),
    },
    
  ]
})
