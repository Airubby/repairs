<template>
    <div>
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
                this.$message.success("登录成功，欢迎使用报修系统");
                var loginInfo={};
                if(localStorage.loginInfo){
                    loginInfo=JSON.parse(localStorage.loginInfo);
                }
                loginInfo.username=this.loginInfo.phone;
                loginInfo.id=r.data.id;
                localStorage.loginInfo = JSON.stringify(loginInfo);
                this.$router.push({path:"/myInfo"});
            }
        });
      },
  }
}
</script>