import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '../router'
// 配置API接口地址
//var root = '/api'  //开发环境
var root1=''   //生产环境
// var root1=(function(){
//     //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp  
//     // var curWwwPath=window.document.location.href;  
//     // console.log(curWwwPath)
//     // //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp  
//     // var pathName=window.document.location.pathname;  
//     // console.log(pathName)
//     // var pos=curWwwPath.indexOf(pathName);  
//     // console.log(pos)
//     var host=window.document.location.host
//     console.log(host)
//     // //获取主机地址，如： http://localhost:8083  
//     // var localhostPaht=curWwwPath.substring(0,pos);  
//     console.log(host+":8094") 
//     //获取带"/"的项目名，如：/uimcardprj  
//     //var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);  
//     //return(localhostPaht+projectName);  
//     return 'http://'+host+":8094";
// })();
// var root=root1+'/ismacsite';
//用basic的root2  生产环境
// 引用axios
var axios = require('axios')
// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}
/*
  接口处理函数
  这个函数每个项目都是不一样的，我现在调整的是适用于
  https://cnodejs.org/api/v1 的接口，如果是其他接口
  需要根据接口的参数进行调整。参考说明文档地址：
  https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
  主要是，不同的接口的成功标识和失败提示是不一致的。
  另外，不同的项目的处理方法也是不一致的，这里出错就是简单的alert
*/

function apiAxios (method, url, params, success, failure) {
  if (params) {
    params = filterNull(params)
  }
  axios({
    method: method,
    url: url,
    data: method === 'POST' ||method === 'GET' ? params : null,
    params: method === 'POST' ||method === 'GET' ? params : null,
    baseURL: root1,
    withCredentials: true
  })
  .then(function (res) {
    if(res.data.code=="-1"){
        ElementUI.Message.warning("请登录系统");
        router.push({path:'/login'});
    }
    if(res.data.code=="-2"){
        ElementUI.Message.warning(res.data.msg);
    }
    if(res.data.code=="-9"){
        ElementUI.Message.warning(res.data.msg);
    }
    if(success){
      success(res.data);
    }
    // if(failure){
    //   failure(res.data);
    // }
    // if (res.data.success === true) {
    //   //console.log("success:"+ JSON.stringify(res.data))
    //   if (success) {
    //     success(res.data)
    //   }
    // } else {
    //   if (failure) {
    //     failure(res.data)
    //   } else {
    //    // console.log('error: ' + JSON.stringify(res.data))
    //   }
    // }
  })
  .catch(function (err) {
    let res = err.response
    if (err&&failure) {
      failure(res);
      //console.log('api error, HTTP CODE: ' + res.status)
    }
  })
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  },

}