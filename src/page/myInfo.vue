<template>
    <div>
        <div class="myInfo_top">
            <div class="img"><img src="static/images/icon-touxiang.png"></div>
            <div class="text fl">
                <h2>{{user}}</h2>
                <router-link to="/editMyInfo">编辑</router-link>
            </div>
        </div>
        <div class="content myInfo">
            <ul>
                <li>
                    <router-link to="myDev">
                        <i class="fa fa-folder-o myInfol"></i>
                        <i class="fa fa-angle-right myInfor"></i>
                        <span>我的设备</span>
                        <em class="fr">{{devNum}}台</em>
                    </router-link>
                </li>
                <li>
                    <router-link to="/repairsList">
                        <i class="fa fa-calendar-minus-o myInfol"></i>
                        <i class="fa fa-angle-right myInfor"></i>
                        <span>报修记录</span>
                        <em class="fr">{{repairing}}/{{allCount}}</em>
                    </router-link>
                </li>
                <li>
                    <router-link to="/pollingList">
                        <i class="fa fa-calendar-check-o myInfol"></i>
                        <i class="fa fa-angle-right myInfor"></i>
                        <span>巡检记录</span>
                        <em class="fr">12条</em>
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
    }else{
        this.$api.post('/user/getById', {id:JSON.parse(localStorage.loginInfo).id}, r => {
            if(r.data==null||r.data==""||r.data.length==0){
                this.$message.warning("请登录系统");
                this.$router.push({path:'/login'});
            }
        }); 
        this.user=JSON.parse(localStorage.loginInfo).username
    }
    this.getDev();
    this.getRepairs();
 },
 data(){
  
  	return {
        user:'',
       devNum:0,
       allCount:0,
       repairing:0,
  	}
  },
  methods:{
      getDev:function(){
          this.$api.post('/dev/getByUserId', {userId:JSON.parse(localStorage.loginInfo).id}, r => {
                if(r.success){
                    this.devNum=r.data.length;
                }else{
                    this.$message.warning(r.msg);
                }
            });

      },
      getRepairs:function(){
          this.$api.post('/repairlog/countByUserIdAndState', {userId:JSON.parse(localStorage.loginInfo).id}, r => {
            console.log(r)
            if(r.success){
                this.allCount=r.data.allCount;
                this.repairing=r.data.repairing;
            }else{
                this.$message.warning(r.msg);
            }
        });
      },

  },
  

}
</script>