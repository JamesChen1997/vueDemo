<template>
  <div>
     <div id="search">
      <span>订单列表</span>
    </div>
    <img src="./img/person.png" id="img">
    <p id="p">登陆后可查看外买订单</p>
  </div>
</template>
<script>
export default {};
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
 #img{
  position: relative;
  top: 40px;
  left: 50px;
}
#p{
  position: relative;
  color: gray;
  text-align: center;
  top: 14px;
}
</style>