import Vue from 'vue'
import Router from 'vue-router'

// // 解决重复点击路由报错的BUG,我这里降低了router版本就不用这里了
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch((err) => err)
// }

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
const Detail = () =>
  import ('../views/detail/detail')

export default new Router({
  routes: [{
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProFile,
      mode: history
    },
    // ：是动态路由
    {
      path: '/detail/:iid',
      name: 'detail',
      component: Detail


    }
  ],
  mode: 'history', //去掉哈希#符号

})