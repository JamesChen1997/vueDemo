<template>
  <div id="app">
    <router-view></router-view>
    <Foot  v-show="$route.meta.showfooter" />
  </div>
</template>
<script>
import {reqFoodTypes} from './api'
import  Foot from './components/foot/Foot'
export default {
  mounted() {
    this.$store.dispatch('getAddress')
    this.$store.dispatch('getUserInfo')
  },
      components:{
        Foot
      }
}
</script>

<style>


</style>
