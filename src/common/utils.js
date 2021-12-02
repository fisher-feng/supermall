/* 防抖节流 */
export function debounce(func, delay) {
  let timer = null
  return function(...args) {
    //这里
    if (timer) clearTimeout(timer) // 这里停止定时器有什么用？比如应用到图片刷新：只要还有图片在更新，我就停止上一次的定时器，保证只执行一次。上一次调用setTimeout，因为setTimeout每次被调用返回的值都一样，如果不停止的的话，它将会有很多的setTimeout同时执行
    timer = setTimeout(() => {
      func.apply(this, args) //这里的apply有什么用？apply指向调用debounce的对象，相当于this.fn(args);
        //为什么不直接写成this.fn(args)，apply是为了扩展应用
        // console.log('----');
    }, delay);
  }
}