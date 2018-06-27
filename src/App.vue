<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
      //this.signin();
  },
  mounted() {

  },
  data() {
      return {
      }
   },
    methods:{ 
      //验证登录
      signin:function(){
          if(sessionStorage.loginInfo==undefined){
              return this.$router.push({ path: '/login'});
          }else{
            this.getComponent(JSON.parse(sessionStorage.loginInfo).id)
          }
      },

   },

}
</script>

<style>
</style>
