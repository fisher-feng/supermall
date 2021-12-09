<!--  -->
<template>
  <div class="goods-item" @click="DetailPage">
    <!-- <div v-if ="goodsItem.show">aaaaaa</div>
    <div v-else>bbbbbbb</div> -->
    <img  v-if ="goodsItem.show" v-lazy ="goodsItem.show.img" @load="ImgItemload">
    <img  v-else v-lazy="goodsItem.image" @load="ImgItemload">

    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'', 
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    // 这里有bug，需要调
    ImgItemload(){
      if(this.$route.path.indexOf('/home') == 0){
          this.$bus.$emit('ItemImageLoad')//这是在home.vue里面使用的
        //  console.log('home');
      
      }else if (this.$route.path.indexOf('/detail') == 0){
          this.$bus.$emit('detailItemImageLoad')//这是在detail.vue里面使用的 
        //  console.log('detail');          
      }

    },
    DetailPage(){
      // 动态路由跳转
      if(this.$route.path.indexOf('/home') == 0){
        this.$router.push('/detail/'+this.goodsItem.iid)
      }
      
    }
  }
         
}

</script>

<style scoped>
.goods-item {
  width: 48%;
  overflow: hidden; 
  border-radius: 5px;
  padding-bottom: 5px;
}
.goods-item img{
  width: 100%;
  /* border-radius: 5px; */
  
}

.goods-info{
  font-size: 8px;
}
.goods-info p {
  margin-top: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.price {
  color: pink;
}
.collect {
  position: relative;
  margin-left: 20px;
}
.collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  
}
</style>