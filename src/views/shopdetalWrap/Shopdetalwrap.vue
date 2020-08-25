<template>
  <div id="shoproot">
    <div id="jgbhead">
      <i class="iconfont icon-jiantouzuo" @click="back('/main')"></i>
    </div>
    <div id="shopname">
      <p id="p1">友味餐厅(河工店)</p>
      <p id="p2">评价5&nbsp;&nbsp;&nbsp;月售7&nbsp;&nbsp;&nbsp;商家配送约54分钟</p>
      <img src="./img/hy.png" alt="" id="hy">
      <img src="./img/20-4.png" alt="" id="hd1">
      <img src="./img/30-6.png" alt="" id="hd2">
      <p id="two">2个优惠</p>
      <i class="iconfont icon-jiantouarrow486" id="down"></i>
    </div>
    <img src="./img/ywct.jpeg" alt="鸡公煲" id="img" />
    <div id="nav">
      <router-link to="/shopdetalWrap/diancan" id="nav1"><p  @click="nav1" ref="diancn">点餐</p></router-link>
      <router-link to="/shopdetalWrap/pingjia" id="nav2"><p  @click="nav2" ref="pingjia">评价</p></router-link>
      <router-link to="/shopdetalWrap/shangjia" id="nav3"><p @click="nav3" ref="shangjia">商家</p></router-link>
      <keep-alive>
        <router-view id="nav4"></router-view>
      </keep-alive>
    </div>
    
  </div>
</template>
<script>
export default {
  data(){
    return{
      clickoRno:false,
      clickoRno2:2
    }
  },
  methods: {
    nav1(){//diancn
        this.$refs.diancn.style.color='cornflowerblue'
        this.$refs.pingjia.style.color=''
        this.$refs.shangjia.style.color=''
    },
    nav2(){//pingjia
        this.$refs.diancn.style.color=''
        this.$refs.pingjia.style.color='cornflowerblue'
        this.$refs.shangjia.style.color=''
    },
    nav3(){//shangjia
        this.$refs.diancn.style.color=''
        this.$refs.pingjia.style.color=''
        this.$refs.shangjia.style.color='cornflowerblue'
    },
    back(path){
      this.$router.push(path)
    }
  },
};
</script>
<style lang="">
#jgbhead {
  position: absolute;
  width: 100%;
  height: 100px;
  background-color: #b16972;
}
#shopname {
  position: absolute;
  width: 100%;
  height: 130px;
  background-color:white;
  top: 100px;
}
#img {
  width: 70px;
  position: absolute;
  top: 40px;
  left: 37%;
}
#shoproot {
  position: relative;
}
#p1{
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  top: 15px;
  left: 80px;
}
#nav{
  position: absolute;
  top:230px
}
#p2{
  font-size: 10px;
  position: absolute;
  top: 45px;
  left: 100px;
  color: #666666;
}
#hy{
   width:125px;
   position: absolute;
   top:65px;
   left:110px
}
#hd1{
  position: absolute;
  width:35px;
  top:100px;
  left:40px
}
#hd2{
  position: absolute;
  width:35px;
  top:100px;
  left:80px
}
#two{
  position: relative;
  font-size: 10px;
  color: #666666;
  top:100px;
  float: right;
  top:100px;
  right:95px;
}
#down{
  position: relative;
  font-size: 10px;
  color: #666666;
  top:100px;
  float: right;
  top:100px;
  right:45px;
}
#nav1{
  float: left;
  position: relative;
  left:90px
}
#nav2{
  float: left;
  position: relative;
   left:110px
}
#nav3{
  float: left;
  position: relative;
   left:140px
}
#nav4{
    position: relative;
    top:20px
} 
.icon-jiantouzuo{
  position: absolute;
  font-size: 25px;
  top: 5px;
  left:5px
}
</style>
