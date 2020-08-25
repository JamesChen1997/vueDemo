<template>
  <div>
    <div id="search">
      <span>搜索</span>
    </div>
    <div id="input">
      <input type="text" placeholder="请输入商家或者美食名称" v-model="keyword">
      <button id="button" @click="search">搜索</button>
    </div>
    <br>
    <div id="rearchList" v-for="(item, index) in searchShops" :key="index"> 
         <img :src="imgBaseurl + item.image_path" alt="">
         <p id="listname">{{item.name}}</p>
         <p id="listAddress">地址:{{item.address}}</p>
    </div>
    <br>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data(){
    return {
      keyword:'',
      imgBaseurl:'http://cangdu.org:8001/img/'
    }
  },
  methods: {
    search(){
      //得到搜索关键字
      const keyword = this.keyword.trim()
      //进行搜索
      if(keyword){
        this.$store.dispatch('searchShops',keyword)
      }
    }
  },
  computed: {
    ...mapState(['searchShops'])
  },
};
</script>
<style lang="">
#search {
  width: 100%;
  height: 45px;
  background-color: cornflowerblue;
  position: relative;
}
#search > span {
  position:absolute;
  color: aliceblue;
  font-size: 25px;
  left: 150px;
  top:7px
}
#input{
  position: absolute;
  width: 100%;
  height: 50px;
  background-color:whitesmoke;
}
#input > input{
  position: absolute;
  height: 30px;
  width: 70%;
  top:8px;
  left: 5px;
}
#button{
  float: right;
  position: relative;
  background-color: cornflowerblue;
  height: 30px;
  width: 80px;
  top:7px;
  right: 7px;
  border-radius: 5px;
  color: white;
}
#rearchList{
  position: relative;
  width:100%;
  height:80px;
  top: 40px;
}
#rearchList>img{
  width: 80px;
}
#listname{
  position: absolute;
  top: 8px;
  left:90px
}
#listAddress{
  position: absolute;
  top: 30px;
  left:90px
}
</style>