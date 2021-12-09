<template>
  <div class="calculate">
    <div class="all-selete" @click="ClickAllSelete">
      
      <img src="~assets/img/cart/tick.svg" :class="{'IsAll': IsAll}">
      <span>全选</span>

    </div>
    <div class="total">合计￥{{totalPrice}}</div>
    <div class="goto-calculate" @click="clickCalculate">去结算({{SeleteCount}})</div>
  </div>
</template>

<script>
export default {
  name:'CartCalculate',
  methods:{
    ClickAllSelete(){
      if(this.IsAll){//如果都选中的前提下
        this.$store.state.Cartlist.forEach(item => {
          item.checked = false
        });
      }else{
         this.$store.state.Cartlist.forEach(item => {
          item.checked = true
        });
      }
    },
    clickCalculate(){
      if(!this.IsAll){
        this.$toast.show('请选择需要购买的商品')
      }
    }
  },
  computed:{
    totalPrice(){
      return this.$store.state.Cartlist.filter((item) =>{
        return item.checked;
      })
      .reduce((preValue,item) =>{
        return preValue + item.price*item.count
      },0).toFixed(2)//这是啥函数...
    },
    SeleteCount(){
      // return this.$store.state.Cartlist.filter( item => item.checked).length//返回选中个数
       return this.$store.state.Cartlist.filter((item) =>{
        return item.checked;
      })
      .reduce((preValue,item) =>{
        return preValue + item.count
      },0)//这是啥函数...
    },
    IsAll(){
      // return !this.$store.state.Cartlist.filter(item => !item.checked).length
      if(this.$store.state.Cartlist.length ===0 )return false
      return !this.$store.state.Cartlist.find(item => !item.checked)

    }
  }
}
</script>

<style scoped>
.calculate {
  height: 44px;
  width: 100%;
  display: flex;
  align-items: center;
  white-space: normal;
  background-color: #E8E8E8;
}
.all-selete {
  width: 60px;
  margin-left: 20px;
}
.total {
  /* 铺满剩余空间 */
   flex: 1;
   text-align: center;
}
.goto-calculate {
  width: 90px;
  height: 44px;
  text-align: center;
  line-height:44px ;
  background-color: red;
  color: #fff;
  font-weight: 800;
}
.all-selete img{
 
  border-radius: 9px;
  border: 1px solid violet;
  margin-right: 5px;
}
.IsAll {
   background-color: violet;
}
</style>