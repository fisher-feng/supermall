<!--  -->
<template>
    <div>
      <tabbar>
        <tab-bar-item path="/home" activeColor="pink">
          <div slot="item-icon" ><img src="~assets/img/tabbar/home.svg" ></div>
          <div slot="item-icon-active"><img src="~assets/img/tabbar/home_active.svg" ></div>
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item  path="/category" activeColor="pink">
          <div slot="item-icon"><img src="~assets/img/tabbar/category.svg" ></div>
          <div slot="item-icon-active"><img src="~assets/img/tabbar/category_active.svg" ></div>
          <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart" activeColor="pink">
          <div slot="item-icon"><img src="~assets/img/tabbar/shopcart.svg" ></div>
          <div slot="item-icon-active"><img src="~assets/img/tabbar/shopcart_active.svg" ></div>
          <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="pink">
          <div slot="item-icon"><img src="~assets/img/tabbar/profile.svg" ></div>
          <div slot="item-icon-active"><img src="~assets/img/tabbar/profile_active.svg" ></div>
          <div slot="item-text">我的</div>
        </tab-bar-item>
      </tabbar>
    </div>
</template>

<script>
import tabbar from 'components/common/tabbar/tabbar.vue'//使用了别名，在webpack.base.config的resolve.alias
import tabBarItem from 'components/common/tabbar/tarBarItem.vue'//使用了别名
    export default {
        name:'',
        components:{
          tabbar,
          tabBarItem
        }
    }

</script>

<style scoped>

</style>