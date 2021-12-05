/* 混入 */
import { debounce } from "./utils.js"

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    let newRefresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      newRefresh()
    }
    this.$bus.$on('detailItemImageLoad', this.itemImgListener)
    console.log('我是混入的内容');
  }
}