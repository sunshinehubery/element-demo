<template>
	<div class="navbar" id="navbar">
		<i class="el-icon-back"></i>
		<i class="el-icon-search"></i>
		<i class="el-icon-share"></i>
		<i class="el-icon-view"></i>
	</div>
</template>
<script>
	export default{
		name:"headerNavbar",
		methods: {
			changeOpacity(num){
				//console.log(num);
				let opacityVal = 1 - (num/100);
				document.getElementById("navbar").style.opacity = opacityVal;
			},
			getNavbarHeight(){
				return document.getElementById("navbar").offsetHeight;
			},
		},
	}
</script>
<style scoped>
	.navbar{
    width: 10rem;
    height: 2.667rem;
    background-image: url("../../src/assets/background.png");
    background-size: 10rem 2.667rem;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 50;
  }
	.navbar >  i{
    font-size: 0.6rem;
    color: #fff;
    margin-top: 0.7rem;
  }
	.el-icon-back{
		margin-left: 0.4rem
	}
	.el-icon-search{
		margin-left: 5.333rem
	}
	.el-icon-share{
		margin-left: 0.6rem
	}
	.el-icon-view{
		margin-left: 0.6rem
	}
</style>