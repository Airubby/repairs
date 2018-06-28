<template>
    <div>
        <div class="devDetail_top repairs_top">
            <div class="devDetail_topbox">
                <i class="fa fa-wrench"></i><span class="lon_ml20">故障报修</span>
            </div>
        </div>
        <el-tabs v-model="activeName" class="devDetail repairs" >
            <el-tab-pane label="设备编号报修" name="first">
                <div class="content">
                    <el-form label-width="96px" :model="formLabelAlign">
                        <el-form-item label="设备编号：">
                            <el-input v-model="formLabelAlign.code"></el-input>
                        </el-form-item>
                        <el-form-item label="故障描述：">
                            <el-input type="textarea" v-model="formLabelAlign.type"></el-input>
                        </el-form-item>
                        <el-form-item label="故障图片：" class="noBorder">
                            <el-upload
                            action
                            list-type="picture-card">
                            <i class="el-icon-plus"></i>
                            </el-upload>
                        </el-form-item>
                    </el-form>
                    <div class="loginInfo_bottom">
                        <router-link to="" class="btn">报    修</router-link>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="序列号报修" name="second">
                <div class="content">
                    <el-form label-width="96px" :model="formLabelAlign">
                        <el-form-item label="设备序列号：">
                            <el-input v-model="formLabelAlign.code"></el-input>
                        </el-form-item>
                        <el-form-item label="设备类型：">
                            <el-input v-model="formLabelAlign.type"></el-input>
                        </el-form-item>
                        <el-form-item label="制造商：">
                            <el-input v-model="formLabelAlign.type"></el-input>
                        </el-form-item>
                        <el-form-item label="安装地址：">
                            <el-input v-model="formLabelAlign.type"></el-input>
                        </el-form-item>
                        <el-form-item label="故障描述：">
                            <el-input type="textarea" v-model="formLabelAlign.type"></el-input>
                        </el-form-item>
                        <el-form-item label="故障图片：" class="noBorder">
                            <el-upload
                            action
                            list-type="picture-card">
                            <i class="el-icon-plus"></i>
                            </el-upload>
                        </el-form-item>
                    </el-form>
                    <div class="loginInfo_bottom">
                        <router-link to="" class="btn">报    修</router-link>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
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
       tableData: [{
            code: '1',
            name: '输入电压',
            value: '227.70V'
          },{
            code: '2',
            name: '输出电压',
            value: '0V'
          }]

  	}
  },
  methods:{
      
  }
}
</script>