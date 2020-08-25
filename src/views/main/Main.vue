<template>
  <div>
    <div id="head">
      <span class="iconfont icon-sousuo1" @click="tosearch('/search')"></span>
      <span id="center">{{address.name?address.name:'正在获取当前位置...'}}</span>
      <router-link id="log" :to="userInfo._id?'/userInfo':'/login'" v-if="!userInfo._id">登陆|注册</router-link>
      <router-link id="log" :to="userInfo._id?'/userInfo':'/login'" v-else><i class="iconfont icon-geren"></i></router-link>
    </div>
    <mt-swipe :auto="6000" style="height:180px">
      <mt-swipe-item>
        <img src="./imgs/nav/dinner.png" />
        <img src="./imgs/nav/drink.png" />
        <img src="./imgs/nav/ji.png" />
        <img src="./imgs/nav/run.png" />
        <img src="./imgs/nav/mf.png" />
        <img src="./imgs/nav/bz.png" />
        <img src="./imgs/nav/9.jpg" />
        <img src="./imgs/nav/a.png" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./imgs/nav/1.jpg" />
        <img src="./imgs/nav/3.jpg" />
        <img src="./imgs/nav/4.jpg" />
        <img src="./imgs/nav/run.png" />
        <img src="./imgs/nav/mf.png" />
        <img src="./imgs/nav/bz.png" />
        <img src="./imgs/nav/9.jpg" />
        <img src="./imgs/nav/a.png" />
      </mt-swipe-item>
    </mt-swipe>
    <p style="background-color:gainsboro;height:8px"></p>
    <div>
      <p class="iconfont icon-xuanxiang" style="height:10px">附近商家</p>
      <br />
    </div>
    <Shoplist/>
  </div>
</template>
<script>
import {mapState}from 'vuex'
import Shoplist from '../../components/shoplist/Shoplist'
export default {
  components:{
    Shoplist
  },
  computed: {
    ...mapState(['address','userInfo'])
  },
  methods: {
    tosearch(path){
        this.$router.replace(path)
    }
  },
};
</script>
<style lang="">
#head {
  width: 100%;
  height: 45px;
  background-color: cornflowerblue;
  position:relative;
}
.icon-sousuo1 {
  position: absolute;
  color: white;
  font-size: 25px;
  line-height: 45px;
  left: 5px;
}
#log {
  position: absolute;
  float: right;
  color: white;
  line-height: 45px;
  right: 12px;
}
#center {
  position: absolute;
  line-height: 45px;
  color: white;
  left: 50px;
}
mt-swipe-item {
  background-color: white;
  color: gainsboro;
}
#boss1 {
  position: relative;
  width: 100%;
  height: 110px;
  background-color: white;
}
#boss1 > img {
  position: absolute;
  width: 90px;
  top: 7px;
  left: 5px;
}
#boss1 > span {
  position: absolute;
  background-color: yellow;
  left: 100px;
  top: 10px;
  font-size: 13px;
}
#boss1 > strong {
  position: absolute;
  color: black;
  left: 140px;
  top: 7px;
  font-weight: bold;
}
#wrap {
  height: 100%;
}
</style>