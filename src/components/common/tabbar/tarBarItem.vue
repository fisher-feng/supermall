<!--  -->
<template>
    <div class="tab-bar-item" v-on:click="itemCick">
      <!--slot外层加div的原因是怕slot有些属性被替换掉导致无法生效，最好这样做  -->
      <div v-if='!isActive' >
         <slot name="item-icon"></slot>
      </div>

      <div v-else>
           <slot  name="item-icon-active"></slot>
      </div>
  
      <div v-bind:class="{active:isActive}" v-bind:style="activeStyle">
        <slot name="item-text"></slot>
      </div>
      
    </div>
</template>

<script>
    export default {
        name:'',
        props:{
          path: String ,
          activeColor:{
            type:String,
            default:'red'    
          }
        },
        data(){
          return{
            // isActive:true,
            // path:'/home'
          }
        },
        computed:{
            isActive(){
              return this.$route.path.indexOf(this.path) !== -1//-1是没找到，route是处于活跃的，这里判断活跃的path和传进来的path是否一致
            },
            activeStyle(){
              return this.isActive ? {color:this.activeColor} : {}
            }
        },
        methods:{
          itemCick(){
            console.log('aaaa');
            this.$router.replace(this.path);
          }
        }
    }
</script>

<style  scoped>

  .tab-bar-item{
    flex:1;
    text-align:center;
    height:49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    vertical-align: middle;
    height: 24px;
    width: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
  }
  /* .active{
    color: red;
  } */
</style>