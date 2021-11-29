import axios from 'axios'

// 方式1
// export function request(config,success,failure){
//   // 创建axios的实例
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:500//ms
//   })
//   // 发送真正的 网络请求
//   instance(config).then(res =>{
//     success(res);
//   })
//   .catch(err =>{

//     failure(err)
//   })
// }


// 方式2
// export function request(config){
//   return new Promise((resolve,reject) =>{
//     // 创建axios的实例
//     const instance = axios.create({
//       baseURL:'http://123.207.32.32:8000',
//       timeout:500//ms
//     })
//     // 发送真正的 网络请求
//     instance(config)
//     .then(res =>{
//       resolve(res);
//     })
//     .catch(err =>{
//       reject(err)
//     })

//   })
// }
// 方式3最终方案
export function request(config) {

  // 创建axios的实例
  const instance = axios.create({
      baseURL: 'http://152.136.185.210:7878/api/hy66',
      timeout: 500 //ms
    })
    // 2.1 axios的拦截器
    // axios.interceptors//拦截axios全局
    /* 请求拦截 */
    // use第一个参数是config，第二个参数是err

  instance.interceptors.request.use(config => {
      // console.log(config);
      return config //一定要返回config，不然会出错，会转到err打印错误信息
    }, err => {
      console.log(err);
    })
    /* 响应拦截 */
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data //一般要取的信息是data
  }, err => {
    console.log(err);
  })

  // 3发送真正的网络请求
  return instance(config); //instance返回的是一个promise对象，所以没必要使用方式2要手动return一个promise
}