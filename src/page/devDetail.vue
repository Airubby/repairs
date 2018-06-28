<template>
    <div>
        <div class="devDetail_top">
            <div class="devDetail_topbox">
                <i class="el-icon-circle-check-outline"></i><span class="lon_ml20">设备良好</span>
            </div>
            <div class="devDetail_topinfo">信息更新：2018-12-12 21:22:22</div>
        </div>
        <el-tabs v-model="activeName" class="devDetail" >
            <el-tab-pane label="基础信息" name="first">
                <div class="content">
                    <el-form label-width="90px" :model="formLabelAlign">
                        <el-form-item label="设备编号：">
                            <el-input v-model="formLabelAlign.code"></el-input>
                        </el-form-item>
                        <el-form-item label="设备类型：">
                            <el-input v-model="formLabelAlign.type"></el-input>
                        </el-form-item>
                        <el-form-item label="制造商：">
                            <el-input v-model="formLabelAlign.maker"></el-input>
                        </el-form-item>
                        <el-form-item label="序列号：">
                            <el-input v-model="formLabelAlign.number"></el-input>
                        </el-form-item>
                        <el-form-item label="安装地址：">
                            <el-input v-model="formLabelAlign.addr"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </el-tab-pane>
            <el-tab-pane label="实时数据" name="second">
                <div class="content">
                    <el-table
                        :data="tableData"
                        style="width: 100%">
                        <el-table-column
                            prop="code"
                            label="#"
                            width="80">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="数据名称">
                        </el-table-column>
                        <el-table-column
                            prop="value"
                            label="数据值">
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="报修记录" name="third">
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
            </el-tab-pane>
            <el-tab-pane label="巡检记录" name="fourth">
                <div class="content devDetailJL">
                    <ul>    
                        <li>
                            <router-link to="/repairsDetail">
                                <div class="devDetailJL_left fl">
                                    <p><span class="lon_mr10">UPS</span><span class="lon_mr10">PNM3423423223</span><span>巡检</span></p>
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
                                    <p><span class="lon_mr10">UPS</span><span class="lon_mr10">PNM3423423223</span><span>巡检</span></p>
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
                                    <p><span class="lon_mr10">UPS</span><span class="lon_mr10">PNM3423423223</span><span>巡检</span></p>
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
            </el-tab-pane>
        </el-tabs>
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