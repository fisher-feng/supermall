<template>
  <div class="detail-swiper">
    <swipe class="my-swipe">
      <swipe-item class="slide" v-for="(item, id) in TopImages" v-bind:key="id">           
        <img v-bind:src="item">
      </swipe-item>      
    </swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'common/plug/swiper/index.js'

export default {
  name:'',
  components:{
    Swipe,
    SwipeItem
  },
  props:{
    TopImages:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.detail-swiper {

}
.my-swipe {
  height:300px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.my-swipe img {
  width: 100%;
}
</style>

