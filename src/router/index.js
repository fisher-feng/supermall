import Vue from 'vue'
import Router from 'vue-router'

// 解决重复点击路由报错的BUG
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

// 使用Router

Vue.use(Router)

const Home = () =>
  import ('../views/home/Home')
const Cart = () =>
  import ('../views/cart/Cart')
const ProFile = () =>
  import ('../views/profile/ProFile')
const Category = () =>
  import ('../views/category/Category')

export default new Router({
  routes: [{
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: '',
      component: Home
    },
    {
      path: '/category',
      name: '',
      component: Category
    },
    {
      path: '/cart',
      name: '',
      component: Cart
    },
    {
      path: '/profile',
      name: '',
      component: ProFile,
      mode: history
    }
  ],
  mode: 'history', //去掉哈希#符号

})