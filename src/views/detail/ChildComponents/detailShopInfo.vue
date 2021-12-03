<template>
  <div>
    <!-- 店铺头像 -->
    <div class="shop-messages">
      <img :src="shop.logo" >
      <span>{{shop.name}}</span>
    </div>

    <div class="situation">
      <div class="info">
        <div class="info-sells">
          <div class="sells-count">{{shop.fans}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shop.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>

      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more':item.isBetter}">
              <span>{{item.isBetter ? '高':'低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>  
    <div class="enter-shop">进店逛逛</div>

  </div>
</template>

<script>
export default {
  name:'',
  props:{
    shop:{
      type:Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>

.shop-messages {
  height: 50px;
  line-height: 50px;
  color: #434343;
}
.shop-messages img{
  height: 40px;
  line-height: 30px;
  margin-left: 10px;
}
.shop-messages span {
  margin: 0 10px;
}
.situation {
  display: flex;
  padding: 20px 0 ;
  color:#434343;
  box-shadow: 0px 3px 0 #F7F7F7;
  
}
.info {
  flex: 1;
  display: flex;
}
.shop-middle-item {
  flex:1
}

.info-sells {
  flex: 1;
  display: flex;
  flex-direction: column; 
  text-align: center;
}
.sells-count {
  flex:1;
}
.sells-text {
  flex:1;
}
.info-goods {
  flex: 1;
  display: flex;
  flex-direction: column; 
  text-align: center;
}
.goods-count {
  flex:1;
}
.goods-text {
  flex:1;
}

.enter-shop{
  padding: 20px 0;
  text-align: center;
}
.shop-middle-right{
  
}
.shop-middle-right table {
  color: #434343;
  margin:auto auto;
 
}
.score {
  color: #869071;
  margin: 10px 20px;
}
.score-better {
  color: #E14B62;
}
.better {
  color: #fff; 
  background-color: #518D32;
}
.better-more {
  color: #fff; 
  background-color: #E14B62;
}
</style>