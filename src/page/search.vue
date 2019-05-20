<template>
    <div class="search">
        <el-row>
            <el-col :span="20">
            <div class="myDev_search">
                <input type="text" v-model="search_info" placho>
            </div>
            </el-col>
            <el-col :span="4"><i class="fa fa-qrcode"></i></el-col>
        </el-row>
        <div class="search_info">
            <router-link to="/addDev" class="btn">还没有设备编号?那快来登记吧.</router-link>
        </div>
        <div class="loginInfo_bottom">
            <div class="button btn" @click="search">查询</div>
        </div>
    </div>
</template>

<script>
export default {
  created () {
      if(!localStorage.loginInfo){
        this.$message.warning("请登录系统");
        this.$router.push({path:'/login'});
    }else{
        this.$api.post('/user/getById', {id:JSON.parse(localStorage.loginInfo).id}, r => {
            if(r.data==null||r.data==""||r.data.length==0){
                this.$message.warning("请登录系统");
                this.$router.push({path:'/login'});
            }
        }); 
    }
 },
 data(){
  
  	return {
       search_info:'',
  	}
  },
  methods:{
      search:function(){
        this.$router.push({path:'/searchDevDetail'});
        // to="/searchDevDetail" 

      },
  }
}
</script>