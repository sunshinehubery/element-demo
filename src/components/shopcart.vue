<template>
	<div class="shopcart">
		<div class="cart">
			<!-- 左边购物车 -->
			<div class="cart_left">
				<div class="logo-wrapper" v-model="countCaseOfParent">
					<div class="logo" :class="{'order':countCaseOfParent > 0}">
						<i class="el-icon-shopping-cart-2 icon_cart" :style="{'color' : (countCaseOfParent > 0 ? '#fff':'#72777d')}"></i>
					</div>
				</div>
				<div class="cart_number" v-if="countCaseOfParent > 0">
					<h3>{{countCaseOfParent}}</h3>
				</div>
			</div>
			<!-- 右边总金额等信息 -->
			<div class="cart_right">
				<h2 class="cart_price" :class="{'count':countCaseOfParent > 0}">￥{{countPriceOfParent}}</h2>
				<span class="distribution_price">另需配送费4元</span>
				<h2 class="settlement1" :style="{'display' : (sendingPriceOfParent > 0 ? 'block':'none')}">差￥{{sendingPriceOfParent}}元起送</h2>
				<button class="settlement2" :style="{'display' : (sendingPriceOfParent == 0 ? 'block':'none')}" @click="pay()">去结算</button>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name:"shopcart",
		data(){
			return {
      }
		},
		methods: {
			//结算支付
			pay(){
				this.$emit("payOfParent");
			}
		},
		props:["countCaseOfParent","countPriceOfParent","sendingPriceOfParent"],
	}
</script>
<style scoped>
	.shopcart{
		width: 750px;
		height: 100px;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 50;
	}
	.cart{
		width: 750px;
		height: 100px;
		display: flex;
		background: #141d27;
		font-size: 0;
		color: rgba(255,255,255,0.4);
	}
	.cart_left{
		width: 160px;
		height: 160px;
	}
	.cart_right{
		width: 590px;
		height: 590px;
	}
	.logo-wrapper{
		width: 120px;
		height: 120px;
		position: relative;
		top: -20px;
		margin: 20px;
		background: #141d27;
		border-radius: 50%;
	}
	.order{
		background: #00a0dc!important;
	}
	.cart_number{
		width: 45px;
		height: 30px;
		border: 0;
		border-radius: 15px;
		background: red;
		position: relative;
		top: -175px;
		left: 90px;
		color: #fff!important;
	}
	.cart_number h3{
		width: 45px;
		height: 30px;
		margin: 0;
		font-size: 24px;
		text-align: center;
		line-height: 30px;
	}
	.logo{
		width: 90px;
		height: 90px;
		padding: 15px;
		background: #2b343c;
		margin: 0 auto;
		border-radius: 50%;
		position: relative;
		top: -15px;
	}
	.icon_cart{
		width: 75px;
		height: 75px;
		font-size: 60px;
	}
	.cart_right{
		margin: 0;
	}
	.cart_price{
		float: left;
		width: 135px;
		height: 75px;
		font-size: 45px;
		line-height: 75px;
		border-right: 1px solid #72777d;
		margin: 12.5px 0!important;
	}
	.count{
		color: #fff!important;
	}
	.distribution_price{
		float: left;
		width: 185px;
		height: 75px;
		font-size: 27px;
		line-height: 75px;
		margin: 12.5px 30px!important;
	}
	.settlement1{
		float: left;
		width: 210px;
		height: 100px;
		color: #72777d!important;
		font-size: 27px;
		background: #2b333b;
		text-align: center;
		margin: 0 auto;
		line-height: 100px;
	}
	.settlement2{
		float: left;
		width: 210px;
		height: 100px;
		color: #fff!important;
		font-size: 27px;
		background: #00b43c;
		text-align: center;
		margin: 0 auto;
		line-height: 100px;
		border: 0;
	}
</style>