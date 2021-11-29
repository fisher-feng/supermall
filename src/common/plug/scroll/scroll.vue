<!--  -->
<template>
   <div class="wrapper" ref="wrapper">
    <div class="content">
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
        props:{
          probeType:{
            type:Number,
            default:0
          },
          pullUpLoad:{
            type:Boolean,
            default:false
          }
        },
        mounted() {
           // 1.创建BScroll对象
          this.scroll = new BScroll(this.$refs.wrapper, {
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad, 
          })
          // 监听滚动位置
          this.scroll.on('scroll',position => {
            // console.log(position);
            this.$emit('scroll',position)
          })
          // 3.监听上拉事件
          this.scroll.on('pullingUp',() => {
          //  console.log('上啦加载更多');
          this.$emit('pullingUp')
         })
          
        },
        methods:{
          finishPullUp(){
            this.scroll.finishPullUp()
          },
          scrollTo(x,y,time){
            this.scroll.scrollTo(x,y,time)
          },
          // 重新计算content的高度
          refresh(){
            this.scroll.refresh()
          }
        }
    }

</script>

<style scoped>
/* 先给固定高度，后面再修复bug */
.content {
  /* height: 8000px; */
}
</style>