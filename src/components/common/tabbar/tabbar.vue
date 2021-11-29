<!--  -->
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name:'',
    }

</script>

<style scoped>

#tab-bar {

    width: 100%;
    display:flex;
    background-color:#f6f6f6;
    
    position:fixed;
    left:0;
    bottom:0;
    box-shadow:0px -1px 1px rgb(red, green, blue);
    z-index: 999;
  }

</style>