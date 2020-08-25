//通过 mutation 间接更新状态的多个方法的对象
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
import {
    reqAddress,
    reqShops,
    reqFoodTypes,
    reqUSERINFO,
    reqQUITLOG,
    reqShopComment,
    reqShopInfo,
    reqGoods,
    reqSearch
} from '../api'
export default {
    //异步获取商家地址
    async getAddress({ commit, state }) {
        const gohash = state.latitude + ',' + state.lontitude
        const result = await reqAddress(gohash)
        if (result.code == 0) {
            const address = result.data
            commit(RECEIVE_ADDRESS, { address })
        }

    },
    //异步获取商品分类
    async getFoodtype({ commit, state }) {
        const result = await reqFoodTypes()
        if (result.code == 0) {
            const foodstype = result.data
            commit(RECEIVE_FOODTYPE, { foodstype })
        }

    },
    //获取shops
    async getShops({ commit, state }) {
        const { latitude, lontitude } = state
        const result = await reqAddress(latitude, lontitude)
        if (result.code == 0) {
            const shops = result.data
            commit(RECEIVE_SHOPS, {shops})
        }
    },
    //保存后台返回的用户信息
    recoredUserInfo({commit},userInfo) {
        commit(RECEIVE_USERINFO,{userInfo})
    },
    //异步获取异步信息
    async getUserInfo({ commit }) {
        const result = await reqUSERINFO()
        if (result.code === 0) {
            const userInfo = result.data
            commit(RECEIVE_USERINFO,{ userInfo})
        }
    },
    //异步退出登陆的action
    async logOut({commit}) {
        const result = await reqQUITLOG()
        if (result.code === 0) {
            commit(RESET_USERINFO)
        }
    },
    //异步获取商家信息
    async getShopInfo({commit}){
        const result = await reqShopInfo()
        if(result.code==0){
            const shopInfo = result.data
            commit(RECEIVE_SHOPINFO,{shopInfo})
        }
    },
    //异步获取商家评论
    async getShopComment({commit}){
        const result = await reqShopComment()
        if(result.code==0){
            const ratings = result.data
            commit(RECEIVE_SHOPCOMMENT,{ratings})
        }
    },
    //异步获取商品信息
   async getGoods({commit}){
       const result = await reqGoods()
       if(result.code==0){
           const goods = result.data
           commit(RECEIVE_GOODS,{goods})
       }
   },
   //同步的更新foodcount  
   updateFoodCount({commit},{isAdd,food}){
         if(isAdd){//增加foodcount
              commit(ADD_FOOD_COUNT,{food})
         }else{//减少foodcount
            commit(SUB_FOOD_COUNT,{food})
         }
   },
   //异步  搜索功能
   async searchShops({commit,state},keyword){
  const geohash = state.latitude + ',' + state.lontitude
    const result = await reqSearch(geohash,keyword)
    if(result.code==0){
        const searchShops = result.data
        commit(RECEIVE_SEARCH_SHOPS,{searchShops})
    }
},
}