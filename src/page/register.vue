<template>
    <div>
        <div class="content loginInfo">
            <h2>账号注册</h2>
            <el-form label-width="96px" :model="form_info" :rules="formRules" ref="formInfo" class="lon_pt20">
                <el-form-item label="手机号码：" prop="phone">
                    <el-input v-model="form_info.phone" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input v-model="form_info.password" placeholder="" type="password"></el-input>
                </el-form-item>
                <el-form-item label="联系人员：">
                    <el-input v-model="form_info.contactor" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="单位信息：">
                    <el-input v-model="form_info.unit" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="地区：">
                    <el-input v-model="form_info.contactAddrArea" placeholder="" @click.native="showAddr()"></el-input>
                </el-form-item>
                <el-form-item label="详细地址：">
                    <el-input v-model="form_info.contactAddr" placeholder=""></el-input>
                </el-form-item>
            </el-form>
            <!--
            <ul>
                <li><input type="text" placeholder="手机号" v-model="loginInfo.phone"></li>
                <li><input type="password" placeholder="密码" v-model="loginInfo.password"></li>
                <li><input type="text" placeholder="联系人员" v-model="loginInfo.contactor"></li>
                <li><input type="text" placeholder="单位信息" v-model="loginInfo.unit"></li>
                <li><input type="text" placeholder="联系地址" v-model="loginInfo.contactAddr"></li>
            </ul>
            -->
            <div class="loginInfo_bottom">
                <div class="button register" @click="register('formInfo')">注册</div>
                <span>已查看并同意注册条款</span>
            </div>
        </div>
        <addressSelector :container-height="7" v-on:cancel="cancel" v-on:selectdata="selectdata" class="item" :inertia="30" :speed="12" :boardShow="addressShow"></addressSelector>
    </div>
</template>

<script>
import addressSelector from '@/components/addressSelector';
export default {
  created () {
      
 },
 data(){
  
  	return {
          addressShow:false,
       form_info:{
           phone:'',
           password:'',
           contactor:'',
           unit:'',
           contactAddrArea:'',
           contactAddr:'',
       },
       formRules:{
           phone:[
                { required: true, message: '请输入手机号', trigger: 'blur' },
            ],
            password:[
                { required: true, message: '请输入密码', trigger: 'blur' },
            ],
       }
  	}
  },
  methods:{
      register:function(formName){
          this.$refs[formName].validate((valid) => {
                if(valid){
                    this.form_info.password= b64_md5(this.form_info.password);
                    this.$api.post('/user/regUser', this.form_info, r => {
                        console.log(r)
                        if(r.success){
                            this.$message.success("注册成功，欢迎使用报修系统");
                            var loginInfo={};
                            if(localStorage.loginInfo){
                                loginInfo=JSON.parse(localStorage.loginInfo);
                            }
                            loginInfo.username=this.form_info.phone;
                            loginInfo.id=r.data.id;
                            localStorage.loginInfo = JSON.stringify(loginInfo);
                            this.$router.push({path:"/myInfo"});
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