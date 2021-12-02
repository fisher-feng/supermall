<!--  -->
<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" :key="index" 
          class="tab-control-item"
          :class="{active:index === currentIndex}"
          @click="itemClick(index)"
          >
          <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:'',
        data(){
          return{
            currentIndex:0
          }    
        },
        props:{
          titles:{
            type:Array,
            default(){
              return []
            }
          }
        },
        methods:{
          itemClick(index){
            this.currentIndex =index;
            this.$emit('tabClick', index)
          }
        }
    }

</script>

<style scoped>
.tab-control {
  /* z-index: 999; */
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #fff;
}
.tab-control-item {
  flex:1;
}
.tab-control-item span {
  padding: 5px;
}
.active span {
  border-bottom: 3px solid var(--color-tiny);
  color: pink;

}
</style>