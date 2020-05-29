<template>
  <view class="container">
    <scroll-view class="scroll" scroll-y="true" @scrolltolower="scrolltolower">
      <view class="wrap">
        <view class="left">
          <image mode="aspectFill" :src="'https://s1.ax1x.com/2020/05/29/tm4Vcq.jpg'" />
        </view>
        <view class="right">
          <view class="title">美国工厂<text class="scro">5.8</text></view>
          <view>美国工厂 </view>
          <view>我节点萨克很快就撒谎的卡是简单化科技后打开手机端好</view>
        </view>
      </view>
      <view class="wrap">
        <view class="left">
          <image mode="aspectFill" :src="'https://s1.ax1x.com/2020/05/29/tm4Vcq.jpg'" />
        </view>
        <view class="right">
          <view class="title">美国工厂<text class="scro">5.8</text></view>
          <view>美国工厂 </view>
          <view>我节点萨克很快就撒谎的卡是简单化科技后打开手机端好</view>
        </view>
      </view>
      <view class="wrap">
        <view class="left">
          <image mode="aspectFill" :src="'https://s1.ax1x.com/2020/05/29/tm4Vcq.jpg'" />
        </view>
        <view class="right">
          <view class="title">美国工厂<text class="scro">5.8</text></view>
          <view>美国工厂 </view>
          <view>我节点萨克很快就撒谎的卡是简单化科技后打开手机端好</view>
        </view>
      </view>
      <view class="wrap">
        <view class="left">
          <image mode="aspectFill" :src="'https://s1.ax1x.com/2020/05/29/tm4Vcq.jpg'" />
        </view>
        <view class="right">
          <view class="title">美国工厂<text class="scro">5.8</text></view>
          <view>美国工厂 </view>
          <view>我节点萨克很快就撒谎的卡是简单化科技后打开手机端好</view>
        </view>
      </view>
      <view class="wrap">
        <view class="left">
          <image mode="aspectFill" :src="'https://s1.ax1x.com/2020/05/29/tm4Vcq.jpg'" />
        </view>
        <view class="right">
          <view class="title">美国工厂<text class="scro">5.8</text></view>
          <view>美国工厂 </view>
          <view>我节点萨克很快就撒谎的卡是简单化科技后打开手机端好</view>
        </view>
      </view>
      <!-- <view v-if="isShow" style="text-align: center;font-size:16px;color:#808080">没有更多数据了</view> -->
    </scroll-view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        isShow: false
      };
    },
    onLoad(option) {},
    methods: {
      scrolltolower(){}
    }
  }
</script>

<style lang="scss">
  .container {
    overflow: hidden;

    .scroll {
      // height: 667*2upx;
      height: 100vh;
    }

    .wrap {
      display: flex;
      border-bottom: 1px solid #C8C7CC;
      padding: 20upx 30upx;

      .left {
        width: 168upx;
        height: 208upx;

        image {
          width: 100%;
          height: 100%;
        }
      }

      .right {
        flex: 1;
        margin-left: 20upx;

        .title {
          font-size: 40upx;
          color: black;
        }

        view {
          font-size: 30upx;
          color: #C0C0C0;
        }

        .scro {
          background: rgba(247, 76, 49, 1);
          padding: 2upx 6px;
          border-radius: 6px;
          color: #fff;
          float: right;
          font-size: 25upx;
        }
      }
    }
  }
</style>
