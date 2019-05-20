<template>
    <div>
        <div class="content lon_pt20">
            <el-form label-width="90px" :model="formLabelAlign" class="repairsDetail devDetail">
                <el-form-item label="报修时间">
                    <el-input v-model="formLabelAlign.createTime" readonly></el-input>
                </el-form-item>
                <el-form-item label="工单状态">
                    <el-input v-model="formLabelAlign.state" readonly></el-input>
                </el-form-item>
                <el-form-item label="维护工程师">
                    <el-input v-model="formLabelAlign.engineer" readonly></el-input>
                </el-form-item>
                <el-form-item label="处理时间">
                    <el-input v-model="formLabelAlign.updateTime" readonly></el-input>
                </el-form-item>
                <el-form-item label="故障描述">
                    <el-input type="textarea" v-model="formLabelAlign.hitchDesc" readonly></el-input>
                </el-form-item>
                <el-form-item label="故障图片"></el-form-item>
                <div>
                    <span v-for="item in imgArr">
                        <img :src="'/repairlog/getImg?imgName='+item">
                    </span>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  created () {
      this.obj = this.$route.query;
      this.getDetail()
 },
 data(){
  
  	return {
        obj:"",
       formLabelAlign:{
            createTime:"",
            state:"",
            engineer:"赵钱孙李  15652365452",
            updateTime:"",
            hitchDesc:"",
            img:'',
       },
       imgArr:[],

  	}
  },
  methods:{
      getDetail:function(){
          this.$api.post('/repairlog/getById', {id:this.obj.id}, r => {
            console.log(r)
            if(r.success){
                this.formLabelAlign.hitchDesc=r.data.hitchDesc;
                this.formLabelAlign.img=r.data.img;
                this.formLabelAlign.createTime=new Date(r.data.createTime).Format('yyyy-MM-dd hh:mm:ss');
                this.formLabelAlign.state=r.data.state==2?"报修待受理":r.data.state==3?"报修已受理":r.data.state==1?"完成":"弃用";
                this.formLabelAlign.updateTime=new Date(r.data.updateTime).Format('yyyy-MM-dd hh:mm:ss');
                console.log(r.data.img.split(","))
                this.imgArr=r.data.img.split(",");
                console.log(this.imgArr)
            }else{
                this.$message.warning(r.msg);
            }
        });

      },


  }
}
</script>