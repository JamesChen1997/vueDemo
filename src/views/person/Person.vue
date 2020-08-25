<template>
  <div id="div">
    <div id="search">
      <span>我的</span>
    </div>
    <div id="info">
      <span
        class="iconfont icon-wode2"
        style="position:absolute;font-size:60px;border-radius:50%;
      left:10px;top:15px;backgroundColor:gray"
      ></span>
      <p id="log1" v-if="!userInfo.phone">{{userInfo.name?userInfo.name:"登陆/注册"}}</p>
      <p id="phone" class="iconfont icon-shouji">{{userInfo.phone || "暂无绑定手机号"}}</p>
      <p id="go" class="iconfont icon-jiantou" @click="tologin(userInfo._id?'/userInfo':'/login')"></p>
      <div id="money">
        <div id="content1">
          <p style="position:absolute;color:orange;font-size:30px;left:15px;top:10px">
            0.00
            <span style="color:black;font-size:15px">元</span>
            <br />
            <span style="color:gray;font-size:17px">我的余额</span>
          </p>
        </div>
        <div id="content2">
          <p style="position:absolute;color:red;font-size:30px;left:15px;top:10px">
            0
            <span style="color:black;font-size:15px">个</span>
            <br />
            <span style="color:gray;font-size:17px">我的优惠</span>
          </p>
        </div>
        <div id="content3">
          <p style="position:absolute;color:cornflowerblue;font-size:30px;left:15px;top:10px">
            0.00
            <span style="color:black;font-size:15px">分</span>
            <br />
            <span style="color:gray;font-size:17px">我的积分</span>
          </p>
        </div>
      </div>
      <mt-button type="danger" size="large" v-show="userInfo._id" @click="quit">退出登陆</mt-button>
    </div>
    <div id="other">
      <div id="other1"></div>
      <div id="other2"></div>
      <div id="other3"></div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { MessageBox } from "mint-ui";
export default {
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    tologin(path) {
      this.$router.replace(path);
    },
    quit() {
      if(window.confirm("靓仔确认要退出吗?")){
          this.$store.dispatch("logOut");
      } 
      
    }
  }
};
</script>
<style lang="">
#div {
  position: relative;
}
#search {
  width: 100%;
  height: 45px;
  background-color: cornflowerblue;
  position: absolute;
}
#search > span {
  position: absolute;
  color: aliceblue;
  font-size: 25px;
  left: 150px;
  top: 7px;
}
#info {
  position: absolute;
  width: 100%;
  height: 90px;
  background-color: cornflowerblue;
  top: 46px;
}
#log1 {
  color: white;
  position: absolute;
  left: 80px;
  top: 23px;
}
#phone {
  position: absolute;
  color: white;
  left: 77px;
  top: 48px;
}
#go {
  position: relative;
  float: right;
  color: white;
  top: 40px;
  right: 10px;
}
#money {
  position: absolute;
  width: 100%;
  height: 90px;
  background-color: white;
  top: 92px;
}
#content1 {
  position: absolute;
  width: 33%;
  background-color: white;
  height: 90px;
}
#content2 {
  position: absolute;
  width: 33%;
  background-color: white;
  height: 90px;
  left: 33%;
}
#content3 {
  position: absolute;
  width: 33%;
  background-color: white;
  height: 90px;
  left: 66%;
}
button {
  position: absolute;
  top: 525px;
}
</style>