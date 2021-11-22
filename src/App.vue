<template>
  <div id="app">
    <mainTabBarbar></mainTabBarbar>
    <router-view></router-view>
  </div>
</template>

<script>
import mainTabBarbar from 'components/content/maintabbar/mainTabbar.vue'//使用别名的方式

export default {
  name: 'App',
  components: {
    mainTabBarbar
  }
}
</script>

<style>

@import './assets/css/base.css'

</style>
