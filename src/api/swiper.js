import request from '@/utils/request'
const baseURL = 'http://www.cloudmusic.hxin2020.top:3000'

export function fetchList() {
  return request({
    url: `${baseURL}/swiper/list`,
    method: 'get'
  })
}

export function del(params) {
  return request({
    params,
    url: `${baseURL}/swiper/del`,
    method: 'get'
  })
}
