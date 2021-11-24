<!--  -->
<template>
    <div id="hy-swiper">
      <div class="swiper">
         <slot></slot>
      </div>
       
    </div>
</template>

<script>

import {Swipe,SwipeItem} from 'vue-swipe' ;

    export default {
        name:'',
        props:{
          

        },
        data () {
            return {
            };
        },
    }

</script>

<style scoped>


.swiper{
  display: flex;
}
#hy-swiper {
    background-color: turquoise;
    overflow: hidden;
    position: relative;
}
</style>