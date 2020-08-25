<template>
  <div>
    <mt-tabbar id="foot" fixed:true >
      <mt-tab-item >
        <div @click="goto('/main')">
        <p class="iconfont icon-U"></p>
        <p >外卖</p>
        </div>
      </mt-tab-item>
      <mt-tab-item >
        <div @click="goto('/search')"> 
        <p class="iconfont icon-sousuo"></p>
        <p >搜索</p>
        </div>
      </mt-tab-item>
      <mt-tab-item>
        <div @click="goto('/order')">
          <p class="iconfont icon-dingdan" ></p>
          <p>订单</p>
        </div>
      </mt-tab-item>
      <mt-tab-item>
        <div @click="goto('/person')">
          <p class="iconfont icon-wode" ></p>
          <p>我的</p>
        </div>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
};
</script>
<style lang="">
#foot{
  height:40px;
  position: fixed;
}
</style>