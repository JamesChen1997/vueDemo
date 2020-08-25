<template>
  <div>
    <div id="section">
      <input type="text" name id="input1" placeholder="输入手机号" v-model="phone" />
      <button
        id="bt1"
        :disabled="!checkphone"
        :class="{rightphone:checkphone}"
        @click="getCode"
      >{{computedTime ? `已发送(${computedTime}s)`:'获取验证码'}}</button>
      <div id="son1">
        <input type="text" name id placeholder="输入验证码" v-model="code" />
      </div>
      <button id="bt2" @click="logTest">登陆</button>
    </div>
  </div>
</template>
<script>
import { reqsendDXCODE, reqSMSLOG } from "../../api";
export default {
  data() {
    return {
      phone: "", //手机号
      computedTime: 0,
      code: "" //验证码
    };
  },
  methods: {
    toMain(path) {
      this.$router.replace(path);
    },
    async getCode() {
      if (!this.computedTime) {
        this.computedTime = 30;
        //启动倒计时
        this.number = setInterval(() => {
          if (this.computedTime > 0) {
            this.computedTime--;
          } else {
            clearInterval(this.number);
          }
        }, 1000);
        //发送ajax请求 发送验证码
        const result = await reqsendDXCODE(this.phone);
        //如果发送失败
        if (result.code == 1) {
          //提示信息
          alert(result.msg);
          //停止倒计时
          if (this.computedTime) {
            this.computedTime = 0;
            clearInterval(this.number);
          }
        }
      }
    },
    async logTest() {
      const { phone, code } = this;
      if (!phone) {
        alert("手机号不能为空");
        return;
      } else if (!code) {
        alert("验证码不能为空");
        return;
      }
      //发送短信登陆请求
      const result = await reqSMSLOG(phone,code);
      if (result.code == 0) {
        //成功
        const user = result.data;
        //把user 保存到 vuex 的 state中  以后在页面中显示
        this.$store.dispatch('recoredUserInfo',user)
        //页面跳转到 个人中心
        this.$router.replace("/person");
      } else {
        //失败
        alert(result.msg);
      }
    }
  },
  computed: {
    checkphone() {
      return /^1\d{10}$/.test(this.phone);
    }
  }
};
</script>
<style lang="">
#section {
  position: relative;
  top: 30px;
}
#input1 {
  position: absolute;
  background: transparent;
  height: 30px;
}
#bt1 {
  position: absolute;
  width: 100px;
  height: 30px;
  left: 140px;
}
#son1 {
  position: absolute;
  top: 40px;
}
#bt2 {
  position: absolute;
  top: 80px;
}
.rightphone {
  color: black;
}
</style>