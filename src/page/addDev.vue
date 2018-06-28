<template>
    <div>
        <div class="lon_top">
            <router-link to="/" class="left"><img src="static/images/left.png"></router-link>
            <span>设备添加</span>
            <router-link to="" class="cha"><img src="static/images/cha.png"></router-link>
        </div>
        <div class="content loginInfo">
            <ul class="lon_pt30">
                <li><input type="text" placeholder="设备制造商"></li>
                <li><input type="text" placeholder="产品类型"></li>
                <li><input type="text" placeholder="产品系列"></li>
                <li><input type="text" placeholder="序列号"></li>
                <li><input type="text" placeholder="安装地址"></li>
                <li><input type="text" placeholder="备注"></li>
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