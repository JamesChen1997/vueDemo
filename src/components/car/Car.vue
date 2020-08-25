<template>
  <div>
    <div id="shopcar"></div>
    <div class="car" :class="{radio:totalCount}">
      <p class="iconfont icon-gouwuche" :class="{carsClass:totalCount}" @click="showdetail"></p>
      <span class="tips" :class="{tipsclass:totalPrice}">{{totalPrice?'￥'+totalPrice:'未选购商品'}}</span>
      <span id="send" :class="{gopaymoney:totalPrice>minprice}">{{payText}}</span>
      <div id="redpoint" v-show="totalCount">{{totalCount}}</div>
    </div>
    <div id="clickCar" v-show="listShow">
      <div id="content">
        <li id="choosed">
          <span id="yixuan">已选商品</span>
          <span id="qk" @click="handelClear">清空</span>
        </li>
        <div id="choosed_list" v-for="(food, index) in cartFoods" :key="index">
          <li id="foodName">{{food.name}}&nbsp;&nbsp;￥{{food.price}}</li> 
           
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import CarButton from "../carBtuuon/CarButton";
export default {
  computed: {
    ...mapState(["cartFoods"]),
    ...mapGetters(["totalCount", "totalPrice"]),
    payText() {
      const { minprice, totalPrice, totalCount } = this;
      if (totalCount == 0) {
        return `￥${minprice}元起送`;
      } else if (totalPrice < minprice) {
        return `还差￥${minprice - totalPrice}元起送`;
      } else {
        return `去结算`;
      }
    },
    listShow(){
      if(this.totalCount==0){
        return false
      }else{
        return this.show
      }
    }
  },
  data() {
    return {
      minprice: 15,
      show: false
    };
  },
  methods: {
    handelClear() {
      this.$store.state.cartFoods.forEach(food => {
        food.count = 0;
      });
      this.$store.state.cartFoods = [];
    },
    showdetail(){
      this.show=!this.show
    }
  },
  components: {
    CarButton
  }
};
</script>
<style lang="">
#shopcar {
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: #505051;
  bottom: 0;
  z-index: 1;
}
.car {
  position: fixed;
  width: 50px;
  height: 50px;
  background-color: #363636;
  border-radius: 50%;
  bottom: 25px;
  left: 13px;
  z-index: 2;
}
.tips {
  position: absolute;
  left: 60px;
  width: 80px;
  top: 30px;
  color: #5f5f63;
}
#send {
  position: absolute;
  height: 60px;
  line-height: 60px;
  width: 230px;
  left: 230px;
  top: 15px;
  color: white;
}
.icon-gouwuche {
  position: absolute;
  font-size: 30px;
  color: #5f5f63;
  top: 12px;
  left: 7px;
}
#redpoint {
  background-color: red;
  width: 20px;
  height: 15px;
  border-radius: 40%;
  color: white;
  font-size: 13px;
  position: fixed;
  left: 50px;
  text-align: center;
}
.carsClass {
  color: white;
}
.gopaymoney {
  background-color: cornflowerblue;
}
.tipsclass {
  color: white;
}
.radio {
  background-color: cornflowerblue;
}
#clickCar {
  width: 100%;
  height: 150px;
  background-color:whitesmoke;
  position: fixed;
  z-index: 10;
  bottom: 80px;
  overflow: scroll;
}
#choosed {
  position: absolute;
  background-color: cornflowerblue;
  height: 30px;
  line-height: 30px;
  width: 100%;
}
#content {
  position: absolute;
  height: 40px;
  width: 100%;
}
#yixuan {
  height: 40px;
  line-height: 40px;
}
#qk {
  position: relative;
  left: 250px;
}
#choosed_list {
  position: relative;
  width: 50%;
  height: 50px;
  top: 42px;
}
#foodName {
  position: relative;
  height: 50px;
  line-height: 40px;
}
/* #CarButton{
    position: fixed;
    left:50px;
    top:400px
} */
</style>