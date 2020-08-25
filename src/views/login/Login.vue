<template>
  <div id="loginhead">
      <span class="iconfont icon-jiantouzuo" style="font-size:20px;position:absolute;left:10px;top:8px" @click="back('/person')"></span>
      <div id="logintitle">XX外卖</div>
      <div id="routelink">
            <router-link to="/login/dx" id="tag1"><span :class="{on:logWay}" @click="logWay=true">短信登陆</span></router-link>
            <router-link to="/login/pwd" id="tag2"> <span :class="{on:!logWay}" @click="logWay=false">密码登陆</span></router-link>
            <router-view></router-view>
      </div>

  </div>
</template>
<script>
import Dx from '../dx/Dx'
import Pwd from '../pwd/Pwd'
export default {
    data(){
        return{
            logWay:true   //为true 时 是短信为false时是密码登陆
        }
    },
   methods:{
       back(path){
           this.$router.replace(path)
       },
       changecolor(){
           this.adf={
               color:'red'
           }
       }
   }
};
</script>
<style lang="">
    #loginhead{
        width:300px;
        height:300px;
        position: relative;
    }
    #logintitle{
        position:absolute;
        height: 90px;
        color: cornflowerblue;
        font-size: 40px;
        font-weight: bold;
        top: 70px;
        left: 110px;
    }
    #routelink{
        position: absolute;
        top: 200px;
        left: 100px;
    }
    #dxlog{
        position: absolute;
    }
    #mmlog{
        position: absolute;
        left: 80px;
    }
    .on{
        color:cornflowerblue;
        font-size: 24px;
    
    }
</style>