<template>
	<view class="container">
		<!-- 正在上映的电影-北京 banner -->
		<view class="bannerList">
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="1500">
				<swiper-item>
					<image mode="widthFix" class="slider" :src="'https://s1.ax1x.com/2020/05/29/tm4QN4.jpg'"/>
				</swiper-item>
        <swiper-item>
        	<image mode="widthFix" class="slider" :src="'https://s1.ax1x.com/2020/05/29/tm4QN4.jpg'"/>
        </swiper-item>
        <swiper-item>
        	<image mode="widthFix" class="slider" :src="'https://s1.ax1x.com/2020/05/29/tm4QN4.jpg'"/>
        </swiper-item>
			</swiper>
		</view>
		<!-- 推荐 -->
		<view class="list">
			<view class="title">title<text>></text></view>
			 <scroll-view scroll-x="true" style="white-space: nowrap;">
			  <view class="slider">
				  <image mode="aspectFill" :src="'https://s1.ax1x.com/2020/05/29/tm4QN4.jpg'"/>
				  <view class="name">xxx</view>
			  </view>
        <view class="slider">
          <image mode="aspectFill" :src="'https://s1.ax1x.com/2020/05/29/tm4QN4.jpg'"/>
          <view class="name">xxx</view>
        </view>
        <view class="slider">
          <image mode="aspectFill" :src="'https://s1.ax1x.com/2020/05/29/tm4QN4.jpg'"/>
          <view class="name">xxx</view>
        </view>
        <view class="slider">
          <image mode="aspectFill" :src="'https://s1.ax1x.com/2020/05/29/tm4QN4.jpg'"/>
          <view class="name">xxx</view>
        </view>
        <view class="slider">
          <image mode="aspectFill" :src="'https://s1.ax1x.com/2020/05/29/tm4QN4.jpg'"/>
          <view class="name">xxx</view>
        </view>
			</scroll-view> 
		</view>
     <!-- 推荐 -->
     <view class="list">
     	<view class="title">title<text>></text></view>
     	 <scroll-view scroll-x="true" style="white-space: nowrap;">
     	  <view class="slider">
     		  <image mode="aspectFill" :src="'https://s1.ax1x.com/2020/05/29/tm4QN4.jpg'"/>
     		  <view class="name">xxx</view>
     	  </view>
     	</scroll-view> 
     </view> 

	</view>
</template>

<script>
	export default {
		data() {
			return {
				moviesList:[]
			}
		},
		onReady(){
      uni.hideHomeButton()
		},
		methods: {}
	}
</script>

<style scoped lang="scss">
.container{
	background:#2C405A;
	.bannerList{
		.swiper{
			height:400upx;
			.slider{
					width:100%;
				   }
		}
	}
	.list{
		margin-top:40upx;
		background:#2e4461;
		.title{
			color: #fff;
			margin-left :20upx;
			padding:10upx 0;
			text{
				float:right;
				padding:0 10upx;
			}
		}
		.slider{
			width: 180upx;
			margin-left:20upx;
			display:inline-block;
			text-overflow:ellipsis;
			image{
				width: 100%;
				height:300upx;
			}
			.name{
				text-align: center;
				color:#fff;
				overflow: hidden;
			}
		}
	}
}
</style>
