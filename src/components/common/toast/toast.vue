<template>
  <div class="toast" v-show = "IsShow" >
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name:'toast',
  data(){
    return{
      IsShow:false,
      message:'默认文字'
    }
  },
  methods:{
    show(message,delay = 2000){
      let timer = null
      this.IsShow = true;
      this.message = message;
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        this.IsShow = false;
        this.message = '';
      }, delay);
    }
  }
}
</script>

<style>
.toast {
  position: fixed;
  z-index: 999;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background-color: rgba(10, 2, 0, .7);
  padding: 5px 10px;
  color: #fff;
  font-size: 20px;
   white-space: nowrap;

}
</style>