<template>
    <div>
        <div class="content loginInfo">
            <el-form label-width="96px" :model="form_info" :rules="formRules" ref="formInfo" class="lon_pt20">
                <el-form-item label="姓名：">
                    <el-input v-model="form_info.name" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="手机号码：" prop="phone">
                    <el-input v-model="form_info.phone" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="邮箱：">
                    <el-input v-model="form_info.email" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="单位名称：">
                    <el-input v-model="form_info.unit" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="地区：">
                    <el-input v-model="form_info.contactAddrArea" placeholder="" @click.native="showAddr()"></el-input>
                </el-form-item>
                <el-form-item label="详细地址：">
                    <el-input v-model="form_info.contactAddr" placeholder=""></el-input>
                </el-form-item>
            </el-form>
            <!--<ul class="lon_pt20">
                <li class="myInfoTX"><input type="text" placeholder="头像" readonly><span><img src="static/images/icon-touxiang.png"></span></li>
                <li><input type="text" placeholder="姓名"></li>
                <li><input type="text" placeholder="手机号码"></li>
                <li><input type="text" placeholder="验证码"></li>
                <li><input type="text" placeholder="地址"></li>
                <li><input type="text" placeholder="邮箱"></li>
                <li><input type="text" placeholder="单位名称"></li>
                <li><input type="text" placeholder="实名认证"></li>
                
            </ul>-->
            <div class="loginInfo_bottom">
                <div class="button btn" @click="submitInfo('formInfo')">提交</div>
            </div>
        </div>
        <addressSelector :container-height="7" v-on:cancel="cancel" v-on:selectdata="selectdata" class="item" :inertia="30" :speed="12" :boardShow="addressShow"></addressSelector>
    </div>
</template>

<script>
import addressSelector from '@/components/addressSelector';
export default {
  created () {
      if(!localStorage.loginInfo){
        this.$message.warning("请登录系统");
        this.$router.push({path:'/login'});
        return;
    }else{
        this.form_info.id=JSON.parse(localStorage.loginInfo).id;
        this.getUser();
    }
 },
 data(){
  
  	return {
        addressShow:false,
       form_info:{
           id:"",
            name:'',
            phone:"",
            email:"",
            unit:"",
            contactAddr:"",
            contactAddrArea:"",
       },
       formRules:{
           phone:[
                { required: true, message: '请输入手机号', trigger: 'blur' },
            ],
       }
  	}
  },
  methods:{
      //获取用户详情
      getUser:function(){
        this.$api.post('/user/getById', {id:this.form_info.id}, r => {
            console.log(r)
            if(r.success){
                this.form_info=r.data;
            }else{
                this.$message.warning(r.msg);
            }
        }); 
      },
      //提交
       submitInfo:function(formName){
            this.$refs[formName].validate((valid) => {
                if(valid){
                    this.$api.post('/user/regUser', this.form_info, r => {
                        console.log(r)
                        if(r.success){
                            this.$message.success(r.msg);
                            this.$router.push({path:'/myInfo'});
                        }else{
                            this.$message.warning(r.msg);
                        }
                    }); 
                }
            })
       },
       selectdata (data) {
             this.form_info.contactAddrArea=data.province+data.city+data.county;
        },
        showAddr:function(){
            this.addressShow=true;
        },
        cancel:function(){
            this.addressShow=false;
        }
        
  },
  components:{addressSelector},
}
</script>