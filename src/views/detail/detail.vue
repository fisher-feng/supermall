<template>
  <div class="detail">
    <!-- 导航栏 -->
    <detail-nav-bar  @NavBarPostion = "skipPosition" :propsIndex = "currentIndex"/>
    <scroll   class="content"
              ref ="scroll"
              @scroll="contentScroll"
              :probe-type = "3"
              :pull-up-load = "true"
    >
  
      <!-- 轮播图 -->
      <detail-swiper :top-images = "TopImages"/>
      <!-- 商品数据 -->
      <detail-base-info :goods = "goods"></detail-base-info>
      <!-- 店铺信息 -->
      <detail-shop-info :shop = "shop"></detail-shop-info>
      <!-- 商品详情 -->
      <!-- 这里的ImgLoad可以换到最后 -->
      <detail-goods-info :goodsInfo = "goodslInfo"  @ImgLoad = "ImgLoad"></detail-goods-info>
      <!-- 商品参数信息 -->
      <detail-goods-params :GoodsParams = "paramsInfo" ref="paramsInfo"></detail-goods-params>
      <!-- 评论信息 -->
      <detail-comment-info :commentInfo= "commentInfo" ref="commentInfo"></detail-comment-info>
      <!-- 推荐信息 -->
      <detail-recommeds :recommends = "recommends" ref="recommends"></detail-recommeds>
     
      
    </scroll>
    <!-- 回到顶部 -->
    <back-top @click.native="backTopClick" v-if="isShowBackTop"></back-top>
  </div>
</template>

<script>

// 子组件
import detailNavBar from 'views/detail/ChildComponents/detailNavBar'
import detailSwiper from 'views/detail/ChildComponents/detailSwiper.vue'
import detailBaseInfo from 'views/detail/ChildComponents/detailBaseInfo.vue'
import detailShopInfo from 'views/detail/ChildComponents/detailShopInfo.vue'
import detailGoodsInfo from 'views/detail/ChildComponents/detailGoodsInfo.vue'
import detailGoodsParams from 'views/detail/ChildComponents/detailGoodsParams.vue'
import detailCommentInfo from 'views/detail/ChildComponents/detailCommentInfo.vue'
import detailRecommeds from 'views/detail/ChildComponents/detailRecommends.vue'
//公共业务组件
import BackTop from 'components/content/backTop/backTop.vue'
// 公共常用组件
import {itemListenerMixin} from 'common/mixin.js'
// 网络数据
import {getDetail,getRecommend,Goods,shop,Info,GoodsParams } from 'network/detail.js'

// 使用插件
import scroll from 'common/plug/scroll/scroll.vue'

export default {
  name:'Detail',
  mixins:[itemListenerMixin],//混入重新计算Better-Scroll的高度
  components:{
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailGoodsInfo,
    detailGoodsParams,
    detailCommentInfo,
    detailRecommeds,

    BackTop,

    scroll
    
  },
  data(){
    return{
      iid: null,
      TopImages: [],
      goods: {},
      shop:{},
      goodslInfo:{},
      paramsInfo:{},
      commentInfo:{},
      recommends:[],
      isShowBackTop:false,
      paramsInfoPosition:0,
      commentInfoPosition:0,
      recommendsPosition:0,
      currentIndex:0

    }
  },
  methods:{
    contentScroll(position){
      this.isShowBackTop = (-position.y) > 1000
      this.isTabFixed = (-position.y) > this.tableOffsetTop
      
      if((-position.y) < this.paramsInfoPosition){
        this.currentIndex = 0;
      }else if((-position.y) < this.commentInfoPosition){
        this.currentIndex = 1;
      }else if((-position.y) < this.recommendsPosition){
        this.currentIndex = 2;
      }else {
        this.currentIndex = 3 ;
      }
      
    },
    backTopClick(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    ImgLoad(){
      this.$refs.scroll.refresh();
      this.paramsInfoPosition =this.$refs.paramsInfo.$el.offsetTop;
      this.commentInfoPosition =this.$refs.commentInfo.$el.offsetTop;
      this.recommendsPosition =this.$refs.recommends.$el.offsetTop;
    },
    skipPosition(position){
      // console.log(position);
      switch(position){
        case 0: this.$refs.scroll.scrollTo(0,0,0);break;
        case 1: this.$refs.scroll.scrollTo(0,-this.paramsInfoPosition,0);break;
        case 2: this.$refs.scroll.scrollTo(0,-this.commentInfoPosition,0);break;
        case 3: this.$refs.scroll.scrollTo(0,-this.recommendsPosition,0);break;
      }   
    }
  },
  created(){
    // console.log(this.$route.path);
    //保存传入的iid值
    this.iid =this.$route.params.iid;
    // 请求详情数据
    getDetail(this.iid).then((res) => {
      //获取数据
      const data = res.result;
      //console.log(data);

      //获取顶部轮播图数据
      this.TopImages = data.itemInfo.topImages

      //获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

      //获取店铺信息
      this.shop = new shop(data.shopInfo)

      //获取商品详情信息
      this.goodslInfo = new Info(data.detailInfo)

      //获取参数信息
      this.paramsInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule)
      
      //获取评论信息
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0]
        // console.log(this.commentInfo);
      }
    })
    //请求推荐数据
    getRecommend().then((res) =>{
      this.recommends = res.data.list;
      // console.log(this.recommends);
    })

  },
  mounted(){

    // this.$bus.$on ('detailItemImageLoad',() => {        
    //   // this.$refs.scroll.refresh();     
    // })
  }
}
</script>

<style scoped>
.detail {
  position: relative;
  height: 100vh;
  background-color: #fff;
  /* border: solid; */
}
.detail-nav-bar{
  position: relative;
  /* z-index: 999; */
}
.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0; 
}
</style>