<template>
    <div>
        <div class="lon_top">
            <router-link to="/myInfo" class="left"><img src="static/images/left.png"></router-link>
            <span>我的设备</span>
            <router-link to="" class="cha"><img src="static/images/cha.png"></router-link>
        </div>
        <div class="content myDev">
            <div class="myDev_search">
                <input type="text"><i class="fa fa-search"></i>
            </div>
            <div class="myDev_add"><router-link href="/addDev">添加新设备</router-link></div>
            <div class="myDev_list">
                <ul>
                    <li>
                        <router-link to="/devDetail">
                            <h2><label>设备编号</label><span>k846827639</span><em class="well">良好</em></h2>
                            <p><label>使用单位</label><span>深圳龙控智能技术有限公司</span></p>
                            <p><label>使用地址</label><span>成都科园南二路2号</span></p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <h2><label>设备编号</label><span>k846827639</span><em class="alarm">故障</em></h2>
                            <p><label>使用单位</label><span>深圳龙控智能技术有限公司</span></p>
                            <p><label>使用地址</label><span>成都科园南二路2号</span></p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <h2><label>设备编号</label><span>k846827639</span><em class="over">过保</em></h2>
                            <p><label>使用单位</label><span>深圳龙控智能技术有限公司</span></p>
                            <p><label>使用地址</label><span>成都科园南二路2号</span></p>
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
      
 },
 data(){
  
  	return {
       
  	}
  },
  methods:{
      
  }
}
</script>