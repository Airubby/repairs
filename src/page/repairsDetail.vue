<template>
    <div>
        <div class="lon_top">
            <router-link to="/myInfo" class="left"><img src="static/images/left.png"></router-link>
            <span>报修详情</span>
            <router-link to="" class="cha"><img src="static/images/cha.png"></router-link>
        </div>
        <div class="content lon_pt20">
            <el-form label-width="90px" :model="formLabelAlign" class="repairsDetail devDetail">
                <el-form-item label="报修时间">
                    <el-input v-model="formLabelAlign.repairsTime"></el-input>
                </el-form-item>
                <el-form-item label="工单状态">
                    <el-input v-model="formLabelAlign.state"></el-input>
                </el-form-item>
                <el-form-item label="维护工程师">
                    <el-input v-model="formLabelAlign.engineer"></el-input>
                </el-form-item>
                <el-form-item label="处理时间">
                    <el-input v-model="formLabelAlign.handleTime"></el-input>
                </el-form-item>
                <el-form-item label="故障描述">
                    <el-input type="textarea" v-model="formLabelAlign.detail"></el-input>
                </el-form-item>
                <el-form-item label="故障图片">
                    <i class="el-icon-picture" style="font-size:90px;"></i>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  created () {
      
 },
 data(){
  
  	return {
       formLabelAlign:{
            repairsTime:"2018-1-2 12:32:11",
            state:"待审核",
            engineer:"赵钱孙李  15652365452",
            handleTime:"",
            detail:"有时候出现一些小bug，请尽快解决",
       }

  	}
  },
  methods:{
      
  }
}
</script>