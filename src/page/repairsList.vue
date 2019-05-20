<template>
    <div>
        <div class="content devDetailJL">
            <ul>    
                <li v-for="item in List">
                    <router-link :to="'/repairsDetail?id='+item.id">
                        <div class="devDetailJL_left fl">
                            <p>
                                <span class="lon_mr10">设备类型：{{item.dev.type}}</span>
                                <span class="lon_mr10">设备编号：{{item.dev.code}}</span>
                                <span>报修</span>
                            </p>
                            <p>{{new Date(item.updateTime).Format('yyyy-MM-dd hh:mm:ss')}}</p>
                        </div>
                        <div class="devDetailJL_right fl">
                            <span v-if="item.state==2">报修待受理</span>
                            <span v-if="item.state==3">报修受理中</span>
                            <span v-if="item.state==1">完成</span>
                            <i class="fa fa-angle-right"></i>
                        </div>
                    </router-link>
                </li>
                
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  created () {
      if(!localStorage.loginInfo){
        this.$message.warning("请登录系统");
        this.$router.push({path:'/login'});
        return;
    }else{
        this.obj=JSON.parse(localStorage.loginInfo);
    }
     this.getList()
 },
 data(){
  
  	return {
        obj:'',
       List:[],

  	}
  },
  methods:{
      getList:function(){
          this.$api.post('/repairlog/getByUserId', {userId:this.obj.id}, r => {
            console.log(r)
            if(r.success){
                this.List=r.data;
            }else{
                this.$message.warning(r.msg);
            }
        });

      },
  }
}
</script>