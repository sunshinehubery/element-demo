<template>
	<div class="search" id="search">
    <div class="searchContent">
      <div class="el-icon-back"></div>
      <div class="searchInput">
        <input placeholder="想吃什么搜一搜"/>
      </div>
      <div class="el-icon-search"></div>
    </div>
	</div>
</template>
<script>
	export default{
		name:"headerSearch",
    methods: {
      changeOpacity(num){
        let opacityVal = num/100;
				document.getElementById("search").style.opacity = opacityVal;
      },
      getSearchHeight(){
        return document.getElementById("search").offsetHeight;
      }
    },
	}
</script>
<style scoped>
	.search{
    width: 10rem;
    height: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    background-color: #fff;
    opacity: 0;
  }
  .searchContent{
    width: 9rem;
    height: 1rem;
    margin: 0.5rem;
  }
  .el-icon-back{
    width: 1rem;
    float: left;
    font-size: 1rem;
    margin-right: 0.5rem;
  }
  .el-icon-search{
    width: 1rem;
    float: left;
    font-size: 1rem;
    margin-left: 0.5rem;
  }
  .searchInput input{
    float: left;
    width: 6rem;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: #e6e6e6;
    border: 0;
    text-indent: 0.5rem;
    font-size: 0.4rem;
  }
  input::-ms-input-placeholder {
    text-align: center;
  }
  input::-webkit-input-placeholder {
    text-align: center;
  }
</style>