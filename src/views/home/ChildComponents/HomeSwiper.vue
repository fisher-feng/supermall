<!--  -->
<template>
    <!-- <div class="HomeSwiper"> -->
      <swiper>
        <swiper-item  v-for="(item, id) in banners" v-bind:key="id">        
          <a v-bind:href="item.link">
            <img v-bind:src="item.image" @load="LoadImg">
          </a>
        </swiper-item>      
      </swiper>
    <!-- </div> -->
</template>

<script>

import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
    export default {
        name:'HomeSwiper',
        props:{
            banners: {
              type: Array,
              default() {
              return []
            }
        }
        },
        data () {
            return {
              IsLoadiImg:false
            };
        },
        components: {
          Swiper,
          SwiperItem
        },
        methods:{
          LoadImg(){
          if( !this.IsLoadiImg){
            this.$emit('swiperImg');
            this.IsLoadiImg = true;
          }
        
        }

    }

</script>

<style scoped>

</style>