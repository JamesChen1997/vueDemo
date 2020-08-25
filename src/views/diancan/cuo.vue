<template>
  <div id="diancanroot">
    <p id="title">主餐</p>
    <br />
    <div id="left">
      <li>
        <a href="#title">主餐</a>
      </li>
      <li>
        <a href="#zpb">招牌堡</a>
      </li>
      <li>
        <a href="#tswyq">特色五元区</a>
      </li>
      <li>三元区</li>
      <li>超值十元区</li>
      <li>肉类</li>
      <li>海鲜</li>
      <li>蔬菜</li>
    </div>
    <div id="right">
      <div id="right1">
        <p id="word">鸡公煲小煲</p> 
        <p id="money">￥15</p>
        <i class="iconfont icon-jianhao" v-show="number" @click="subfood"></i>
        <p id="number" v-show="number">{{number}}</p>
        <i class="iconfont icon-jiahao" @click="addfood"></i>
        <img src="./img/jgbxb.jpeg" alt="鸡公煲小煲" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div id="right1">
        <p id="word">香辣小鱼堡</p>
        <p id="money">￥15</p>
        <i class="iconfont icon-jiahao"></i>
        <img src="./img/xlxyb.jpeg" alt="鸡公煲小煲" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div id="right1">
        <p id="word">鸡公煲中煲</p>
        <p id="money">￥15</p>
        <i class="iconfont icon-jiahao"></i>
        <img src="./img/jgbzb.jpeg" alt="鸡公煲小煲" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p id="zpb">招牌堡</p>
      <br />
      <div id="right1">
        <p id="word">鲜虾小堡</p>
        <p id="money">￥15</p>
        <i class="iconfont icon-jiahao"></i>
        <img src="./img/xxxb.jpeg" alt="鸡公煲小煲" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div id="right1">
        <p id="word">鸡公煲小煲</p>
        <p id="money">￥15</p>
        <i class="iconfont icon-jiahao"></i>
        <img src="./img/xxzb.png" alt="鸡公煲小煲" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <P id="tswyq">特色五元区</P>
      <div id="right1">
        <p id="word">米饭</p>
        <p id="money">￥15</p>
        <i class="iconfont icon-jiahao"></i>
        <img src="./img/rice.jpeg" alt="鸡公煲小煲" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div id="right1">
        <p id="word">澳洲小肥牛</p>
        <p id="money">￥15</p>
        <i class="iconfont icon-jiahao"></i>
        <img src="./img/beef.jpeg" alt="鸡公煲小煲" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div id="right1">
        <p id="word">狮子头</p>
        <p id="money">￥15</p>
        <i class="iconfont icon-jiahao"></i>
        <img src="./img/szt.jpeg" alt="鸡公煲小煲" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      number:0
    }
  },
  methods: {
    addfood(){
      this.number=this.number+1
    },
    subfood(){
     this.number=this.number-1
    }
  },
};
</script>
<style>
#diancanroot {
  position: relative;
}
#left {
  position: absolute;
  width: 100px;
  height: 615px;
}
#left > li {
  position: relative;
  height: 70px;
  line-height: 70px;
  left: 5px;
  background-color: #f8f8f8;
}
#right {
  position: absolute;
  width: 275px;
  height: 600px;
  background-color: white;
  left: 101px;
  overflow: scroll;
}
#right1 {
  position: absolute;
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
  top: 105px;
  left: 126px;
}
.icon-jiahao {
  position: absolute;
  font-size: 23px;
  color: cornflowerblue;
  top: 95px;
  left: 240px;
}
.icon-jianhao{
  position: absolute;
  font-size: 23px;
  color: cornflowerblue;
   left:195px;
   top:95px
}
#title {
  position: relative;
  left: 100px;
  color: #666666;
}
#zpb {
  position: relative;
  color: #666666;
}
#tswyq {
  position: relative;
  color: #666666;
}
#number{
  position: absolute;
  left:220px;
  top:100px
}
</style>