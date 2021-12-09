<template>
  <div class="Join-cart ">
    <div class="Join-cart-left">
      <div class="service">客服</div>
      <div class="shop">店铺</div>
      <div class="collect">收藏</div>
    </div>
    <div class="shop-cart" @click="addToCart">加入购物车</div>
    <div class="buy">购买</div>
  </div>
</template>

<script>
export default {
  name:'detailJoinCart',
  methods:{
    addToCart(){
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
.Join-cart {
  position: fixed;
  z-index: 999;
  display: flex;
  background-color: #fff;
  width: 100%;
  bottom: 0px;
  height: 60px;
  line-height: 60px;
  padding-left: 10px;
}
.Join-cart .Join-cart-left {
  width: 40%;
  display: flex;
}
.Join-cart .Join-cart-left>div {  
  flex: 1;
}
.shop-cart {
  width: 30%;
  text-align: center;
  background-color: yellow;
}
.buy {
  width: 30%;
  text-align: center;
  background-color: #FD6499;
  color: #fff;
}
</style>