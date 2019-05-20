<template>
  <div class="container">
    <addressSelector :container-height="7" v-on:cancel="cancel" v-on:selectdata="selectdata" class="item" :inertia="inertia" :speed="speed" :boardShow="addressShow"></addressSelector>
    <div @click="show">我的地址</div>
  </div>
</template>

<script>
import addressSelector from '@/components/addressSelector';
export default {
  name: 'hello',
  data () {
    return {
      title: '请输入您的个人信息',
      inertia:30,
      speed:12,
      addressShow:false,
    }
  },
  components:{addressSelector},
  methods:{
    selectdata (data) {
      console.log(data)
    },
    show:function(){
        console.log(this.addressShow)
        this.addressShow=true;
    },
    cancel:function(){
        this.addressShow=false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .inertia-container{
    height: 1rem;
    display: flex;
  }
  .inertia-title{
    flex: 1;
    font-size: 0.35rem;
  }
  .inertia-control{
    flex: 4;
  }

  .speed-container{
    height: 1rem;
    display: flex;
  }
  .speed-title{
    flex: 1;
    font-size: 0.35rem;
  }
  .speed-control{
    flex: 4;
  }
  .controller-container{
    padding: 80px 20px;
  }
  .container{
    font-size: 0.5rem;
  }
 .item{
   -web-kit-appearance:none;
   -moz-appearance: none;
   border: none;
   outline:medium;
   width: 100%;
   height: 1rem;
   border-bottom: 1px solid gainsboro;
   box-sizing: border-box;
   line-height: 1rem;
   font-size: 0.35rem;
   text-align: left;
   padding-left: 0.5rem;
 }
</style>
