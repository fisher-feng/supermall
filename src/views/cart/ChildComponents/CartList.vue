<template>
  <div>
    <div   >
      <cart-list-item v-for = "(item,index) in list" :key = "index" :product ="item"></cart-list-item>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CartListItem from './CartListItem.vue'
export default {
  name:'cartlist',
  components:{
    CartListItem
  },
  computed:{
    // ...mapGetters(['CartlistLength','Cartlist']),
    ...mapGetters({
        length:'CartlistLength',
        list:'Cartlist',
    })
}
}
</script>

<style>

</style>