import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
// 使用vuex
Vue.use(Vuex);

// 创建vuex对象
const store = new Vuex.Store({
  state: {
    aaa: 8,
    Cartlist: []
  },
  mutations,
  // 为什么要在这里，不在mutations，因为让mutations的每个方法做的事尽可能比较单一，这样比较好，这是官方推荐的
  actions,
  getters

})

export default store