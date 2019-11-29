<template>
  <div class="baseBox" id="baseBox">
    <div class="baseBox_title"><span>抵用券</span></div>
    <div class="el-icon-close close" @click="closeBox()"></div>
    <ul style="padding: 20px;">
      <li class="case">
        <ul>
          <li class="caseContent1">
            <span>￥12</span>
          </li>
          <li class="caseContent2">
              <span>关闭优惠券页面关闭优惠券页面</span>
            </li>
            <li class="caseContent3">
                <button>购买</button>
              </li>
        </ul>
      </li>
      <li class="case">
          <ul>
            <li class="caseContent1">
              <span>￥12</span>
            </li>
            <li class="caseContent2">
                <span>关闭优惠券页面关闭优惠券页面</span>
              </li>
              <li class="caseContent3">
                  <button>购买</button>
                </li>
          </ul>
        </li>
        <li class="case">
            <ul>
              <li class="caseContent1">
                <span>￥12</span>
              </li>
              <li class="caseContent2">
                  <span>关闭优惠券页面关闭优惠券页面</span>
                </li>
                <li class="caseContent3">
                    <button>购买</button>
                  </li>
            </ul>
          </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "BaseBox",
      methods:{
        //关闭优惠券页面
        closeBox(){
          this.$emit('closeBox');
        },
        //设置优惠券页面的高度
        setHeight(height,bottomVal){
          document.getElementById("baseBox").style.height= height + "px";
          document.getElementById("baseBox").style.bottom = 0 - bottomVal + "px";
        }
      }
    }
</script>

<style scoped>
  li{
    list-style: none;
  }
  .baseBox{
    width: 10rem;
    z-index: 102;
    position: absolute;
    bottom: 0rem;
    background: #fff;
  }
  .baseBox_title{
    width: 4rem;
    text-align: center;
    font-size: 0.48rem;
    font-weight: bold;
    margin: 0.4rem auto 0;
  }
  .close{
    font-size: 0.8rem;
    position: relative;
    top: -0.693rem;
    right: 0.467rem;
  }
  .case{
    width: 9.333333rem;
    height: 2rem;
    border: 1px solid #e7e7e7;
    margin-top: .5rem;
  }
  .caseContent1{
    float: left;
    width: 1.333333rem;
    height: 1.333333rem;
    margin: .333333rem .1rem;
    border: 1px solid darkorange;
  }
  .caseContent2{
    float: left;
    width: 4.5rem;
    height: 1.333333rem;
    margin: .333333rem .1rem;
  }
  .caseContent3{
    float: left;
    width: 2rem;
    height: 1.333333rem;
    margin: .333333rem .1rem;
  }
  .caseContent1 > span{
    font-size: .6rem;
    color: darkorange;
  }
  .caseContent2 > span{
    font-size: .4rem;
  }
  .caseContent3 > button{
    width: 2rem;
    height: 1rem;
    margin: 12.5px auto;
    background-color: darkorange;
    border: 0;
    border-radius: .5rem;
  }
</style>
