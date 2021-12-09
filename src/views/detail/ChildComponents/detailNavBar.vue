<template>
  <div class="detailnavbar">
    <nav-bar class="home-nav">
          <div slot="left" class="back" @click="ClickLeft">
            <img src="~assets/img/common/back.svg" alt="">
          </div>
          <div slot="center" class="center">
            <div v-for="(item,index) in titles" :key="index"
                 class="item"
                 @click="itemClick(index)"
                 :class="{active:index === currentIndex}"

            >{{item}}
            </div>
          </div>
          <div slot="right" class="goto" @click="Clickgoto">
            <img src="~assets/img/common/back.svg" alt="">
            <!-- <div class="img"></div> -->
          </div>
     </nav-bar>
  </div>
</template>
<script>

import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  name:'detailnavbar',
  components:{
    NavBar
  },
  props:{
    propsIndex:0
  },
  data(){
    return{
     titles:['商品','参数','评论','推荐'],
     currentIndex:0
    }
   
  },
  computed:{
    computedIndex(){
      return this.propsIndex;
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
      this.$emit('NavBarPostion',index)
    },
    ClickLeft(){
      this.$router.back()
      // this.$router.go(-1)
    },
    Clickgoto(){
      this.$router.go(1)
    }
  },
  watch:{
    computedIndex(newValue,oldValue){
      this.currentIndex = this.propsIndex;//不能直接监测props，可以检测computed和methods...
      // console.log('computedIndex的值为'+ this.propsIndex);
      // console.log(newValue,oldValue);
    }
  }
}
</script>
<style scoped>
.detailnavbar {
  /* margin-bottom: 2px; */
}

.center {
  display: flex
}
.item {
  flex: 1;
}
.active {
  /* border-bottom: 3px solid var(--color-tiny) ; */
  color: pink;
}
.back img{
 
}
.goto img{
  transform: rotate(-180deg);
}

</style>
