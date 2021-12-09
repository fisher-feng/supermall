<template>
    <div id="cart">
        <nav-bar class="cart-nav-bar">
            <div slot="center">购物车({{length}})</div>
         </nav-bar>
         <cart-list></cart-list>
         <cart-calculate class="cart-calculate"></cart-calculate>
    </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'
import CartList from 'views/cart/ChildComponents/CartList.vue'
import CartCalculate from  './ChildComponents/CartCalculate.vue'
import {mapGetters} from 'vuex'//映射vuex 里面的getters
export default {
    name:'cart',
    components:{
        NavBar,
        CartList,
        CartCalculate
    },
    computed:{
        // ...mapGetters(['CartlistLength','Cartlist']),
        ...mapGetters({
            length:'CartlistLength',
            list:'Cartlist'
        })
    }
    
}
</script>

<style scoped>
#cart {
    position: relative;
    height: 100vh;
    border: 1px solid;
}
.cart-nav-bar {
    height: 44px;
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    background-color: var(--color-tiny);
}
.cart-calculate {
    position: absolute;
    bottom:44px;
  
}
</style>