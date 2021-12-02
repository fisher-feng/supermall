<template>
  <div>
    <div>
      <div>
        <div>{{shop.fans}}</div>
        <div>总销量</div>
      </div>
      <div class="info-goods">
        <div class="goods-count">
          {{shop.goodsCount}}
        </div>
        <div>全部宝贝</div>
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
    <span>进店逛逛</span>

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

</style>