import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',meta:{title:'报修系统-首页'},component: (resolve) => require(['@/page/index'], resolve),
    },{
      path: '/login',meta:{title:'报修系统-账号登录'},component: (resolve) => require(['@/page/login'], resolve)
    },{
      path: '/register',meta:{title:'报修系统-账号注册'},component: (resolve) => require(['@/page/register'], resolve)
    },{
      path: '/addDev',meta:{title:'报修系统-设备添加'},component: (resolve) => require(['@/page/addDev'], resolve)
    },{
      path: '/devDetail',meta:{title:'报修系统-设备详情'},component: (resolve) => require(['@/page/devDetail'], resolve)
    },{
      path: '/editMyInfo',meta:{title:'报修系统-我的资料'},component: (resolve) => require(['@/page/editMyInfo'], resolve)
    },{
      path: '/forgot',meta:{title:'报修系统-密码找回'},component: (resolve) => require(['@/page/forgot'], resolve)
    },{
      path: '/myDev',meta:{title:'报修系统-我的设备'},component: (resolve) => require(['@/page/myDev'], resolve)
    },{
      path: '/myInfo',meta:{title:'报修系统-个人中心'},component: (resolve) => require(['@/page/myInfo'], resolve)
    },{
      path: '/repairsDetail',meta:{title:'报修系统-报修详情'},component: (resolve) => require(['@/page/repairsDetail'], resolve)
    },{
      path: '/search',meta:{title:'报修系统-设备查询'},component: (resolve) => require(['@/page/search'], resolve)
    },{
      path: '/searchDevDetail',meta:{title:'报修系统-查询详情'},component: (resolve) => require(['@/page/searchDevDetail'], resolve)
    },{
      path: '/pollingList',meta:{title:'报修系统-巡检记录'},component: (resolve) => require(['@/page/pollingList'], resolve)
    },{
      path: '/repairsList',meta:{title:'报修系统-报修记录'},component: (resolve) => require(['@/page/repairsList'], resolve)
    },{
      path: '/repairs',meta:{title:'报修系统-故障报修'},component: (resolve) => require(['@/page/repairs'], resolve)
    },
    
    
    ,{
      path: '/test',
      component: (resolve) => require(['@/page/test'], resolve),
    },
    
  ]
})
