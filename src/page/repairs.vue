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
                    <el-form label-width="96px" :model="form_info" :rules="formRules" ref="formInfo">
                        <el-form-item label="设备编号：" prop="devCode">
                            <el-input v-model="form_info.devCode"></el-input>
                        </el-form-item>
                        <el-form-item label="故障描述：">
                            <el-input type="textarea" v-model="form_info.hitchDesc"></el-input>
                        </el-form-item>
                        <el-form-item label="故障图片：" class="noBorder">
                            <span class="fr">{{form_info.imgNumber}}/6</span>
                        </el-form-item>
                        <div>
                            <el-upload
                            action="/repairlog/setRepairImg"
                            :limit="6"
                            ref="upload"
                            :data="formBackInfo"
                            name="fileName"
                            :headers="config"
                            :auto-upload="false"
                            :on-success="onSuccess"
                            :on-error="onError"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove"
                            :on-change="onchange"
                            :on-exceed="onexceed"
                            :file-list="fileList"
                            list-type="picture-card">
                            <i class="el-icon-plus"></i>
                            </el-upload>
                            <el-dialog :visible.sync="dialogVisible" class="img_dialog">
                            <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog>
                        </div>
                    </el-form>
                    <div class="loginInfo_bottom">
                        <div class="button btn" @click="repairs('formInfo')">报    修</div>
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
                            <el-input v-model="formLabelAlign.maker"></el-input>
                        </el-form-item>
                        <el-form-item label="安装地址：">
                            <el-input v-model="formLabelAlign.addr"></el-input>
                        </el-form-item>
                        <el-form-item label="故障描述：">
                            <el-input type="textarea" v-model="formLabelAlign.detail"></el-input>
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
                        <div class="button btn">报    修</div>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
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

    this.form_info.devCode = this.$route.query.code;

 },
 data(){
  
  	return {
       activeName: 'first',
       formLabelAlign:{
           devCode:'',
           hitchDesc:"",
       },
       form_info:{
           devCode:'',
           hitchDesc:"",
           imgNumber:0,
       },
       formRules:{
           devCode:[
                { required: true, message: '请输入设备编号', trigger: 'blur' },
            ],
       },
       tableData: [{
            code: '1',
            name: '输入电压',
            value: '227.70V'
          },{
            code: '2',
            name: '输出电压',
            value: '0V'
          }],

        dialogImageUrl: '',
        dialogVisible: false,
        fileList:[],
        formBackInfo:{
            repairId:'',
        },
        config:{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        }

  	}
  },
  methods:{
      repairs:function(formName){
          this.$refs[formName].validate((valid) => {
            if(valid){
                this.$api.post('/repairlog/saveRepairNotImg', this.form_info, r => {
                    console.log(r)
                    if(r.success){
                        this.formBackInfo.repairId=r.data.id;
                        if(this.fileList.length>0){
                            this.$refs.upload.submit();
                        }else{
                            this.form_info.devCode="";
                            this.form_info.hitchDesc="";
                            this.$message.success(r.msg);
                        }
                        
                    }else{
                        this.$message.warning(r.msg);
                    }
                }); 
            }
        })
      },
      onSuccess:function(response, file, fileList){
        console.log(response)
        if(response.success){
            this.$message.success(response.msg);
            //this.$refs.formLabelAlign.resetFields();
            this.form_info.devCode="";
            this.form_info.hitchDesc="";
            this.$refs.upload.clearFiles(); //清空上传列表
            
        }
      },
      onError:function(err, file, fileList){
        console.log(response)
      },
      onchange:function(file,fileList){
          this.form_info.imgNumber=fileList.length;
          this.fileList=fileList;
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
          console.log(this.fileList)
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      onexceed:function(){
        this.$message.warning("文件上传已达到上限");
      },
      
    
  },
  
}
</script>