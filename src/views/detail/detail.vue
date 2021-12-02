<template>
  <div>
    <!-- 导航栏 -->
    <detail-nav-bar/>
    <!-- 轮播图 -->
    <detail-swiper :top-images = "TopImages"/>
    <!-- 商品数据 -->
    <detail-base-info :goods="goods"></detail-base-info>
    <!-- 店铺信息 -->
    <detail-shop-info :shop="shop"></detail-shop-info>
  </div>
</template>

<script>

// 子组件
import detailNavBar from 'views/detail/ChildComponents/detailNavBar'
import detailSwiper from 'views/detail/ChildComponents/detailSwiper.vue'
import detailBaseInfo from 'views/detail/ChildComponents/detailBaseInfo.vue'
import detailShopInfo from 'views/detail/ChildComponents/detailShopInfo.vue'

// 网络数据
import {getDetail,Goods,shop} from 'network/detail.js'
export default {
  name:'Detail',
  components:{
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo
  },
  data(){
    return{
      iid: null,
      TopImages: [],
      goods: {},
      shop:{}
    }
  },
  created(){
    // 保存传入的iid值
    this.iid =this.$route.params.iid;
   
    getDetail(this.iid).then((res) => {
      const data = res.result;
      // 获取顶部轮播图数据
      this.TopImages = data.itemInfo.topImages

      // 获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      console.log(data.shopInfo);
      // 创建店铺信息
      this.shop = new shop(data.shopInfo)

    })
  }
}
</script>

<style>

</style>