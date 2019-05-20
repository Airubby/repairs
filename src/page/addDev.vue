<template>
    <div>
        <div class="content loginInfo">
            <ul class="lon_pt30">
                <li><input type="text" placeholder="设备制造商" v-model="form_info.productor"></li>
                <li><input type="text" placeholder="产品类型" v-model="form_info.type"></li>
                <li><input type="text" placeholder="产品系列" v-model="form_info.serialName"></li>
                <li><input type="text" placeholder="序列号" v-model="form_info.sno"></li>
                <li><input type="text" placeholder="安装地区" v-model="form_info.installArrdArea" readonly @click="show"></li>
                <li><input type="text" placeholder="详细地址" v-model="form_info.installAddr"></li>
                <li><input type="text" placeholder="备注" v-model="form_info.remark"></li>
            </ul>
            <div class="loginInfo_bottom">
                <div class="button btn" @click="submit">提交</div>
            </div>
        </div>
        <addressSelector :container-height="7" v-on:cancel="cancel" v-on:selectdata="selectdata" class="item" :inertia="30" :speed="1000" :boardShow="addressShow"></addressSelector>
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
        this.form_info.userId=JSON.parse(localStorage.loginInfo).id;
    }
 },
 data(){
  
  	return {
        addressShow:false,  
       form_info:{
           userId:"",
           productor:"",
           type:"",
           serialName:"",
           code:"",
           sno:"",
           installArrdArea:"",
           installAddr:"",
           remark:"",
       }
  	}
  },
  methods:{
      submit:function(){
          this.$api.post('/dev/saveOrUpdate', this.form_info, r => {
            console.log(r)
            if(r.success){
                this.$message.success(r.msg);
                this.$router.push({path:"/myDev"});
            }else{
                this.$message.warning(r.msg);
            }
        });

      },
      selectdata (data) {
        this.form_info.installArrdArea=data.province+data.city+data.county;
        },
        show:function(){
            this.addressShow=true;
        },
        cancel:function(){
            this.addressShow=false;
        }
  },
  components:{addressSelector},
}
</script>