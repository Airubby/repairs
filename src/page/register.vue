<template>
    <div>
        <div class="lon_top">
            <router-link to="/" class="left"><img src="static/images/left.png"></router-link>
            <span>账号注册</span>
            <router-link to="" class="cha"><img src="static/images/cha.png"></router-link>
        </div>
        <div class="content loginInfo">
            <h2>账号注册</h2>
            <ul>
                <li><input type="text" placeholder="手机号"></li>
                <li><input type="password" placeholder="密码"></li>
                <li><input type="text" placeholder="联系人员"></li>
                <li><input type="text" placeholder="单位信息"></li>
                <li><input type="text" placeholder="联系地址"></li>
            </ul>
            <div class="loginInfo_bottom">
                <router-link to="" class="register">注册</router-link>
                <span>已查看并同意注册条款</span>
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