<!--  -->
<template>
    <div class="recommend">
        <div v-for="(item,id) in recommends" v-bind:key="id" class="recommend-item">
          <a v-bind:href="item.link">
            <img v-bind:src="item.image" @load="ImgLoad">
            <div>{{item.title}}</div>
          </a>
        </div>
    </div>
</template>

<script>
    export default {
        name:'',   
        props:{
          recommends:{
            type:Array,
            default(){
              return[]
            }
          }      
        },
        data(){
          return{
            IsLoadiImg:false
          }
        },
        methods:{      
          ImgLoad(){
            if(!this.IsLoadiImg){
              this.$emit('RecommendImg')
              this.IsLoadiImg = true
            }
          }  
        }
       
    }

</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;

    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
    overflow: hidden;
  }

  
  .recommend-item {
    flex: 1;
  }

  .recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>