<template>
	<div class="activityAll" id="activity">
		<div class="activityContent">
			<ul>
				<li>
					<h1>优惠</h1>
					<ul class="activityContent-ul">
						<li>
							<p><span>满减</span>满27减15，满49减20，满100减50</p>
						</li>
						<li>
								<p><span>津贴</span>满26可使用津贴6元</p>
						</li>
						<li>
								<p><span class="activityContent-span">会员</span>超级会员领6元无门槛</p>
						</li>
						<li>
								<p><span>配送</span>配送费立减3元</p>
						</li>
						<li>
								<p><span>特价</span>特价商品5.9元起</p>
						</li>
						<li>
								<p><span>首单</span>饿了么新用户立减20元</p>
						</li>
					</ul>
				</li>
				<li>
					<h1>服务</h1>
					<p><span class="activityContent-spans">食安全</span>该食品已由国泰保险承担，食品安全有保障</p>
				</li>
				<li>
					<h1>公告</h1>
					<p class="activityContent-p">该食品已由国泰保险承担，食品安全有保障。有一大波福利正在赶来，如果有什么安全问题，请及时联系我们.该食品已由国泰保险承担，食品安全有保障。有一大波福利正在赶来，如果有什么安全问题，请及时联系我们:</p>
				</li>
			</ul>
		</div>
		<div class="closeIcon">
			<i class="el-icon-arrow-up" id="elIcon" @click="closeActivity"></i>
		</div>
	</div>
</template>
<<script>
export default {
	name: "Header",
	methods: {
		//打開活動頁面
		getDivHeight(height,bottomVal){
			var div = document.getElementById("activity");
			var tm = setInterval(() => {
				if((height-div.offsetHeight) < 100){
					div.style.height = height + "px";
					clearInterval(tm);
				}else{
					div.style.height = div.offsetHeight + 100 +"px";
				}
			},30)
			div.style.bottom = 0 - bottomVal + "px";
		},
		//刷新頁面
		flushSetHeight(height){
			document.getElementById("activity").style.height = height + "px";
		},
		//關閉活動頁面
		closeActivity(){
			this.$emit("openActivity");
		},
	},
}
</script>
<style scoped>
	li{
		list-style: none;
	}
  .activityAll{
    width: 10rem;
    z-index: 101;
    position: absolute;
    bottom: 0rem;
    background: #fff;
  }
  .activityContent-ul{
	  padding: 0;
  }
	.activityContent-span{
		color:#d5bea5
	}
	.activityContent-spans{
		border: 1px solid #e2e2e2;
		color: #828282;
	}
	.activityContent-p{
		width:670px;
	}
  .el-icon-arrow-up{
    position: relative;
    left: 325px;
    bottom: -300px;
    font-size: 100px;
    color: gray;
  }
  .activityContent{
    width: 10rem;
    height: 6rem;
  }
	.activityContent > ul > li{
		margin-top: 50px;
	}
	.activityContent h1{
		color: #434343;
		font-weight: bold;
		margin-bottom: 20px;
	}
	.activityContent p{
		color: #828282;
	}
	.activityContent span{
		color: #f98172;
		margin-right: 20px;
	}
</style>