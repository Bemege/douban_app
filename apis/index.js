const baseUrl = "https://douban-api.uieee.com"

// 正在上映的电影接口
export const getInTheaters = params => (
  uni.request({
    url: `${baseUrl}/v2/movie/in_theaters`,
    data: params,
    header: {
      "content-type": "json"
    }
  })
)

// 即将上映的电影接口
export const comingSoon = params => (
  uni.request({
    url: `${baseUrl}/v2/movie/coming_soon`,
    data: params,
    header: {
      "content-type": "json"
    }
  })
)

// 豆瓣电影新片榜接口
export const newMovies = params => (
  uni.request({
    url: `${baseUrl}/v2/movie/new_movies`,
    data: params,
    header: {
      "content-type": "json"
    }
  })
)

// top250电影榜接口
export const top250 = params => (
  uni.request({
    url: `${baseUrl}/v2/movie/top250`,
    data: params,
    header: {
      "content-type": "json"
    }
  })
)

// 电影详情接口
export const details = id => (
  uni.request({
    url: `${baseUrl}/v2/movie/subject/${id}`,
    header: {
      "content-type": "json"
    }
  })
)