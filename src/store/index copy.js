import Vue from 'vue'
import Vuex from 'vuex'

// 使用vuex
Vue.use(Vuex);

// 创建vuex对象
const store = new Vuex.Store({
  state: {
    aaa: 8,
    Cartlist: []
  },
  mutations: {
    // mutationsz中的每个方法
    addCounter(state, payload) {
      payload.count++;
      // state.aaa++;
    },
    addToCart(state, payload) {
      state.Cartlist.push(payload);
      // state.aaa++;
    }
  },
  // 为什么要在这里，不在mutations，因为让mutations的每个方法做的事尽可能比较单一，这样比较好，这是官方推荐的
  actions: {
    //content是store对象
    addCart(context, payload) {
      // 查找之前数组中是否有该商品
      let oldProduct = context.state.Cartlist.find(item => item.iid === payload.iid)
        // 判断oldProduct
      if (oldProduct) {
        context.commit('addCounter', oldProduct);
      } else {
        payload.count = 1;
        context.commit('addToCart', payload);
      }
    }
  }
})

export default store