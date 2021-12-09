export default {
  //content是store对象
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 查找之前数组中是否有该商品
      let oldProduct = context.state.Cartlist.find(item => item.iid === payload.iid) //如果条件成立，则原样返回，否则返回0
        // 判断oldProduct
      if (oldProduct) {
        context.commit('addCounter', oldProduct);
        resolve('当前商品数量加1')
      } else {
        payload.count = 1;
        context.commit('addToCart', payload);
        resolve('添加了新的商品')
      }
    })

  }
}