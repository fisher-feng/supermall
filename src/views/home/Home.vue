<!--  -->
<template>
   
    <div id="home">
       <!-- 导航栏 -->
        <nav-bar class="home-nav">
          <div slot="left"></div>
          <div slot="center">购物街</div>
          <div slot="right"></div>
        </nav-bar>
        <!-- 轮播图 -->
        <!-- <home-swiper :banners="banners"></home-swiper> -->
        <tab-contorl :titles="['流行','新款','精选']"
                      @tabClick="tabClick"
                      ref="tableControl1"
                      v-show="isTabFixed"
                      class="tableControl"
        />
      <!--scroll插件的使用  -->
      
      <scroll class="content" 
              ref="scroll"
              @pullingUp ="loadMore"
              @scroll="contentScroll"
              :probe-type = "3"
              :pull-up-load = "true"
      >

      
        <swipper :slides="banners" 
                 @swiperImg ="swiperImgLoad"
        >
        </swipper>
        <!-- recommends -->
        <recomend-view :recommends="recommends"></recomend-view>
        <!--  feater -->
        <feater></feater>
        <!-- tabcontorl -->
        <tab-contorl :titles="['流行','新款','精选']"
                      @tabClick="tabClick"
                      ref="tableControl2"
        />
        <good-list :goodsData="showGoods"></good-list>
       
      </scroll>  
     
      <!-- 置顶按钮 -->
      <!-- native属性监听原生组件的点击事件，不然得在外层添加一层在监听 -->
      <back-top @click.native="backTopClick" v-if="isShowBackTop"></back-top>
     
    </div>
</template>

<script>
// 公共组件
import NavBar from 'components/common/navbar/NavBar.vue'
import TabContorl from 'components/content/TabControl/TabControl.vue'
import GoodList from 'components/content/goods/GoodList.vue' 
import {debounce} from 'common/utils.js'
// 业务组件
// import HomeSwiper from 'views/home/ChildComponents/HomeSwiper.vue'
import RecomendView from 'views/home/ChildComponents/RecommendView'
import Feater from 'views/home/ChildComponents/Feater.vue'

// 获取网络数据
import{getHomeMultidata,RequestsHomeGoods}  from 'network/home.js'

//使用插件
import swipper from 'common/plug/swiper/example.vue'
import scroll from 'common/plug/scroll/scroll.vue'
import BackTop from '../../components/content/backTop/backTop.vue'

    export default {
        name:'',
        components:{
          NavBar,
          TabContorl,
          GoodList,

          // HomeSwiper,
          Feater,
          RecomendView,

          swipper,
          scroll,
          BackTop
          
        },
        mounted(){

          // 防抖节流函数
          const refresh = debounce(this.$refs.scroll.refresh,50)
        
           // 加载完每一张图片都重新计算content高度,以免没加载完图片就给定conten高度的bug
          this.$bus.$on ('ItemImageLoad',() => {        
            refresh()      
          })
        },
        data(){
          return {
            banners:[],
            recommends:[],
            goods: {
              'pop': {page: 0, list: []},
              'new': {page: 0, list: []},
              'sell': {page: 0, list: []},
            },
            currentType: 'pop',
            scroll:null,
            isShowBackTop:false,
            tableOffsetTop:null,
            isTabFixed:false,
          }
        },
        computed: {
          // 切换展示重要的地方
           showGoods() {
             return this.goods[this.currentType].list
            }
        },
        // created生命周期函数发送网络请求
        created(){
          // 请求轮播图和 数据
          this.getHomeMultidata()
           // 2.请求商品数据
          this.getHomeGoods('pop')
          this.getHomeGoods('new')
          this.getHomeGoods('sell')    
          
         
        },
        methods:{
          /**
            * 事件监听相关的方法
          */
          tabClick(index) {
            switch (index) {
              case 0:
                this.currentType = 'pop'
                break
              case 1:
                this.currentType = 'new'
                break
              case 2:
                this.currentType = 'sell'
                break
            }   
            this.$refs.tableControl1.currentIndex = index;
            this.$refs.tableControl2.currentIndex = index;
          },
          // 加载更多数据
          loadMore(){
              this.getHomeGoods(this.currentType)
          },
          backTopClick(){
            this.$refs.scroll.scrollTo(0,0,500)
          },
          contentScroll(position){
            this.isShowBackTop = (-position.y) > 1000
            this.isTabFixed = (-position.y) > this.tableOffsetTop
          },
          // 广告数据
          getHomeMultidata(){
            getHomeMultidata().then(res => {          
            this.banners = res.data.banner.list;
            this.recommends =res.data.recommend.list
          })
          .catch(err => {
            console.log(err);
          })
          },
          // tabcontrol数据
          getHomeGoods(type) {
            const page = this.goods[type].page + 1
            RequestsHomeGoods(type, page).then(res => {
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1   
            this.$refs.scroll.finishPullUp()   
            })
          },
       
          swiperImgLoad(){      
            this.tableOffsetTop =this.$refs.tableControl2.$el.offsetTop;
          }
        } 
    }

</script>

<style scoped>
#home {
  /*padding-top: 44px;*/
  /* 视口高度 100vh表示100%的视口高度*/
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tiny);
  color: #fff;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* z-index: 9; */
}

/*.content {*/
  /* calc动态计算 */
  /* height: calc(100% - 93px); */
  /*overflow: hidden;*/
  /*margin-top: 44px;*/
/*}*/
.tableControl {
  /* margin-top: 44px; */
  position: relative;
  z-index: 9;
}

</style>