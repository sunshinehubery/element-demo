<template>
	<div>
		<video 
			id="videoA" 
			class="videoA"  
			webkit-playsinline
			playsinline
			x5-video-player-type="h5-page">
				<source id="mainvideo" src="src/assets/test.mp4">
		</video>
	</div>
</template>
<script>
export default {
	data() {
		return {
		}
	},
	methods: {	
		initVideo() {
			//初始化视频方法
			let myPlayer = this.$video(videoA, {
				//确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
				controls: true,
				//自动播放属性,muted:静音播放
				autoplay: "muted",
				//建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
				preload: "auto",
				//设置视频播放器的显示宽度（以像素为单位）
				width: "750px",
				//设置视频播放器的显示高度（以像素为单位）
				height: "400px"
			});
			document.addEventListener('WeixinJSBridgeReady',function onBridgeReady() {
				// 通过下面这个API隐藏底部导航栏
				WeixinJSBridge.call('hideToolbar');
				WeixinJSBridge.call('hideToolbar');
			});
		},
	},
	mounted() { 
    this.initVideo();
  },
}
</script>
<style scope>
	.vjs-tech{
		width: 750px;
		height: 300px;
	}
</style>