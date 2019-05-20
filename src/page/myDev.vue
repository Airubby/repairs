<template>
    <div>
        <div class="content myDev">
            <div class="myDev_search">
                <input type="text"><i class="fa fa-search"></i>
            </div>
            <div class="myDev_add"><router-link to="/addDev">添加新设备</router-link></div>
            <div class="myDev_list">
                <ul>
                    <li v-for="item in dataList">
                        <router-link :to="'/devDetail?id='+item.id">
                            <h2>
                                <label>设备编号</label><span>{{item.code}}</span>
                                <em class="well" v-if="item.state==1">良好</em>
                                <em class="alarm" v-if="item.state==2">报修待受理</em>
                                <em class="alarm" v-if="item.state==3">报修受理中</em>
                            </h2>
                            <p><label>制造单位</label><span>{{item.productor}}</span></p>
                            <p><label>安装地址</label><span>{{item.installArrdArea}}{{item.installAddr}}</span></p>
                        </router-link>
                    </li>
                </ul>
            </div>
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
        this.getDev();
    }
 },
 data(){
  	return {
          dataList:[],
  	}
  },
  methods:{
      getDev:function(){
          console.log(localStorage.loginInfo)
          console.log(JSON.parse(localStorage.loginInfo).id)
          this.$api.post('/dev/getByUserId', {userId:JSON.parse(localStorage.loginInfo).id}, r => {
            console.log(r)
            if(r.success){
                this.dataList=r.data;
            }else{
                this.$message.warning(r.msg);
            }
        });

      }
  }
}
</script>