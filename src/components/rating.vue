<template>
  <div class="rating">
    <div class="score">
      <ul>
        <li class="li1">
          <h1 class="scoreVal">4.5</h1>
        </li>
        <li class="li1">
          <span>商家评分</span>
          <el-rate
            v-model="score"
            disabled
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </li>
        <li class="li2">
          <span>味道</span>
          <p>4.5</p>
        </li>
        <li class="li2">
          <span>包装</span>
          <p>4.6</p>
        </li>
        <li class="li2 onlyStyle">
          <span>配送</span>
          <p>4.7</p>
        </li>
      </ul>
    </div>
    <div class="evaluation">
      <ul>
        <li>
          <ul style="height: 75px;">
            <li class="first_li">
              <span>全部&nbsp;&nbsp;&nbsp;7211</span>
            </li>
            <li>
              <span>最新</span>
            </li>
            <li>
              <span>好评&nbsp;&nbsp;&nbsp;711</span>
            </li>
            <li class="last_li">
              <span>差评&nbsp;&nbsp;&nbsp;211</span>
            </li>
          </ul>
        </li>
        <li>
          <ul class="evaluation_ul">
              <li>
                <span>有图&nbsp;&nbsp;&nbsp;1016</span>
              </li>
              <li>
                <span>味道好&nbsp;&nbsp;&nbsp;711</span>
              </li>
              <li class="evaluation_li">
                <span>不好吃&nbsp;&nbsp;&nbsp;211</span>
              </li>
          </ul>
        </li>
      </ul>
      <div class="evaluation_div">
        <i class="el-icon-success" @click="flag = !flag" :class="{'grayColor': !flag}"></i>
        <p class="evaluation_p">只看有内容的评价</p>
      </div>
    </div>
    <div class="comment">
      <ul>
        <li v-for="(item,idx) in comments" ::key="idx" style="text-align: left;">
          <div class="user">
            <div class="photo">
                <img :src=item.userPhoto class="userPhoto">
            </div>
            <div class="userScore">
              <span>{{item.userId}}</span>
              <el-rate
                v-model=item.scoreVal
                disabled
                show-text>
              </el-rate>
            </div>
            <div class="commentTime">
              <span>{{item.commentTime}}</span>
            </div>
          </div>
          <div class="content">
            <p>{{item.commentContent}}</p>
            <div>
              <div class="foodPhotos" v-for="(photos,idxPhoto) in item.userFoods" ::key="idxPhoto">
                <img :src="photos.url">
              </div>
            </div>
          </div>
          <div class="foodInformation">
            <i class="glyphicon glyphicon-thumbs-up" style="font-size: 50px;"></i>
            <div class="food" v-for="(food,idxFood) in item.foods" ::key="idxFood">
              <span>{{food.name}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>


</template>

<script>
    export default {
        name: "rating",
        data() {
          return {
            score: 4.5, //评分
            flag: true,  
            texts:['极差', '失望', '一般', '满意', '惊喜'],
            comments:[
              {
                userId: "4******1",
                userPhoto:'src/assets/userPhoto.png',
                scoreVal:4.8,
                commentContent: "包装不错，粥也好喝，值得购买",
                commentTime: "2019-12-23",
                userFoods:[{url:"src/assets/userFood1.png"},{url:"src/assets/userFood2.png"}],
                foods:[{name:"葱花煎蛋"},{name:"皮蛋瘦肉粥（经典）"}],
                storeReply:"非常感谢对我们产品的认可，欢迎下次再次购买！",
              },
              {
                userId: "4******2",
                userPhoto:'src/assets/userPhoto.png',
                scoreVal:3.4,
                commentContent: "包装不错，粥也好喝，值得购买",
                commentTime: "2019-12-13",
                userFoods:[{url:"src/assets/userFood3.png"},{url:"src/assets/userFood4.png"}],
                foods:[{name:"葱花煎蛋"},{name:"皮蛋瘦肉粥（经典）"}],
                storeReply:"非常感谢对我们产品的认可，欢迎下次再次购买！",
              },
              {
                userId: "4******3",
                userPhoto:'src/assets/userPhoto.png',
                scoreVal:3.8,
                commentContent: "包装不错，粥也好喝，值得购买",
                commentTime: "2019-12-23",
                userFoods:[{url:"src/assets/userFood1.png"},{url:"src/assets/userFood2.png"}],
                foods:[{name:"葱花煎蛋"},{name:"皮蛋瘦肉粥（经典）"}],
                storeReply:"非常感谢对我们产品的认可，欢迎下次再次购买！",
              },
              {
                userId: "4******4",
                userPhoto:'src/assets/userPhoto.png',
                scoreVal:4.4,
                commentContent: "包装不错，粥也好喝，值得购买",
                commentTime: "2019-12-13",
                userFoods:[{url:"src/assets/userFood3.png"},{url:"src/assets/userFood4.png"}],
                foods:[{name:"葱花煎蛋"},{name:"皮蛋瘦肉粥（经典）"}],
                storeReply:"非常感谢对我们产品的认可，欢迎下次再次购买！",
              },
              {
                userId: "4******5",
                userPhoto:'src/assets/userPhoto.png',
                scoreVal:4.8,
                commentContent: "包装不错，粥也好喝，值得购买",
                commentTime: "2019-12-23",
                userFoods:[{url:"src/assets/userFood1.png"},{url:"src/assets/userFood2.png"}],
                foods:[{name:"葱花煎蛋"},{name:"皮蛋瘦肉粥（经典）"}],
                storeReply:"非常感谢对我们产品的认可，欢迎下次再次购买！",
              },
              {
                userId: "4******6",
                userPhoto:'src/assets/userPhoto.png',
                scoreVal:3.4,
                commentContent: "包装不错，粥也好喝，值得购买",
                commentTime: "2019-12-13",
                userFoods:[{url:"src/assets/userFood3.png"},{url:"src/assets/userFood4.png"}],
                foods:[{name:"葱花煎蛋"},{name:"皮蛋瘦肉粥（经典）"}],
                storeReply:"非常感谢对我们产品的认可，欢迎下次再次购买！",
              },
            ],
          }
        },
    }
</script>

<style scoped>
  ul{
    padding: 0;
  }
  li{
    list-style: none;
    text-align: center;
  }
  .score{
    width: 700px;
    margin-top: 40px;
    height: 120px;
  }
  .score > ul{
    width: 700px;
    height: 100px;
    padding: 0;
    float: left;
  }
  .score > ul > li{
    float: left;
  }
  .scoreVal{
    margin: 0;
    font-size: 75px;
    color: #fd6e16;
  }
  .el-rate{
    line-height: 2;
  }
  .score p{
    font-size: 37.5px;
  }
  .evaluation{
    width: 750px;
    height: 320px;
    border-top: 20px solid #f5f5f5;
    border-bottom: 20px solid #f5f5f5;
    position: absolute;
    left: -25px;
  }
  .evaluation > ul{
    width: 725px;
    padding: 20px 0;
    margin-left: 25px;
    border-bottom: 1px dotted #dddddd;
  }
  .evaluation > ul >li >ul{
    height: 75px;
  }
  .evaluation > ul >li >ul >li{
    height: 75px;
    float: left;
    text-align: center;
    margin: 0 auto;
    line-height: 75px;
    padding: 0 25px;
    margin-right: 25px;
    background-color: #ebf5ff;
    color: #a8b2bd;
    border-radius: 5px;
  }
  .li1{
    width: 150px;
  }
  .li2{
    width: 130px;
  }
  .onlyStyle{
    border-left: 1px solid #828282;
  }
  .first_li{
    background-color: #2295ff;
    color: #fff;
  }
  .last_li{
    background-color: #f5f5f5
  }
  .evaluation_ul{
    height: 75px;
    margin-top: 20px;
  }
  .evaluation_li{
    background-color: #f5f5f5
  }
  .evaluation_div{
    margin-left: 25px;
  }
  .evaluation_p{
    height: 50px;
    line-height: 55px;
  }
  .el-icon-success{
    font-size: 50px;
    color: #00ba61;
    float: left;
    margin-right: 10px;
  }
  .grayColor{
    color: #e2e2e2;
  }
  .comment{
    width: 700px;
    margin-top: 350px;
    text-align: left;
  }
  .foodInformation{
    width: 600px;
    margin: 20px 0 20px 100px;
  }
  .user{
    width: 700px;
    height: 75px;
    margin-bottom: 10px;
  }
  .content{
    width: 600px;
    margin-left: 100px;
  }
  .photo{
    width: 75px;
    float: left;
  }
  .userScore{
    width: 450px;
    float: left;
    margin-left: 25px;
  }
  .userPhoto{
    width: 75px;
    height: 75px;
  }
  .foodPhotos{
    display: inline;
  }
  .foodPhotos > img{
    margin-right: 50px;
  }
  .food{
    display: inline;
  }
  .food > span{
    font-size: 24px;
    line-height: 62px;
    padding: 10px;
    background-color: #ebf5ff;
    margin-right: 10px;
  }
</style>
