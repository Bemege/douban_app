<template>
	<view class="container">
		<scroll-view class="scroll" scroll-y="true" @scrolltolower="scrolltolower">
			<view class="wrap" v-for="(item,index) in moviesList" :key="index" @click="toDetails(item.id)">
				<view class="left">
					<image mode="aspectFill" :src="item.images.small" />
				</view>
				<view class="right">
					<view class="title">{{ item.title }}<text class="scro">{{ item.rating.average||"即将上映" }}</text></view>
					<view>{{ item.year }}</view>
					<view>{{ item.genres.join("，") }}</view>
					<view>
						<text v-for="(it,idx) in item.casts" :key="idx">{{ idx+1 !== item.casts.length? it.name+'，' : it.name  }}</text>
					</view>
				</view>
			</view>
			<view v-if="isShow" style="text-align: center;font-size:16px;color:#808080">没有更多数据了</view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		comingSoon,
		newMovies,
		top250
	} from "../../apis"
	export default {
		data() {
			return {
				isShow: false,
				testList: ["即将上映的电影", "豆瓣电影新片榜", "豆瓣电影Top250"],
				typeNum: -1,
				start: 0,
				moviesList: []
			};
		},
		onLoad(option) {
			uni.showLoading({
				title: "加载中",
				mask: true
			})
			this.typeNum = this.testList.indexOf(option.title)
			this.getClassData(this.typeNum)({
				start: 0,
				count: 10,
				city: this.$store.state.city
			}).then(res => {
				let [err, data] = res
				this.moviesList = data.data.subjects
				uni.hideLoading()
			})
		},
		methods: {
			scrolltolower() {
				uni.showLoading({
					title: "加载中",
					mask: true
				})
				this.start += 10
				this.getClassData(this.typeNum)({
					start: this.start,
					count: 10,
					city: this.$store.state.city
				}).then(res => {
					let [err, data] = res
					let subjects = data.data.subjects
					if (subjects.length === 0) {
						this.isShow = true
					}
					// 合并数组
					Array.prototype.push.apply(this.moviesList, subjects)
					uni.hideLoading()
				})
			},
			getClassData(state) {
				let fnList = [comingSoon, newMovies, top250]
				return fnList[state]
			},
			toDetails(id){
				uni.navigateTo({
					url: "../dtails/dtails?id=" + id
				})
			},
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
