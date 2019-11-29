<template>
  <div class="slide">
    <el-carousel>
      <el-carousel-item
        v-for="item in list"
        :key="item.img">
        <img :src="item.img" class="slide_img">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
  export default {
    data: () => {
      return {
        list: [{
          url: '#abc',
          img: 'src/assets/slider1.png'
        }, {
          url: '#bsbsb',
          img: 'src/assets/slider2.png'
        }, {
          url: '#sjfkajfj',
          img: 'src/assets/slider3.png'
        }, {
          url: '#sjfkajfja',
          img: 'src/assets/slider4.png'
        }],       //轮播图片
      }
    }
  }
</script>
<style scope>
  .slide{
    width: 690px;
    height: 150px;
    margin: 25px auto 0;
  }

  .el-carousel__container{
    height: 150px;
  }
  .slide_img{
    width: 700px;
    height: 150px;
  }
</style>
