<template>
  <div class="food">
    <!-- 走马灯效果 -->
    <v-slider></v-slider>
    <!-- 商家推荐 -->
    <div class="recommended">
      <h5 class="recommended_title">商家推荐</h5>
      <div class="recommended_content" ref="recommendedContent">
        <ul class="recommended_food" ref="recommendedFood">
          <li v-for="(food,index) in recommendedFood" :key="index" ref="food">
            <img :src=food.url>
            <p>{{food.name}}</p>
            <span>月售{{food.sales}}</span>
            <span style="font-size: 0.6rem;color: #fe664c;display: block">￥{{food.price}}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 商家菜单信息 -->
    <div class="menu">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item,index) in goods" class="menu-item"
            ::key="index"
            :class="{'current':currentIndex == index}"
            @click="selectMenu(index,$event)">
            {{item.type}}
          </li>
        </ul>
      </div>
      <div class="food-wrapper" ref="foodWrapper">
        <ul>
          <li v-for="(item,index) in goods" :key="index" class="food-list food-list-hook" ref="foodList">
            <h1 class="title">{{item.type}}</h1>
            <ul>
              <li v-for="(food,indx) in item.product" :key="indx" class="food-item">
                <img :src=food.url>
                  <ul class="product_content">
                    <p class="food_name">{{food.name}}</p>
                    <p class="food_material">主要原材料：{{food.material}}</p>
                    <p class="food_sale">月售{{food.sales}}&nbsp;&nbsp;&nbsp;&nbsp;好评率{{food.highPraise}}</p>
                    <p class="food_price">￥{{food.price}}</p>
                    <button class="addFood" @click="addFood(index,indx)">+</button>
                    <p class="food_number" :style="{'display' : (food.isSelected > 0 ? 'block':'none')}">{{food.isSelected}}</p>
                    <button class="deleteFood" :style="{'display' : (food.isSelected > 0 ? 'block':'none')}" @click="deleteFood(index,indx)">-</button>
                  </ul>
              </li>
            </ul>
            <div :class="{'blank':(goods.length-1) == index}"></div>
          </li>
        </ul>
      </div>
    </div>
    <v-cart :countCaseOfParent="countCase" :countPriceOfParent="countPrice" :sendingPriceOfParent="sendingPrice" @payOfParent="pay"></v-cart>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Slider from './slider'
  import Cart from './shopcart'
  export default {
    name: "food",
    data(){
      return {
        countCase: 0,    //商品总件数
        countPrice: 0,   //商品总价格
        sendingPrice:20,  //起送费
        recommendedFood:[    //推荐商品信息
          {
            name: '皮蛋瘦肉粥+蒸饺+...',
            url: 'src/assets/timg.jpg',
            sales: 40,
            price: 18
          },
          {
            name: '皮蛋瘦肉粥+蒸饺+...',
            url: 'src/assets/timg.jpg',
            sales: 40,
            price: 18
          },
          {
            name: '皮蛋瘦肉粥+蒸饺+...',
            url: 'src/assets/timg.jpg',
            sales: 40,
            price: 18
          },
        ],
        goods:[              //商品信息
          {
            type:'热销1',
            product:[
              {name:'皮蛋瘦肉粥1',price:18,material:'大米',sales:200,highPraise:'100%',url:'src/assets/food.png',isSelected:0},
              {name:'皮蛋瘦肉粥2',price:4,material:'大米',sales:200,highPraise:'100%',url:'src/assets/food.png',isSelected:0},
              {name:'皮蛋瘦肉粥3',price:8,material:'大米',sales:200,highPraise:'100%',url:'src/assets/food.png',isSelected:0},
              {name:'皮蛋瘦肉粥4',price:18,material:'大米',sales:200,highPraise:'100%',url:'src/assets/food.png',isSelected:0},
            ],
          },{
            type:'热销2',
            product:[
              {name:'皮蛋瘦肉粥',price:18,material:'大米',sales:200,highPraise:'100%',url:'src/assets/food.png',isSelected:0},
              {name:'皮蛋瘦肉粥2',price:18,material:'大米',sales:200,highPraise:'100%',url:'src/assets/food.png',isSelected:0},
              {name:'皮蛋瘦肉粥3',price:18,material:'大米',sales:200,highPraise:'100%',url:'src/assets/food.png',isSelected:0},
              {name:'皮蛋瘦肉粥4',price:18,material:'大米',sales:200,highPraise:'100%',url:'src/assets/food.png',isSelected:0},
            ],
          },{
            type:'热销3',
            product:[
              {name:'皮蛋瘦肉粥',price:18,material:'大米',sales:200,highPraise:'100%',url:'src/assets/food.png',isSelected:0},
              {name:'皮蛋瘦肉粥2',price:18,material:'大米',sales:200,highPraise:'100%',url:'src/assets/food.png',isSelected:0},
              {name:'皮蛋瘦肉粥3',price:18,material:'大米',sales:200,highPraise:'100%',url:'src/assets/food.png',isSelected:0},
              {name:'皮蛋瘦肉粥4',price:18,material:'大米',sales:200,highPraise:'100%',url:'src/assets/food.png',isSelected:0},
            ],
          },{
            type:'热销4',
            product:[{name:'皮蛋瘦肉粥',price:18,material:'大米',sales:200,highPraise:'100%',url:'src/assets/food.png',isSelected:0}],
          },{
            type:'热销5',
            product:[{name:'皮蛋瘦肉粥',price:18,material:'大米',sales:200,highPraise:'100%',url:'src/assets/food.png',isSelected:0}],
          },{
            type:'热粥1',
            product:[{name:'皮蛋瘦肉粥',price:18,material:'大米',sales:200,highPraise:'100%',url:'src/assets/food.png',isSelected:0}],
          },{
            type:'热粥2',
            product:[{name:'皮蛋瘦肉粥',price:18,material:'大米',sales:200,highPraise:'100%',url:'src/assets/food.png',isSelected:0}],
          },{
            type:'热粥3',
            product:[
              {name:'皮蛋瘦肉粥',price:18,material:'大米',sales:200,highPraise:'100%',url:'src/assets/food.png',isSelected:0},
              {name:'皮蛋瘦肉粥2',price:18,material:'大米',sales:200,highPraise:'100%',url:'src/assets/food.png',isSelected:0},
              {name:'皮蛋瘦肉粥3',price:18,material:'大米',sales:200,highPraise:'100%',url:'src/assets/food.png',isSelected:0},
              {name:'皮蛋瘦肉粥4',price:18,material:'大米',sales:200,highPraise:'100%',url:'src/assets/food.png',isSelected:0},
            ],
          },
        ],
        listHeight:[],   //存储每一项高度
        scrollY: 0,   //实时获取当前y轴的高度
        clickEvent: false,
      }
    },
    created(){
      this.$nextTick(() => {
        this.initScrollX();
      })
    },
    mounted() {
      this.$nextTick(() => {
        this._initScroll();
        this._calculateHeight();
      })
    },
    methods:{
      //实现横向滚动初始化方法
      initScrollX(){
        let width = this.recommendedFood.length*4;
        this.$refs.recommendedFood.style.width = width+"rem";
        this.$nextTick(() => {
          if(!this.scroll){
            this.scroll = new BScroll(this.$refs.recommendedContent,{
              startX:0,
              click:true,
              scrollX:true,
              scrollY:false,
              eventPassthrough:'vertical',
            })
          }else {
            this.scroll.refresh();
          }
        });
      },
      //实现左右联动初始化方法
      _initScroll() {
        this.menuScroll = new BScroll(this.$refs.menuWrapper,{
          click:true   //允许better-scroll列表上的点击事件
        });
        this.foodsScroll = new BScroll(this.$refs.foodWrapper,{
          probeType : 3   //让better-scroll监听scroll事件
        });
        this.foodsScroll.on('scroll',(pos) => {
          this.scrollY =Math.abs(Math.round(pos.y));
        })
      },
      //计算右侧高度并存储到listHeight
      _calculateHeight() {
        let foodList = this.$refs.foodList;
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
      },
      //点击左侧菜单，定位右侧数据
      selectMenu(index,event) {
        if(!event._constructed) {
          return ;
        }
        let foodList = this.$refs.foodWrapper.getElementsByClassName("food-list-hook");
        let el = foodList[index];
        this.foodsScroll.scrollToElement(el,300);
      },
      //添加商品到购物车
      addFood(index,indx){
        this.countCase += 1;
        this.goods[index].product[indx].isSelected += 1; 
        this.countPrice += this.goods[index].product[indx].price;
        if(this.sendingPrice > 0){
          this.sendingPrice -= this.goods[index].product[indx].price;
          if(this.sendingPrice < 0){
            this.sendingPrice = 0;
          }
        }
      },
      //删除商品
      deleteFood(index,indx){
        if(this.goods[index].product[indx].isSelected > 0){
          this.countCase -= 1;
          this.goods[index].product[indx].isSelected -= 1;
          this.countPrice -= this.goods[index].product[indx].price;
          if(this.countPrice < 20){
            this.sendingPrice = 20 - this.countPrice;
            if(this.countPrice > 20){
              this.sendingPrice = 20;
            }
          }
        }
      },
      //结算
      pay(){
        let count = this.countPrice + 4;
        alert("需要支付" + count + "元");
      }
    },
    computed: {
      //右侧滚动，计算index，关联左侧菜单
      currentIndex() {
        for(let i=0;i< this.listHeight.length;i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i+1];
          if(!height2 || (this.scrollY >= height1 && this.scrollY < height2)){
            return i;
          }
        }
        return 0;
      }
    },
    components:{
        'vSlider':Slider,
        'vCart':Cart,
    },
    watch: {
      
    },
  }
</script>
<style scoped>
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .recommended{
    width: 9.2rem;
    margin: 0 auto;
  }
  .recommended_title{
    font-size: 0.5rem;
    padding: 0.133rem 0;
  }
  .recommended_content{
    height: 7rem;
    white-space: nowrap;
    overflow: hidden;
  }
  .recommended_food{
    height: 7rem;
  }
  .recommended_food > li{
    display: inline-block;
    margin-right: 0.267rem;
  }
  .recommended_food > li > img{
    width: 4rem;
    height: 4rem;
  }
  .recommended_food > li > p{
    font-size: 0.4rem;
    position: relative;
    top: 0.267rem;
    color: black;
  }
  .recommended_food > li > span{
    font-size: 0.3rem;
    position: relative;
    top: 0.267rem;
    color: #c9c9c9;
  }
  .menu{
    width: 9.333333rem;
    height: 10rem;
    display: flex;
    overflow: hidden;
  }
  .menu-wrapper{
    float: left;
    width: 2rem;
    background: #eee;
  }
  .current{
    background: #fff;
    font-weight: bold;
    color: #ff664e;
  }
  .menu-wrapper li{
    width: 100%;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    font-size: 0.4rem;
  }
  .food-wrapper{
    float: left;
    flex: 1;
  }
  .food-wrapper > ul{
    margin-left: .266667rem;
  }
  .food-list h1{
    font-size: 0.4rem;
    color:black;
  }
  .food-item{
    height: 2.666667rem;
    margin-bottom: .133333rem;
  }
  .food-item > img{
    float:left;
    width: 2.666667rem;
    height: 2.666667rem;
  }
  .product_content{
    width:4.2rem;
    height:2.666667rem;
    margin-left: 0.2rem;
    float:left;
  }
  .blank{
    height:3rem;
  }
  .product_content > p{
    font-size: 0.3rem;
    color: #b7bbbf;
  }
  .food_name{
    font-size: .4rem!important;
    color: #000!important;
  }
  .food_price{
    width: 0.6rem;
    height: 0.6rem;
    color: #ff664e!important;
    font-size: 0.6rem!important;
  }
  .addFood{
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    padding: 0;
    border: 0;
    background-color: #2196ff;
    font-size: 0.8rem;
    line-height: 0.8rem;
    color: #fff;
    position: relative;
    top: -0.7rem;
    left: 3.3rem;
  }
  .deleteFood{
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    padding: 0;
    border: 0;
    background-color: #2196ff;
    font-size: 0.8rem;
    margin: 0 auto;
    line-height: 0.5rem;
    color: #fff;
    position: relative;
    top: -2.18rem;
    left:0.2rem
  }
  .food_number{
    width:0.6rem;
    height:0.6rem;
    font-size: 0.4rem;
    text-align:center;
    line-height: 0.6rem;
    position: relative;
    top:-1.4rem;
    left:2.65rem;
  }
</style>
