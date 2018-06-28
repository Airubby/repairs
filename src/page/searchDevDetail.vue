<template>
    <div>
        <div class="devDetail_top">
            <div class="devDetail_topbox">
                <i class="el-icon-circle-check-outline"></i>
            </div>
            <div class="devDetail_topbox"><span class="searchSpan">运行正常</span></div>
            <div class="devDetail_topinfo">信息更新：2018-12-12 21:22:22</div>
        </div>
        <div class="content devDetail lon_pt30">
            <el-form label-width="90px" :model="formLabelAlign">
                <el-form-item label="设备编号：" class="devDetailItem">
                    <el-input v-model="formLabelAlign.code"></el-input><router-link to="/repairs" class="fa fa-wrench"><em>报修</em></router-link>
                </el-form-item>
                <el-form-item label="设备类型：">
                    <el-input v-model="formLabelAlign.type"></el-input>
                </el-form-item>
                <el-form-item label="制造商：">
                    <el-input v-model="formLabelAlign.maker"></el-input>
                </el-form-item>
                <el-form-item label="序列号：">
                    <el-input v-model="formLabelAlign.number"></el-input>
                </el-form-item>
                <el-form-item label="安装地址：">
                    <el-input v-model="formLabelAlign.addr"></el-input>
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
       activeName: 'first',
       formLabelAlign:{
           code:'k123123',
           type:"UPS",
           maker:"UPS制造",
           number:"3345465456523",
           addr:"科园南二路2号"
       },

  	}
  },
  methods:{
      
  }
}
</script>