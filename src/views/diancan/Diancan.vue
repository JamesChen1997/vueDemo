<template>
  <div id="diancanroot">
    <div id="left">
      <ul >
          <!-- goods   good -->
        <li v-for="(good, index) in goods" :key="index">{{good.name}}</li>
      </ul>
    </div>
    <div id="right">
      <ul v-for="(good, index) in goods" :key="index" >
        <li id="smalltitle">{{good.name}}</li>
        <div id="right1" v-for="(food, index) in good.foods" :key="index" >
          <p id="word">{{food.name}}</p>
          <p id="money">￥{{food.price}}</p>
          <CarButton :food=food />
          <img :src="food.icon" alt="" @click="showbig(food)" />
        </div>
      </ul>
    </div>
    <Car/>
    <Bigfood :food=food ref="big" />
  </div>
</template>
<script>
import CarButton from '../../components/carBtuuon/CarButton'
import { mapState } from "vuex";
import Bscroll from 'better-scroll'
import Bigfood from '../../components/bigFood/Bigfood'
import Car from '../../components/car/Car'
export default {
  data() {
    return {
      food:{}
    };
  },
  mounted() {
    this.$store.dispatch("getGoods");
  },
  computed: {
    ...mapState(["goods"])
  },
  components:{
    CarButton,
    Bigfood,
    Car
  },
  methods: {
    showbig(food){
      this.food=food
      this.$refs.big.back()
    }
  },
};
</script>
<style lang="">
#left {
  position: absolute;
  width: 90px;
  background-color: brown;
}
#left > ul > li {
  height: 50px;
  background-color: #f8f8f8;
  line-height: 50px;
  text-align: center;
}
#right {
  position: absolute;
  width: 280px;
  height: 500px;
  left: 90px;
  overflow: scroll;
}
#diancanroot {
  position: relative;
}
#right1 {
  position: relative;
  width: 275px;
  height: 120px;
  background-color: white;
}
#right1 > img {
  width: 120px;
}
#word {
  position: absolute;
  color: #333333;
  font-weight: bold;
  left: 126px;
}
#money {
  position: absolute;
  color: #ff5339;
  top: 80px;
  left: 126px;
}
#lititle{
    background: fuchsia;
}
#smalltitle{
  background-color: #f8f8f8;
  height: 30px;
  line-height: 30px;
  color:#666666;
  position: relative;
  left:10px
}
</style>