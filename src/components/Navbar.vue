<template>
  <div class="navbar">
    <ul id="main">
      <li><router-link  to="/food" >商品</router-link></li>
      <li><router-link  to="/rating">评价</router-link></li>
      <li><router-link  to="/seller">商家</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: "Navbar",
    methods: {
      changeMainStyle(height){
        let div = document.getElementById("main");
        div.style.position = "fixed";
        div.style.top = height + "px";
      },
      recoverMainStyle(){
        let div = document.getElementById("main");
        div.style.position = "";
        div.style.top = "";
      }
    },
  }
</script>

<style scoped>
  li{
    list-style: none;
    float: left;
  }
  .navbar{
    width: 9.333333rem;
    margin: 0 auto;
  }
  .navbar > ul{
    width: 9.333333rem;
    height: 0.667rem;
    margin: 0 auto;
    border-bottom: 1px solid lightgray;
    padding: 0;
    z-index: 50;
    background-color: #fff;
  }
  .navbar > ul >li{
    width: 3.111rem;
    height: 0.667rem;
    text-align: center;
    line-height: 0.667rem;
  }
  .navbar > ul >li > a{
    color: black;
    height: 0.667rem;
    text-decoration: none;
    font-size: 0.4rem;
  }
  .router-link-active{
    color: red!important;
  }
</style>
