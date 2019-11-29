<template>
  <div class="index" id="index">
    <v-headerNavbar ref="headerNavbar"></v-headerNavbar>
    <v-headerSearch ref="headerSearch"></v-headerSearch>
    <v-header @changeFlag="changeFlag" @openActivity="openActivity" @move="move" ref="header"></v-header>
    <v-navbar ref="navbar"></v-navbar>
    <div :class='{bg:flag==true}'></div>
    <v-baseBox ref="baseBox" :style="{'display':flag ? 'block':'none'}" @closeBox="closeBox()"></v-baseBox>
    <v-activityBox ref="activityBox" @openActivity="openActivity" :style="{'display':flagActivity ? 'block':'none'}"></v-activityBox>
  </div>
</template>

<script>
  import HeaderNavbar from '../components/headerNavbar'
  import HeaderSearch from '../components/headerSearch'
  import Header from '../components/Header'
  import Navbar from '../components/Navbar'
  import BaseBox from '../base/BaseBox'
  import ActivityBox from '../base/activityBox'
  export default {
    name: "index",
    data () {
      return {
        flag:false,
        scrollValue: 0,
        screenHeight: window.innerHeight,   //整個頁面高度
        timer: false,
        flagActivity: false,
      }
    },
    mounted() {
      const that = this;
      window.addEventListener("scroll",this.handleScroll,true);
      window.onresize = () => {
        that.screenHeight = window.innerHeight;
      }
    },
    watch: {
      //監聽高度變化
      screenHeight(val){
        if(!this.timer){
          this.screenHeight = val;
          this.timer = true
          let that = this
          // let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          setTimeout(function(){
            that.$refs.baseBox.setHeight(that.screenHeight*0.7);
            that.$refs.activityBox.flushSetHeight(that.screenHeight*0.68);
            that.timer = false
          },400)
        }
      }
    },
    methods:{
      //开启弹窗
      changeFlag(){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || 
                      document.body.scrollTop;
        //let boxHeight = this.screenHeight - this.$refs.header.getHeaderCardToTop() + scrollTop - this.$refs.header.getHeaderCardHeight()/2;
        let boxHeight = this.screenHeight*0.7 + scrollTop;
        if(scrollTop > 0){
          this.$refs.baseBox.setHeight(boxHeight,scrollTop);
        }else{
          this.$refs.baseBox.setHeight(boxHeight,0);
        }
        this.flag = !this.flag;
        this.stop();
      },
      //关闭弹窗
      closeBox(){
        this.flag = false;
        this.move();
      },
      //表示禁止默认行为
      bodyScroll($event){
        event.preventDefault();
      },
      //禁止页面滑动
      stop(){
        var mo=this.bodyScroll();
        document.body.style.overflow='hidden';
        document.addEventListener("touchmove",mo,false);//禁止页面滑动
      },
      //允许页面滑动
      move(){
        var mo=this.bodyScroll();
        document.body.style.overflow='';//出现滚动条
        document.removeEventListener("touchmove",mo,false);
      },
      handleScroll(){
        // 页面滚动距顶部距离
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || 
                      document.body.scrollTop;
        //用于判断上滑还是下滑
        let scroll = scrollTop - this.scrollValue;
        this.scrollValue = scrollTop;
        //头部div的高度
        let headerHeight = this.$refs.header.getHeaderHeight();
        //头部icon的高度
        let navbarHeight = this.$refs.headerNavbar.getNavbarHeight();
        //头部搜索组件的高度
        let searchHeight = this.$refs.headerSearch.getSearchHeight();
        //用于定位菜单栏的位置
        let heightVal = headerHeight + navbarHeight - searchHeight;
        if(scroll<0){
          //上滑
          if(0 <= scrollTop <= 100){
            //调节icon和搜索的透明度
            this.$refs.headerNavbar.changeOpacity(scrollTop);
            this.$refs.headerSearch.changeOpacity(scrollTop);
          }
          if(scrollTop <= 50){
            //显示收藏和头像
            this.$refs.header.removeClass();
          }
          if(scrollTop < heightVal){
            //恢复菜单栏的原css
            this.$refs.navbar.recoverMainStyle();
          }
        }else{
          //下滑
          if(scrollTop >= 10){
            //隐藏收藏和头像
            this.$refs.header.addClass(); 
          }
          //调节icon和搜索的透明度
          this.$refs.headerNavbar.changeOpacity(scrollTop);
          this.$refs.headerSearch.changeOpacity(scrollTop);
          if(scrollTop >= heightVal){
            //固定菜单栏
            this.$refs.navbar.changeMainStyle(searchHeight);
          }
        }
      },
      //打开活动页面
      openActivity(){
        this.flagActivity = !this.flagActivity;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || 
                      document.body.scrollTop;
                      let boxHeight = this.screenHeight - this.$refs.header.getHeaderCardToTop() + scrollTop - this.$refs.header.getHeaderCardHeight();
        if(this.flagActivity){
          if(scrollTop > 0){
            this.$refs.activityBox.getDivHeight(boxHeight,scrollTop);
          }else{
            this.$refs.activityBox.getDivHeight(boxHeight,0);
          }
          this.stop();
        }else{
          this.move();
        }  
      }
    },
    components:{
      'vHeaderNavbar':HeaderNavbar,
      'vHeaderSearch':HeaderSearch,
      'vHeader':Header,
      'vNavbar':Navbar,
      'vBaseBox':BaseBox,
      'vActivityBox':ActivityBox,
    },
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .bg{
    width: 10rem;
    height: 10rem;
    background: black;
    opacity: 0.5;
    z-index: 99;
    position: absolute;
    top: -2.5rem;
  }
</style>
