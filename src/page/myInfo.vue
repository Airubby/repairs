<template>
    <div>
        <div class="myInfo_top">
            <div class="img"><img src="static/images/icon-touxiang.png"></div>
            <div class="text fl">
                <h2>稻草</h2>
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
                        <em class="fr">23台</em>
                    </router-link>
                </li>
                <li>
                    <router-link to="/repairsList">
                        <i class="fa fa-calendar-minus-o myInfol"></i>
                        <i class="fa fa-angle-right myInfor"></i>
                        <span>报修记录</span>
                        <em class="fr">12/23</em>
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
      
 },
 data(){
  
  	return {
       
  	}
  },
  methods:{
      
  }
}
</script>