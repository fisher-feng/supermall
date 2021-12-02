<!--  -->
<template>
    <div class="goods-item" @click="DetailPage">
      <img v-bind:src="goodsItem.show.img" @load="ImgItemload">

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
          ImgItemload(){
            this.$bus.$emit('ItemImageLoad')
          },
          DetailPage(){
            // 动态路由跳转
            this.$router.push('/detail/'+this.goodsItem.iid)
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