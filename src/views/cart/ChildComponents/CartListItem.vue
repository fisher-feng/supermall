<template>
  <div class="cart-list-item" @click="ClickSelete">
      <div class="selete" >
        <img src="~assets/img/cart/tick.svg" :class="{'IsSelete' : IsSelete}">
      </div>
      <div class="images">
        <img :src="product.image" alt="">
      </div>
      <div class="content">
        <div class="content-title">{{product.title}}</div>
        <div class="content-desc">{{product.desc}}</div>
        <div class="content-text">
          <span class="content-text-price">￥{{product.price}}</span>
          <span class="content-text-count">X{{product.count}}</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name:'cartlistitem',
  props:{
    product:{}
  },
  methods:{
    ClickSelete(){
      this.product.checked =!this.product.checked;  
    }
  },
  computed:{
    IsSelete(){
      return this.product.checked;
    }
  }
}
</script>

<style>

.cart-list-item {
  height: 150px;
  overflow: hidden;
  display: flex;
  padding: 10px;
  align-items: center;
  box-shadow: 0px 3px 0 #F7F7F7;
}
/* .cart-list-item .selete {
  text-align: center;
} */
.cart-list-item .selete img{
  
  border-radius: 9px;
  border: 1px solid violet;
}
.IsSelete{
 background-color: violet;
}
.images {
  height: 130px;
  margin: 0 10px;
}
.images img{
  height: 100%;
  border-radius: 10px;
}

.content {
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
 
}

.content-desc {
  margin: 20px 0;
}
.content-text{
  position: relative;
  height: 50px;
  line-height: 50px;
}
.content-text-price{
  position: absolute;
  left: 0;
  color: #E8A07C;
}
.content-text-count {
  position: absolute;
  right: 0;
}
.calculate {
  /* position: absolute; */
  border-bottom: 0;
}
</style>