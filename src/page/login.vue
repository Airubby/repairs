<template>
    <div>
        <div class="lon_top">
            <router-link to="/" class="left"><img src="static/images/left.png"></router-link>
            <span>账号登录</span>
            <router-link to="" class="cha"><img src="static/images/cha.png"></router-link>
        </div>
        <topInfo v-bind="topInfo"></topInfo>
        <div class="content loginInfo">
            <h2>账号登录</h2>
            <ul>
                <li><input type="text" placeholder="手机号" v-model="loginInfo.phone"></li>
                <li><input type="password" placeholder="密码" v-model="loginInfo.pwd"></li>
            </ul>
            <div class="loginInfo_center">
                <router-link to="/forgot">忘记密码?</router-link>
                <router-link to="/register">没有账号?</router-link>
            </div>
            <div class="loginInfo_bottom">
                <div class="wechart button">微信快速登录</div>
                <div class="button" @click="loginIn">登录</div>
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
        topInfo:{
            title:"账号登录",
            url:"",
        },
       loginInfo:{
           phone:'',
           pwd:"",
       }
  	}
  },
  methods:{
      loginIn:function(){
        this.loginInfo.pwd= b64_md5(this.loginInfo.pwd);
        console.log(this.loginInfo)
        this.$api.get('/login/login', this.loginInfo, r => {
            console.log(r)
            if(r.success){
                
            }
        });
      },
  }
}
</script>