<template>
    <div v-show="isShow">
        <div id="qwe" >
            <i class="iconfont icon-jiantouzuo" @click="back"></i>
            <img :src="food.image" alt="">
            <p>{{food.info}}</p>
            <p id="price">￥{{food.price}}</p>
            <CarButton :food=food  id="button" />
        </div>

    </div>
</template>
<script>
import CarButton from '../../components/carBtuuon/CarButton'
export default {
    data(){
        return{
             isShow:false
        }
       
    },
    props:{
        food:Object
    },
    methods: {
        back(){
            this.isShow=!this.isShow
        }
    },
    components:{
        CarButton
    }
}

</script>
<style lang="">
    #qwe{
        position: fixed;
        width:200px;
        height:250px;
        background-color:wheat;
        z-index: 2;
        top:150px;
        right:90px;
    }
    #qwe>img{
        width:200px;
    }
    .icon-jiantouzuo{
        color: white;
    }
    #button{
        position: relative;
        background-color: tomato;
        right:70px;
        bottom: 60px;
        z-index: 4;
    }
    #price{
        color: #ff5339;
        position: relative;
        top:40px
    }
</style>