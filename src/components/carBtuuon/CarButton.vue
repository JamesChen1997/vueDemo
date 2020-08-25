<template>
  <div>
       <i class="iconfont icon-jianhao" v-show="food.count" @click="updateFoodCount(false)"></i>
       <p id="number" v-show="food.count">{{food.count}}</p>
       <i class="iconfont icon-jiahao" @click="updateFoodCount(true)"></i>
  </div>
</template>
<script>
import PubSub from 'pubsub-js'
export default {
     methods: {
       updateFoodCount(isAdd){
         this.$store.dispatch("updateFoodCount",{isAdd,food:this.food})
       }
    },
    data() {
    return {
      
    }
  },
  props:{
    food:Object,
    Car:Object
  }
};
</script>
<style lang="">
.icon-jiahao {
  position: absolute;
  font-size: 23px;
  color: cornflowerblue;
  top: 85px;
  left: 240px;
}
.icon-jianhao{
  position: absolute;
  font-size: 23px;
  color: cornflowerblue;
   left:195px;
   top:85px
}
#number{
  position: absolute;
  left:220px;
  top:90px
}
</style>