<template>
  <div class="seller">
    <div class="sellerImg">
      <img src="src/assets/bg.png"/>
    </div>
    <div class="sellerContent">
      <p><span class="sellerTitle">品牌故事</span><span>三米粥铺</span></p>
      <p class="content">三米粥铺是上海具有极高知名度的粥品类餐饮连锁品牌，总部位于上海，其规模和实力在江浙沪地区也是数一数二的品牌.三米粥铺是上海具有极高知名度的粥品类餐饮连锁品牌</p>
    </div>
    <div class="sellerMessage">
      <h1>商家信息</h1>
      <div class="sellerIcon">
        <img src="src/assets/eleicon.png"/>
        <img src="src/assets/eleicon.png"/>
      </div>
      <p class="pContent">三米粥铺是上海具有极高知名度的粥品类餐饮连锁品牌，总部位于上海，其规模和实力在江浙沪地区也是数一数二的品牌.三米粥铺是上海具有极高知名度的粥品类餐饮连锁品牌</p>
    </div>
    <div class="sellerMSG">
      <ul>
        <li>
          <h1>商家名称</h1>
          <p>三米粥铺(深圳福田街道店)</p>
        </li>
        <li>
          <h1>商家品类</h1>
          <p>粥店/其他快餐</p>
        </li>
        <li>
          <h1>商家地址</h1>
          <p>深圳市福田区福田街道</p>
        </li>
        <li>
          <h1>商家电话</h1>
          <p>0755-4566545</p>
        </li>
        <li class="liLast">
          <h1>营业时间</h1>
          <p>00:00-23:59</p>
        </li>
      </ul>
    </div>
    <div class="sellerBtn">
      <button @click="tipSeller">举报商家</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "seller",
  //举报
  methods: {
    tipSeller(){
      this.$message.success("已举报成功");
    },
  },
}
</script>
<style scoped>
  *{
    font-size: 24px;
  }
  li{
    list-style: none;
  }
  ul{
    padding: 0;
  }
  .sellerImg > img{
    width: 700px;
    height: 350px;
    margin: 25px 0;
  }
  .sellerContent{
    padding-bottom: 20px;
    border-bottom: 1px solid #f5f5f5;
  }
  .sellerContent >p > span{
    padding: 0 20px;
    font-weight: bold;
    font-size: 24px;
  }
  .sellerTitle{
    padding-left: 0!important;
    border-right: 1px solid black;
  }
  .content{
    width: 700px;
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    word-break:break-all;
    display:-webkit-box;
    -webkit-box-orient:vertical;
  }
  .sellerMessage{
    width: 750px;
    border-top: 20px solid #f5f5f5;
    border-bottom: 20px solid #f5f5f5;
    position: absolute;
    left: -25px;
    padding: 0 25px;
  }
  .pContent{
    margin: 50px 0;
  }
  .sellerMessage > h1{
    font-size: 24px;
    font-weight: bold;
    padding: 25px 0;
  }
  .sellerIcon > img{
    width: 150px;
    height: 150px;
  }
  .sellerMSG{
    width: 700px;
    margin-top: 500px;
    height: 370px;
  }
  .sellerMSG > ul >li{
    width: 700px;
    height: 75px;
    border-bottom: 1px solid #f5f5f5;
  }
  .sellerMSG > ul >li > h1{
    float: left;
    width: 150px;
    height: 75px;
    line-height: 75px;
    margin: 0;
    font-size: 24px;
    font-weight: bold;
  }
  .sellerMSG > ul >li > p{
    float: left;
    text-align: right;
    width: 550px;
    height: 75px;
    line-height: 75px;
    margin: 0;
    color: #a8b2bd;
  }
  .liLast{
    border-bottom: 20px solid #f5f5f5;
  }
  .sellerBtn{
    width: 700px;
    height: 150px;
  }
  .sellerBtn > button{
    width: 700px;
    height: 75px;
    font-size: 36px;
    background-color: #fff;
    border: 1px solid #a8b2bd;
    margin-top: 5px;
  }
</style>
