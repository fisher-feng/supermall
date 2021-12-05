<template>
  <div class="dtail-goods-params">
    <div class="dtail-goods-params-title"><h2>产品参数</h2></div>
    <table class="goods-size">
      <tr v-for="(rows,index) in GoodsParams.sizes" :key = "index" class="">
        <td v-for = "(column,id) in rows" :key = "id">{{column}}</td>
      </tr>
    </table>
    <table class="goods-other">
      <div class="info-img" v-if = "GoodsParams.image && GoodsParams.image.length !== 0">
         <img src="GoodsParams.image" >
      </div>
     
      <tr v-for = "(other,oid) in GoodsParams.infos" :key = "oid" class="goods-other-list">
        <td class="list-left">{{other.key}}</td>
        <td class="list-right">{{other.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name:'detailGoodsParams',
  props:{
    GoodsParams:{
      type:Object,
      defualt(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.dtail-goods-params {
  padding: 20px;
}
.dtail-goods-params-title {
  text-align: center;
  padding: 20px 0;
}
.goods-size {
  
  width: 100%;
  padding: 10px;
  box-shadow: 0px 3px 0 #F7F7F7;
  
}
.goods-size tr {
  box-shadow: 0px 1px 0 #F7F7F7;
 
}
/* .goods-size td {

} */

.goods-other {
  box-shadow: 0px 3px 0 #F7F7F7;
  width: 90%;
  padding: 30px 0px;
}
.goods-other-list {
  box-shadow: 0px 1px 0 #F7F7F7;

}
.goods-other-list .list-left {
  width: 30%;
}
.goods-other-list .list-right {
  margin-left: 10px;
  color: #CB6A8E;
}

</style>