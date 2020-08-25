<template>
  <div>
    <div id="wrap">
      <div id="boss1" @click="toShopdetail('/shopdetalWrap')">
        <img src="./imgs/boss/ywct.jpeg" alt />
        <span>品牌</span>
        <strong>友味餐厅(河工店)</strong>
        <img
          src="./imgs/stars/star48_on@3x.png"
          style="position:absolute;width:13px;left:105px;top:40px"
        />
        <img
          src="./imgs/stars/star48_on@3x.png"
          style="position:absolute;width:13px;left:120px;top:40px"
        />
        <img
          src="./imgs/stars/star48_on@3x.png"
          style="position:absolute;width:13px;left:135px;top:40px"
        />
        <img
          src="./imgs/stars/star48_on@3x.png"
          style="position:absolute;width:13px;left:150px;top:40px"
        />
        <img
          src="./imgs/stars/star36_off@3x.png"
          style="position:absolute;width:13px;left:165px;top:40px"
        />
        <p style="position:absolute;width:13px;left:182px;top:40px;color:orange;font-size:12px">4.0</p>
        <p style="position:absolute;left:205px;top:40px;font-size:12px">月售101单</p>
        <p style="position:absolute;font-size:10px;top:70px;left:105px">￥20起送/配送费约5￥</p>
        <p
          style="position:absolute;background-color:cornflowerblue;color:white;font-size:12px;left:320px;top:40px"
        >蜂鸟专送</p>
      </div>
      <div id="boss1">
        <img src="./imgs/boss/ps.png" alt />
        <span>品牌</span>
        <strong>约翰披萨</strong>
        <img
          src="./imgs/stars/star48_on@3x.png"
          style="position:absolute;width:13px;left:105px;top:40px"
        />
        <img
          src="./imgs/stars/star48_on@3x.png"
          style="position:absolute;width:13px;left:120px;top:40px"
        />
        <img
          src="./imgs/stars/star48_on@3x.png"
          style="position:absolute;width:13px;left:135px;top:40px"
        />
        <img
          src="./imgs/stars/star48_on@3x.png"
          style="position:absolute;width:13px;left:150px;top:40px"
        />
        <img
          src="./imgs/stars/star36_off@3x.png"
          style="position:absolute;width:13px;left:165px;top:40px"
        />
        <p style="position:absolute;width:13px;left:182px;top:40px;color:orange;font-size:12px">4.0</p>
        <p style="position:absolute;left:205px;top:40px;font-size:12px">月售101单</p>
        <p style="position:absolute;font-size:10px;top:70px;left:105px">￥20起送/配送费约5￥</p>
        <p
          style="position:absolute;background-color:cornflowerblue;color:white;font-size:12px;left:320px;top:40px"
        >蜂鸟专送</p>
      </div>
      <div id="boss1">
        <img src="./imgs/boss/snow.png" alt />
        <span>品牌</span>
        <strong>蜜雪冰城</strong>
        <img
          src="./imgs/stars/star48_on@3x.png"
          style="position:absolute;width:13px;left:105px;top:40px"
        />
        <img
          src="./imgs/stars/star48_on@3x.png"
          style="position:absolute;width:13px;left:120px;top:40px"
        />
        <img
          src="./imgs/stars/star48_on@3x.png"
          style="position:absolute;width:13px;left:135px;top:40px"
        />
        <img
          src="./imgs/stars/star48_on@3x.png"
          style="position:absolute;width:13px;left:150px;top:40px"
        />
        <img
          src="./imgs/stars/star36_off@3x.png"
          style="position:absolute;width:13px;left:165px;top:40px"
        />
        <p style="position:absolute;width:13px;left:182px;top:40px;color:orange;font-size:12px">4.0</p>
        <p style="position:absolute;left:205px;top:40px;font-size:12px">月售101单</p>
        <p style="position:absolute;font-size:10px;top:70px;left:105px">￥20起送/配送费约5￥</p>
        <p
          style="position:absolute;background-color:cornflowerblue;color:white;font-size:12px;left:320px;top:40px"
        >蜂鸟专送</p>
      </div>
      <div id="boss1">
        <img src="./imgs/boss/sk.png" alt />
        <span>品牌</span>
        <strong>烧烤</strong>
        <img
          src="./imgs/stars/star48_on@3x.png"
          style="position:absolute;width:13px;left:105px;top:40px"
        />
        <img
          src="./imgs/stars/star48_on@3x.png"
          style="position:absolute;width:13px;left:120px;top:40px"
        />
        <img
          src="./imgs/stars/star48_on@3x.png"
          style="position:absolute;width:13px;left:135px;top:40px"
        />
        <img
          src="./imgs/stars/star48_on@3x.png"
          style="position:absolute;width:13px;left:150px;top:40px"
        />
        <img
          src="./imgs/stars/star36_off@3x.png"
          style="position:absolute;width:13px;left:165px;top:40px"
        />
        <p style="position:absolute;width:13px;left:182px;top:40px;color:orange;font-size:12px">4.0</p>
        <p style="position:absolute;left:205px;top:40px;font-size:12px">月售101单</p>
        <p style="position:absolute;font-size:10px;top:70px;left:105px">￥20起送/配送费约5￥</p>
        <p
          style="position:absolute;background-color:cornflowerblue;color:white;font-size:12px;left:320px;top:40px"
        >蜂鸟专送</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
      methods: {
        toShopdetail(path){
            this.$router.push(path)
        }
      },
};
</script>
<style lang="">
    #boss1 {
  position: relative;
  width: 100%;
  height: 110px;
  background-color: white;
}
#boss1 > img {
  position: absolute;
  width: 90px;
  top: 7px;
  left: 5px;
}
#boss1 > span {
  position: absolute;
  background-color: yellow;
  left: 100px;
  top: 10px;
  font-size: 13px;
}
#boss1 > strong {
  position: absolute;
  color: black;
  left: 140px;
  top: 7px;
  font-weight: bold;
}
#wrap {
  height: 100%;
}
</style>