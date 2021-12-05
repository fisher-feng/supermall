<template>
  <div class="detailRecommens">
    <div class="Love"><h2>根据您的喜欢，给您推荐以下款式</h2></div>
    <good-list :goodsData = "recommends" ></good-list>
  </div>
</template>

<script>
import GoodList from 'components/content/goods/GoodList.vue'
export default {
  name:'detailRecommends',
  components:{
    GoodList
  },
  props:{
    recommends:{
        type:Array,
        default(){
          return []
        }
    }
  }
}
</script>

<style scoped>
.detailRecommens {
  /* background-color: blue; */
}
.Love h2{
  padding: 20px ;
  text-align: center;
}
</style>