<template>
  <!-- <div> -->
    <swipe class="my-swipe">
      <swipe-item class="slide" v-for="(item,index) in slides" :key="index">
        <a v-bind:href="item.link">
            <img v-bind:src="item.image" @load="LoadImg">
        </a>
      </swipe-item>
    </swipe>
    <!-- <h1>Change swipe</h1>
    <swipe class="my-swipe" ref="mySwipe2" :auto="0" :continuous="false" :show-indicators="false" @change="changeSwipe">
      <swipe-item class="slide1">Slide1</swipe-item>
      <swipe-item class="slide2">Slide2</swipe-item>
      <swipe-item class="slide3">Slide3</swipe-item>
    </swipe>

    <button @click="goto(2)">goto page 3</button>
    <button @click="goto(0)">goto page 1</button>

    <br>

    <h1>Drag single swipe</h1>
    <swipe class="my-swipe" :speed="900" :auto="0" :show-indicators="false" :no-drag-when-single="false">
      <swipe-item class="slide1">SINGLE SLIDE</swipe-item>
    </swipe>

    <br>

    <h1>Default index</h1>
    <swipe class="my-swipe" :defaultIndex="1" :auto="0">
      <swipe-item class="slide1">Slide1</swipe-item>
      <swipe-item class="slide2">Slide2</swipe-item>
      <swipe-item class="slide3">Slide3</swipe-item>
    </swipe> -->
  <!-- </div> -->
</template>

<script>
  import { Swipe, SwipeItem } from './index.js';
  export default {
    components: {
      swipe: Swipe,
      swipeItem: SwipeItem
    },
    data(){
      return{
        IsLoadiImg:false
      }
    },
    methods: {
      goto(index) {
        this.$refs.mySwipe2.goto(index);
      },
      changeSwipe(newIndex, oldIndex) {
        console.log(`swipe from ${oldIndex} to ${newIndex}`);
      },
      LoadImg(){
        // 为什么只判断一次，因为只要有一张就能判断tabcontrol的offesetTop的位置
        if( !this.IsLoadiImg){
          this.$emit('swiperImg');
          this.IsLoadiImg = true;
        }
      }
    },
    props:{
      slides:{
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .my-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }

  .my-swipe img {
    width: 100%;
    height: 100%;
  }

 
</style>
