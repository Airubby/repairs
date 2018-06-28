<template>
    <div>
        <div class="lon_top">
            <router-link to="/" class="left"><img src="static/images/left.png"></router-link>
            <span>我的资料</span>
            <router-link to="" class="cha"><img src="static/images/cha.png"></router-link>
        </div>
        <div class="content loginInfo">
            <ul class="lon_pt20">
                <li class="myInfoTX"><input type="text" placeholder="头像"><span><img src="static/images/icon-touxiang.png"></span></li>
                <li><input type="text" placeholder="姓名"></li>
                <li><input type="text" placeholder="手机号码"></li>
                <li><input type="text" placeholder="验证码"></li>
                <li><input type="text" placeholder="地址"></li>
                <li><input type="text" placeholder="邮箱"></li>
                <li><input type="text" placeholder="单位名称"></li>
                <li><input type="text" placeholder="实名认证"></li>
                
            </ul>
            <div class="loginInfo_bottom">
                <router-link to="" class="btn">提交</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  created () {
      
 },
 data(){
  
  	return {
       
  	}
  },
  methods:{
      
  }
}
</script>