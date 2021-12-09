<template>
  <div class="detail">
    <!-- 导航栏 -->
    <detail-nav-bar  @NavBarPostion = "skipPosition" :propsIndex = "currentIndex"/>
    <!-- <toast></toast> -->

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
      <detail-goods-info :goodsInfo = "goodsInfo"  @ImgLoad = "ImgLoad"></detail-goods-info>
      <!-- 商品参数信息 -->
      <detail-goods-params :GoodsParams = "paramsInfo" ref="paramsInfo"></detail-goods-params>
      <!-- 评论信息 -->
      <detail-comment-info :commentInfo= "commentInfo" ref="commentInfo"></detail-comment-info>
      <!-- 推荐信息 -->
      <detail-recommeds :recommends = "recommends" ref="recommends"></detail-recommeds>
     
    </scroll>  

    <!-- 加入购物车 -->
    <detail-join-cart  @addToCart = "addToCart"></detail-join-cart>
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
import detailJoinCart from 'views/detail/ChildComponents/detailJoinCart.vue'
//公共业务组件
import BackTop from 'components/content/backTop/backTop.vue'
import {debounce} from 'common/utils.js'
// 公共常用组件
import {itemListenerMixin} from 'common/mixin.js'//混入
import toast from 'components/common/toast/toast.vue'
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
    detailJoinCart,
    toast,

    BackTop,

    scroll
    
  },
  data(){
    return{
      iid: null,
      TopImages: [],
      goods: {},
      shop:{},
      goodsInfo:{},
      paramsInfo:{},
      commentInfo:{},
      recommends:[],
      isShowBackTop:false,
      paramsInfoPosition:0,
      commentInfoPosition:0,
      recommendsPosition:0,
      currentIndex:0,
      getThemeTopY:null,
      ThemeTopYS:[]
    }
  },
  methods:{
    contentScroll(position){
      this.isShowBackTop = (-position.y) > 1000
      this.isTabFixed = (-position.y) > this.tableOffsetTop
      /* 滚到对应位置，导航栏跟着改变 */
      const positionY = -position.y;
      for(let i = 0;i < this.ThemeTopYS.length-1; i++){
        if((this.currentIndex !== i) && 
        (positionY < this.ThemeTopYS[i+1])&&
        (positionY > this.ThemeTopYS[i])){
          this.currentIndex = i;
        }
      }  
    },
    backTopClick(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    ImgLoad(){
      this.$refs.scroll.refresh();//这里没用防抖节流
      this.getThemeTopY()  //用了防抖节流 
    },
    skipPosition(index){
      this.$refs.scroll.scrollTo(0,-this.ThemeTopYS[index],0);
    },
    addToCart(){
      // 获取购物车需要展示的信息
      const product = {}
      // product.image = 0;
      // console.log(this.goods);
      product.image = this.TopImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // 将商品添加到购物车
      this.$store.dispatch('addCart',product).then(res =>{
        
        this.$toast.show(res,2000); 

      });//dispatch是操作actions
     
    }
  },
  created(){
   
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
      this.goodsInfo = new Info(data.detailInfo)

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
      
      // $nextTick是渲染完再执行，以防 没有渲染完，得不到准确的数据
      this.$nextTick (() => {
       
      })
    })
    // 给getThemeTopY赋值拿到导航栏对应的offset值
    this.getThemeTopY = debounce(() =>{
      this.ThemeTopYS = [0];
      this.ThemeTopYS.push(this.$refs.paramsInfo.$el.offsetTop);
      this.ThemeTopYS.push(this.$refs.commentInfo.$el.offsetTop);
      this.ThemeTopYS.push(this.$refs.recommends.$el.offsetTop);
      this.ThemeTopYS.push(this.$refs.recommends.$el.offsetTop+10000);//用于做判断区间
      // this.ThemeTopYS.push(Number.MAX_VALUE);//用于做判断区间
    },50)
  },
  mounted(){

  }
}
</script>

<style scoped>
.detail {
  position: relative;
  height: 100vh;
  background-color: #fff;
  z-index: 999;
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