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