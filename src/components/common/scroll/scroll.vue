<!--  -->
<template>
    <div class="wrapper" ref="wrapper">
        <div class="concent"> 
          <slot></slot>
        </div>
    </div>    
</template>

<script>
import BScroll from 'better-scroll'
    export default {
        name:'scroll',
        data () {
            return {
              scroll:null,
            }
        },
        mounted() {
           // 1.创建BScroll对象
          this.scroll = new BScroll(this.$refs.wrapper, { 
            })
          // console.log('aaa');
        },
    }

</script>

<style scoped>

</style>