import { request } from "./requests";
export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}


export function RequestsHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}