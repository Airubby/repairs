<template>
    <div>
        <div class="devDetail_top" :class="{'devDetail_top_alarm':formLabelAlign.state==2 || formLabelAlign.state==3}">
            <div class="devDetail_topbox" v-if="formLabelAlign.state==1">
                <i class="el-icon-circle-check-outline"></i>
                <span class="lon_ml20">设备良好</span>
            </div>
            <div class="devDetail_topbox" v-if="formLabelAlign.state==2 || formLabelAlign.state==3">
                <i class="el-icon-circle-close-outline"></i>
                <span class="lon_ml20">设备故障</span>
            </div>
            <div class="devDetail_topinfo">信息更新：{{new Date(formLabelAlign.updateTime).Format('yyyy-MM-dd hh:mm:ss')}}</div>
        </div>
        <el-tabs v-model="activeName" class="devDetail" >
            <el-tab-pane label="基础信息" name="first">
                <div class="content">
                    <el-form label-width="90px" :model="formLabelAlign">
                        <el-form-item label="设备编号：">
                            <el-input v-model="formLabelAlign.code" readonly></el-input>
                        </el-form-item>
                        <el-form-item label="设备类型：">
                            <el-input v-model="formLabelAlign.type" readonly></el-input>
                        </el-form-item>
                        <el-form-item label="制造商：">
                            <el-input v-model="formLabelAlign.productor" readonly></el-input>
                        </el-form-item>
                        <el-form-item label="序列号：">
                            <el-input v-model="formLabelAlign.sno" readonly></el-input>
                        </el-form-item>
                        <el-form-item label="安装地址：">
                            <el-input v-model="formLabelAlign.installAddr" readonly></el-input>
                        </el-form-item>
                    </el-form>
                    <el-button type="primary" @click="baoxiu">一键报修</el-button>
                    <el-button type="primary">在线咨询</el-button>
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
                        <li v-for="item in bxjl">
                            <router-link :to="'/repairsDetail?id='+item.id">
                                <div class="devDetailJL_left fl">
                                    <p>
                                        <span class="lon_mr10">设备类型：{{formLabelAlign.type}}</span>
                                        <span class="lon_mr10">设备编号：{{formLabelAlign.code}}</span>
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
      this.obj = this.$route.query;
      this.getDetail()
      this.getBxjl();
 },
 data(){
  
  	return {
          obj:"",
       activeName: 'first',
       formLabelAlign:{
           code:'',
           type:"",
           productor:"",
           sno:"",
           installAddr:"",
           updateTime:"",
       },
       tableData: [{
            code: '1',
            name: '输入电压',
            value: '227.70V'
          },{
            code: '2',
            name: '输出电压',
            value: '0V'
          }],
          bxjl:[],

  	}
  },
  methods:{
      getDetail:function(){
          this.$api.post('/dev/getById', {id:this.obj.id}, r => {
            console.log(r)
            if(r.success){
                this.formLabelAlign=r.data;
            }else{
                this.$message.warning(r.msg);
            }
        });

      },
      getBxjl:function(){
          this.$api.post('/repairlog/getByDevId', {devId:this.obj.id}, r => {
            console.log(r)
            if(r.success){
                this.bxjl=r.data;
            }else{
                this.$message.warning(r.msg);
            }
        });

      },
      baoxiu:function(){
        this.$router.push({path:"/repairs",query:{code:this.formLabelAlign.code}});
      },
      
  }
}
</script>