<!--  -->
<template>

    <div class="GoodList">
          <good-list-item  v-for="(item, id) in goodsData" :goods-item="item" :key="id"> 
          </good-list-item>
    </div>
   
</template>

<script>
    import GoodListItem from './GoodListItem.vue'

    export default {
        name:'',
        components:{
          GoodListItem
        },
        props:{
          goodsData:{
            type:Array,
            default(){
              return []
            }
          }
        }
    }

</script>

<style scoped>
.GoodList{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 5px;
}
</style>