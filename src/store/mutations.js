// 直接更新state的多个方法的对象
import Vue from 'vue'
import {
   RECEIVE_ADDRESS,
   RECEIVE_SHOPS,
   RECEIVE_FOODTYPE,
   RECEIVE_USERINFO,
   RESET_USERINFO,
   RECEIVE_SHOPCOMMENT,
   RECEIVE_SHOPINFO,
   RECEIVE_GOODS,
   ADD_FOOD_COUNT,
   SUB_FOOD_COUNT,
   RECEIVE_SEARCH_SHOPS
} from './mutation-Types'
export default{
     [RECEIVE_ADDRESS](state,{address}){
        state.address=address
        console.log(state.address)
     },
     [RECEIVE_SHOPS](state,{shops}){
        state.shops=shops
     },
     [RECEIVE_FOODTYPE](state,{foodstype}){
        state.foodstype=foodstype
     },
     [RECEIVE_USERINFO](state,{userInfo}){
      state.userInfo=userInfo
   },
   [RESET_USERINFO](state){
      state.userInfo={}
   },
   //
   [RECEIVE_SHOPCOMMENT](state,{shopInfo}){
      state.shopInfo=shopInfo
      console.log(state.shopInfo)
   },
   [RECEIVE_SHOPINFO](state,{ratings}){
      state.ratings=ratings
   },
   [RECEIVE_GOODS](state,{goods}){
      state.goods=goods
   },

   [ADD_FOOD_COUNT](state,{food}){//增加foodcount
      if(!food.count){
         Vue.set(food,'count',1)
         //将food添加到carFoods中
         state.cartFoods.push(food)
      }else{
         food.count++
      }
   },
   [SUB_FOOD_COUNT](state,{food}){//减少foodcount
      if(food.count){
         food.count--
         if(food.count==0){
            state.cartFoods.splice(state.cartFoods.indexOf(food),1)
         }
      }
   },
   
   [RECEIVE_SEARCH_SHOPS](state,{searchShops}){//搜索
      state.searchShops=searchShops
   },

}