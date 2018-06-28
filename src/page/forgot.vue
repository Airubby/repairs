<template>
    <div>
        <div class="lon_top">
            <router-link to="/login" class="left"><img src="static/images/left.png"></router-link>
            <span>密码找回</span>
            <router-link to="" class="cha"><img src="static/images/cha.png"></router-link>
        </div>
        <div class="content loginInfo">
            <h2>密码找回</h2>
            <ul>
                <li class="sendli"><input type="text" placeholder="手机号"><a href="javascript:;">发送验证码</a></li>
                <li><input type="password" placeholder="密码"></li>
                <li><input type="text" placeholder="验证码"></li>
            </ul>
            <div class="loginInfo_bottom">
                <router-link to="" class="register">提交</router-link>
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