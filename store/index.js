import Vue from 'vue'
import Vuex from 'vuex'
// 引入腾讯地图jssdk
import QQMapWX from '../static/js/qqmap-wx-jssdk.min.js'
Vue.use(Vuex)

import { getInTheaters } from '../apis'

export default new Vuex.Store({
  state: {
    city: "北京市",
    nowPlayingList: []
  },
  mutations: {

  },
  actions: {
    getCity(context) {
      uni.showLoading({
        title: "加载中"
      })
      // 检测用户是否授权
      uni.authorize({
        scope: "scope.userLocation",
        success() {
          // 引入腾讯地图api
          let qqmapsdk = new QQMapWX({
            key: '4W4BZ-MH7AU-FDWVD-2YIHB-2YHIE-XDBJ4'
          });
          uni.getLocation({
            type: 'gcj02',
            success(res) {
              // 调用腾讯地图逆地址解析
              qqmapsdk.reverseGeocoder({
                location: {
                  latitude: res.latitude,
                  longitude: res.longitude
                },
                success(res){
                  context.state.city = res.result.address_component.city
                  let data = {
                    start: 0,
                    count: 8,
                    city: res.result.address_component.city
                  }
                  getInTheaters(data).then(res => {
                    let [err, data] = res
                    context.state.nowPlayingList = data.data.subjects
                    uni.hideLoading()
                  })
                },
                fail(err){}
              })
            }
          });
        },
        fail(err) {
          uni.showToast({
              title: '需要获取您的位置,否则部分功能不能使用',
              duration: 2000,
              icon: "none"
          });
        }
      })
    }
  }
})
