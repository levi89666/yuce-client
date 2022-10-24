import { request } from "../utils/request"

// 热点咨询
export function getHotNews(param) {
  return request({
    url: "/api/yuce/v1/hot_news",
    method: "get",
    param
  })
}
// 世界杯新闻
export function getWorldNews(param) {
  return request({
    url: "/api/yuce/v1/world_cup_feature",
    method: "get",
    param
  })
}// 世界杯新闻

export function getHomeNews(param) {
  return request({
    url: "/api/yuce/v1/home_news",
    method: "get",
    param
  })
}