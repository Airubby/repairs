<template>
    <div class="search">
        <el-row>
            <el-col :span="20">
            <div class="myDev_search">
                <input type="text"><i class="fa fa-search"></i>
            </div>
            </el-col>
            <el-col :span="4"><i class="fa fa-qrcode"></i></el-col>
        </el-row>
        <div class="search_info">
            <router-link to="/addDev" class="btn">还没有设备编号?那快来登记吧.</router-link>
        </div>
        <div class="loginInfo_bottom">
            <router-link to="/searchDevDetail" class="btn">查询</router-link>
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