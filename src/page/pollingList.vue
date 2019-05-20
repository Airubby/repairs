<template>
    <div>
        <div class="content devDetailJL">
            <ul>    
                <li>
                    <router-link to="/repairsDetail">
                        <div class="devDetailJL_left fl">
                            <p><span class="lon_mr10">UPS</span><span class="lon_mr10">PNM3423423223</span><span>报修</span></p>
                            <p>2018-12-32 21:11:32</p>
                        </div>
                        <div class="devDetailJL_right fl">
                            <span>待审核</span>
                            <i class="fa fa-angle-right"></i>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/repairsDetail">
                        <div class="devDetailJL_left fl">
                            <p><span class="lon_mr10">UPS</span><span class="lon_mr10">PNM3423423223</span><span>报修</span></p>
                            <p>2018-12-32 21:11:32</p>
                        </div>
                        <div class="devDetailJL_right fl">
                            <span>处理中</span>
                            <i class="fa fa-angle-right"></i>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/repairsDetail">
                        <div class="devDetailJL_left fl">
                            <p><span class="lon_mr10">UPS</span><span class="lon_mr10">PNM3423423223</span><span>报修</span></p>
                            <p>2018-12-32 21:11:32</p>
                        </div>
                        <div class="devDetailJL_right fl">
                            <span>完成</span>
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