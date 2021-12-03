<template>
  <div v-if = "Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if ="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>  
    <div class="info-service">
      <span class="info-service-item" v-for ="index in goods.services.length-1" :key ="index">
        <img :src="goods.services[index].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  props:{
    goods: {
      type:Object,
      defalut(){
        return {}
      }
    }
  }

}
</script>

<style>
/* 标题样式 */
.info-title {
  padding: 10px;
  color: #1E2624;
}
/* 价格样式 */
.info-price {
  position: relative;
  padding: 5px;
  height: 30px;

}
.n-price {
  color: #E96585;
  font-size: 22px;
}

.o-price {
  text-decoration: line-through;
  font-size: 15px;
  /* line-height: 30px; */
  margin: 0 10px;
}
.discount {
  position: absolute;
  background-color:#F15B79;
  color:#fff;
  border-radius: 15px;
  font-size: 15px;
  padding: 2px;
  top:0px;
}
/* 销量样式 */
.info-other {
  display: flex;
  padding: 20px;
  color: #939395;
  box-shadow: 0px 3px 0 #F7F7F7;
  font-size: 15px;
}
.info-other span{
  flex: 1;
}
/* 退货样式 */
.info-service {
  display: flex;
  padding: 20px 5px;
  color: #554F4C;
  box-shadow: 0px 3px 0 #F7F7F7;
}
.info-service-item {
  flex: 1;
  font-size: 15px;
}
.info-service-item img {
  width: 15px;
}
</style>