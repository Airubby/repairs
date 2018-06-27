<template>
    <div class="loncom_content">
        <el-search-table-pagination 
                type="remote"
                url=""
                list-field="list" 
                total-field="total"
                method='post' 
                :formOptions="table_forms" :show-pagination="true" border :data="table_data" :columns="table_columns" ref="thisRef" >   
                    <div class="form_add">
                        
                    </div>                                                   
                    <el-table-column slot="prepend" type="selection"></el-table-column>
                    <template slot-scope="scope" slot="preview-handle">
                        <div>
                            
                        </div>
                    </template>
                    <div class="loncom_table_btn">
                        
                    </div>
                </el-search-table-pagination>
        <el-button type="primary" @click="test">测试按钮</el-button>

        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
            label="日期"
            width="180">
            <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="姓名"
            width="180">
            <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                <p>姓名: {{ scope.row.name }}</p>
                <p>住址: {{ scope.row.address }}</p>
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
                </el-popover>
            </template>
            </el-table-column>
            <el-table-column label="操作">
            <template slot-scope="scope">
                {{TESTA}}
                <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>


        <div style="height:300px;"></div>
    </div>
</template>


<script>
export default {
    created () {
        
    },
    mounted() {
        //url="/api/itom/api/v1/baseStation/query"
        //  http://120.25.226.251:18089/itom/api/v1/baseStation/query
        console.log(123)
        this.$api.post('/user/getById', {'id':1}, r => {
            
            //this.table_data=r.data.Rows;
        }); 

    },
    data() {
       return {
           TESTA:'123',
           table_data:[
                //  {id:'1',name:'小张',fullName:'admin',contacts:'小明',phoneNo:'15225252525',vaild:true},
           ],
           defaultSort:{
                
           },
            table_forms: {
            inline: true,
            size:'small',
            submitBtnText: '搜索',
            forms: [
                    { prop: 'queryKey1', placeholder:'项目',itemType: 'select',options:[],valueKey:'id',labelKey:'name' },
                    {prop:'queryKey2', placeholder:'设备类型',itemType: 'select',options:[{'id':'',name:''}],valueKey:'id',labelKey:'name'},
                    {prop:'queryKey3',placeholder:'设备编码/名称'},
                    {prop:'queryKey4',placeholder:'省份名'},
                    {prop:'queryKey5',placeholder:'城市名'},
                    {prop:'queryKey6',placeholder:'事件编码/名称'},
                    { prop: 't1-t2', label: '',placeholder:'时间',itemType: 'datetimerange' },
                ]
            },
           table_columns:[
              { prop: 'projectName', label: '项目',minWidth:100},
              { prop: 'moduleName', label: '模块',minWidth:100},
              { prop: 'devName', label: '设备',minWidth:100},
              { prop: 'devTypeName', label: '设备类型',minWidth:90},              
              { prop: 'pointName', label: '属性',minWidth:100},
              { prop: 'name', label: '事件名称',minWidth:110},              
              { prop: 'topLevelName', label: '事件等级',minWidth:60,sortable:true},              
              { prop: 'state', label: '状态',minWidth:60,slotName:'preview-state'},              
              { prop: 'occurTime', label: '触发时间',minWidth:90,slotName:'preview-occurTime'},
              { prop: 'removeTime', label: '解除时间',minWidth:90,slotName:'preview-removeTime'},
              { prop: 'handel', label: '操作',slotName:'preview-handle',width:60},
          ],

          tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
                }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
                }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
                }],

       }
   },
    methods:{
        sortChange:function(){
            console.log("change")
        },
       test:function(){
            console.log(this.template_data)
            console.log(this.template_data1)
       },
    },
    components:{}
}
</script>