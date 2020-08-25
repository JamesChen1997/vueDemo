<template>
  <div id="section2">
    <input type="text" name id="input2" placeholder="手机/邮箱/用户名" v-model="name" />
    <br>
    <br>
    <br>
    <div id="son2">
      <input type="password" name id placeholder="密码" v-model="pwd" />
      <br>
      <br>
      <input type="text" name id placeholder="验证码"  v-model="checkCode"/>
      <img src="http://localhost:4000/captcha" @click="getnewCode" ref="pictureCheckCode">
    </div>
    <button id="btn2" @click="check">登陆/注册</button>
  </div>
</template>
<script>
import {reqlogPWD} from '../../api'
export default {
  data() {
    return {
      abc: "abc",
      name:'',//用户名
      pwd:'', //密码
      checkCode:''//验证码

    };
  },
  methods: {
    toMain(path) {
      this.$router.replace(path);
    },
    async check(){
      const {name,pwd,checkCode} = this
      if(!name){
        alert("用户名不能为空")
      }else if(!pwd){
        alert("密码不能为空")
      }else if(!checkCode){
            alert("验证码不能为空")
      }
      //发送用户名登陆请求
      const result = await reqlogPWD(name,pwd,checkCode)
      if(result.code==0){  //成功
            const user = result.data
            console.log(user)
            //把user 保存到 vuex 的 state中  以后在页面中显示
            this.$store.dispatch('recoredUserInfo',user)
            //页面跳转到 个人中心
            this.$router.replace('/person')
      }else{//失败
             //错误提示信息
            alert(result.msg)
            //更新新的图片验证码
            this.getnewCode()
      }
    },
    //获取新的一次性验证码
    getnewCode(){
      //这个this是当前组件对象
        this.$refs.pictureCheckCode.src='http://localhost:4000/captcha?time='+Date.now()
    }
  }
};
</script>
<style lang="">
#aaaaaaaa {
  background-color: yellow;
}
mt-switch {
  width: 30px;
}
#section2 {
  position: relative;
  top: 30px;
}
#input2 {
  position: absolute;
  background: transparent;
  height: 50px;
}
#son2 {
  position: absolute;
  top: 40px;
}
#son2>img{
  position: absolute;
  width:100px;
}
#btn2{
  position: absolute;
  top:120px
}
</style>