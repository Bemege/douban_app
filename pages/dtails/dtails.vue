<template>
	<view class="container">
			<image class="repeat-img" :src="'https://s1.ax1x.com/2020/05/29/tm4Vcq.jpg'"/>
			<view class="shade">
			 <image class="repeat-img" :src="'https://s1.ax1x.com/2020/05/29/tm4Vcq.jpg'"/>
				<view class="nar">
					<view class="title">
						title
					</view>
					<view class="eva">
						<view>评分:8.5</view>
					</view>
					<view class="des">
						<view>摘要</view>
					</view>
					<view class="cont">
						<text>
							这是摘要哦这是摘要哦这是摘要哦这是摘要哦这是摘要哦这是摘要哦这是摘要哦这是摘要哦
              这是摘要哦这是摘要哦这是摘要哦这是摘要哦这是摘要哦这是摘要哦这是摘要哦这是摘要哦
              这是摘要哦这是摘要哦这是摘要哦这是摘要哦这是摘要哦这是摘要哦这是摘要哦这是摘要哦
              这是摘要哦这是摘要哦这是摘要哦这是摘要哦这是摘要哦这是摘要哦这是摘要哦这是摘要哦
						</text>
					</view>
				</view>
			</view> 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				details:{}
			};
		},
		onLoad(option){}
	}
</script>

<style lang="scss" scoped>
.container{
	position:fixed;
	top:0;
	bottom:0;
	left:0;
	right:0;
	.repeat-img{
		width: 100%;
		height:100%;	
	}
	.shade{
		width:100%;
		height:100%;
		z-index:100;
		overflow-y: auto;
		position: absolute;
		background:rgba(255,255,255,0.7);
		top:0;
		text-align:center;
		image{
			width: 640upx;
			height:800upx;
			margin-top:40upx;
		}
	}
	.nar{
		color:#444;
		padding:0 60upx;
		.title{
			font-size:40upx;
			font-weight: bold;
		}
		.eva{
			font-size:30upx;
			text-align: left;
			view{
				margin-top:20upx;
			}
		}
		.des{
			font-size:40upx;
			text-align: left;
			font-weight: bold;
			margin-top:20upx;
		}
		.cont{
			margin-top:20upx;
			text-align: left;
		}
	}
}
</style>
