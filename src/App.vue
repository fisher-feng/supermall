<template>
  <div id="app">
    <mainTabBarbar></mainTabBarbar>
    <!-- 如果keepalive有问题那就要在保存原来的滚动记录 -->
    <!-- exclude排除Detail -->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  
  </div>
</template>

<script>
import mainTabBarbar from 'components/content/maintabbar/mainTabbar.vue'//使用别名的方式

export default {
  name: 'App',
  components: {
    mainTabBarbar
  },
 
}
</script>

<style>

@import './assets/css/base.css'

</style>
