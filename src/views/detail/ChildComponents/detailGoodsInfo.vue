<template>
  <div class="goods-info">
    <div class="goods-desc">{{goodsInfo.desc}}</div>
    <div class="goodsInfo-list">
      <div v-for="(item ,index) in goodsInfo.list" :key="index" 
          class="goods-item"
      > 
        <img :src="item" @load="ImgLoad">
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  name:'goodsinfo',
  props:{
    goodsInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return{
      counter:0,
      imagesLength:0
    }
  },
  methods:{
    ImgLoad(){
      // 不嫌弃加载慢网卡，可以加上
      // if(++this.counter === this.imagesLength){
        this.$emit("ImgLoad")
      // }
    }
  },
  // 监督数据变化
  watch:{
    //监督goodsInfo数据变化
    goodsInfo(){
      this.imagesLength = this.goodsInfo.list.length;
    }

  }
}
</script>

<style scoped>
.goods-info {
   box-shadow: 0px 3px 0 #F7F7F7;
}
.goods-desc {
  padding: 20px;
  color: black;
}
.goodsInfo-list {
  /* display:flex;
  flex-wrap: wrap;
  justify-content: space-around; */
  padding: 5px;
}
.goods-item {
  width: 98%;
  /* overflow: hidden;  */
  border-radius: 5px;
  /* padding-bottom: 5px; */
}
.goods-item img{
  width: 100%;
}
</style>