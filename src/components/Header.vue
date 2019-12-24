<template>
  <div class="header" id="header">
    <div class="header_image" ref="headerImg">
      <img src="../assets/header_image.png"/>
    </div>
    <div class="glyphicon glyphicon-heart icon-favorite" ref="iconFavorite" :class='{isFavor:favorite==true}' @click="favorite=!favorite">
    </div>
    <div class="header_content">
      <div class="content_title">三米粥铺(深圳福田街道店)</div>
      <div class="content_disc">
        <ul>
          <li>评价4.5</li>
          <li class="content_disc-li">月售5400</li>
          <li>蜂鸟快送约40分钟</li>
        </ul>
      </div>
      <div class="header_card" @click="openBox()" id="headerCard">
        <span>4.4</span>折起抵用券&nbsp;&nbsp;&nbsp;&nbsp;购买
      </div>
      <div class="activity">
        <ul class="content_disc-ul">
          <li>27减17</li>
          <li class="content_disc-lis">27减17</li>
          <li>27减17</li>
          <li class="activityMsg">
              <span @click="openActivity">3个优惠<i class="el-icon-arrow-down"></i></span>
          </li>
        </ul>
        <div class="notice">
          <p>公告：三米为了让大家吃的好好的，有一大波优惠福利袭来等等</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data(){
      return {
        favorite:false,
      }
    },
    methods:{
      //獲取headerCard按鈕距離頂部高度
      getHeaderCardToTop(){
         return document.getElementById("headerCard").offsetTop;
      },
      getHeaderCardHeight(){
        return document.getElementById("headerCard").offsetHeight;
      },
      //打开领取优惠券页面
      openBox(){
        this.$emit('changeFlag');
      },
      //隐藏图标
      addClass(){
        this.$refs.headerImg.className = "header_image animated zoomOut";
        this.$refs.iconFavorite.className = "glyphicon glyphicon-heart icon-favorite animated zoomOut";
      },
      //显示图标
      removeClass(){
        this.$refs.headerImg.className = "header_image animated zoomIn";
        this.$refs.iconFavorite.className = "glyphicon glyphicon-heart icon-favorite animated zoomIn";
      },
      //获取整个div的高度
      getHeaderHeight(){
        return document.getElementById("header").offsetHeight;
      },
      openActivity(){
        this.$emit("openActivity");
      },
    }
  }
</script>

<style scoped>
  ul{
    padding:0;
  }
  li{
    list-style: none;
    float: left;
  }
  .header{
    background: #fff;
    margin-top:250px;
  }
  .header_content{
    width: 9.333rem;
    height: 4.1rem;
    margin: 0 auto;
  }
  .header_image{
    height: 2.133rem;
    width: 2.133rem;
    position: absolute;
    top: 80px;
    left: 3.5rem;
    border-radius: 0.053rem;
    z-index: 51;
  }
  .header_image > img{
    height: 2.133rem;
    width: 2.133rem;
  }
  .icon-favorite{
    font-size: 1rem;
    margin: 0.167rem;
    color: lightgray;
    margin: 0;
    position: absolute;
    top: 165px;
    left: 8.2rem;
    z-index: 51;
  }
  .isFavor{
    color: red;
  }
  .content_title{
    width: 9.333rem;
    text-align: center;
    font-size: 0.5rem;
    font-weight: bold;
    margin-top: 1rem;
  }
  .content_disc > ul{
    height: 0.533rem;
    margin-left: 1.3rem;
    margin-top: 0.133rem;
  }
  .content_disc > ul > li{
    padding: 0 0.3rem;
    color: #5e5e5e;
    font-size: 0.2rem;
  }
  .content_disc-ul{
    height: 0.533rem;
  }
  .content_disc-li{
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray
  }
  .content_disc-lis{
    margin: 0 0.1rem;
  }
  .header_card{
    width: 4.5rem;
    height: 0.667rem;
    border-radius: 0.053rem;
    margin: 0 auto;
    background-color: darkorange;
    text-align: center;
    line-height: 0.667rem;
    color: #fff;
    letter-spacing: 0.027rem;
    font-size: 0.3rem;
  }
  .activity{
    width: 8rem;
    margin: 0.3rem auto 0.2rem;
    color: red;
    font-size: 0.3rem;
  }
  .activity > ul{
    width:600px;
  }
  .activityMsg{
    border: 0!important;
    width: 150px!important;
    margin-left: 135px;
  }
  .activity > ul > li{
    width: 100px;
    border: 1px solid red;
    padding: 0 0.133rem;
  }
  .notice > p{
    color: gray;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
