<!--  -->
<template>
   
    <div id="home">
       <!-- 导航栏 -->
        <nav-bar class="home-nav">
          <div slot="left">左</div>
          <div slot="center">购物街</div>
          <div slot="right">右</div>
        </nav-bar>
        <!-- 轮播图 -->
        <!-- <home-swiper :banners="banners"></home-swiper> -->
          <!-- 使用插件 -->
        <example :slides="banners"></example>

        <!-- recommends -->
        <recomend-view :recommends="recommends"></recomend-view>
        <!--  feater -->
        <feater></feater>

       <!-- tabcontorl -->
        <tab-contorl :titles="['流行','新款','精选']"
                      @tabClick="tabClick"
        />
        <good-list :goodsData="showGoods"></good-list>
       <ul>
         <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
       </ul>
     
    </div>
</template>

<script>
// 公共组件
import NavBar from 'components/common/navbar/NavBar.vue'
import TabContorl from 'components/content/TabControl/TabControl.vue'
import GoodList from 'components/content/goods/GoodList.vue' 

// 业务组件
import HomeSwiper from 'views/home/ChildComponents/HomeSwiper.vue'
import RecomendView from 'views/home/ChildComponents/RecommendView'
import Feater from 'views/home/ChildComponents/Feater.vue'


// 获取网络数据
import{getHomeMultidata,RequestsHomeGoods}  from 'network/home.js'

//使用插件
import example from 'common/plug/swiper/example.vue'


    export default {
        name:'',
        components:{
          NavBar,
          TabContorl,
          GoodList,

          HomeSwiper,
          Feater,
          RecomendView,

          example
                        
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
          },
          // 广告数据
          getHomeMultidata(){
            getHomeMultidata().then(res => {
           
            this.banners = res.data.banner.list;
            this.recommends =res.data.recommend.list
            console.log(this.banners);
          }).catch(err => {
            console.log(err);
          })
          },

          // tabcontrol数据
          getHomeGoods(type) {
            const page = this.goods[type].page + 1
            RequestsHomeGoods(type, page).then(res => {
              console.log(res);
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1
            // this.$refs.scroll.finishPullUp()
            })
          }
        }
      
    }

</script>

<style scoped>
.home-nav {
  background-color: var(--color-tiny);
  color: #fff;
  /* font-size: 20px; */
}
</style>