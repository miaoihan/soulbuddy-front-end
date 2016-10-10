<template>
  <div class="card-body relative wrapper">
  	<img :src="" class="img-evac">
    <div class="top-title wrapper relative">
      <i class="iconfont title-test relative">&#xe604;</i>
      <span class="relative title-test-text">心理测评</span>
      <i class="iconfont title-next relative">&#xe60d;</i>
      <a v-link="'eva'" class="checkall relative">查看全部评测</a>
    </div>
    <div class="swiper-container" style="margin-top:0.8rem">
      <div class="swiper-wrapper">
          <div class="swiper-slide card-rall" style="height:5rem;text-align:center;" v-for="eva in data">
          <div class="opacityback">
            
          </div>
            <span class="eva-title">{{eva.title}}</span>
            <a v-link="'/home/selfeva'" class="start-btn">开始</a>
          </div>
          
      </div>
    </div>
  </div>
</template>

<script>
import swiper from 'assets/swiper/swiper.min.js'
import NavHeader from 'components/funComp/NavHeader'
import FuncNav from 'components/areaComp/FuncNav.vue'
import QuestionList from 'components/areaComp/QuestionList.vue'
  export default{
    components: {
    	NavHeader,FuncNav,QuestionList
    },
    data(){
      return {
        
      }
    },
    props:{
      data:{
        type:Array,
        default(){
          return[

          ]
        }
      },
    },
    ready:function(){
      console.log(123);
      var mySwiper = new Swiper ('.swiper-container', {
          freeMode : true,
          loop: true,
          slidesPerView:1.54,
          paginationClickable: true,
          spaceBetween: 10
      })
    }
  }
</script>

<style>
.relative{
  position:relative
}
.card-body{
  height:11.5rem;
  width:100%;
}
.img-evac{
  width: 100%;
  height: 100%;
  position:absolute;
  z-index: -1;
  left: 0
}
.top-title{
  margin-top: 1rem;
  height: 3.0rem;
  width: 100%;
  line-height: 3.0rem;
}
.title-test{
  z-index: 10;
  float: left;
  margin-left: 1.5rem;
  font-size: 2.0rem;
  color:#fff;
}
.title-test-text{
  float: left;
  margin-left: 0.8rem;
  display: block;
  z-index: 10;
  font-family: .PingFang-SC-Medium;
  font-size: 18px;
  color: #FFFFFF;
  line-height: 2.8rem
}
.title-next{
  z-index: 10;
  float: right;
  margin-right: 1rem;
  font-size: 0.3rem;
  color:#fff;
}
.checkall{
  z-index: 10;
  float: right;
  opacity: 0.6;
  font-family: .PingFang-SC-Regular;
  font-size: 12px;
  color: #FFFFFF;
  margin-right: 0.25rem;
  line-height: 2.8rem
}
/*.swiper-container{
  height: 5.0rem;
}*/
.swiper-slide{
  overflow: hidden;
  border-radius: 5px;
}
.opacityback{
  position: absolute;
  z-index: 1;
  background: #fff;
  opacity: 0.3;
  height: 100%;
  width: 100%;
  border-radius: 5px;
}
.eva-title{
  opacity: 1;
  position: relative;
  z-index: 100;
  display: block;
  font-family: .PingFang-SC-Medium;
  font-size: 14px;
  color:#fff;
  margin-top: 0.75rem;
}
.start-btn{
  position: relative;
  z-index: 100;
  width: 3.2rem;
  height: 1.4rem;
  line-height: 1.4rem;
  border: 1px solid #fff;
  border-radius: 25px;
  margin:0 auto;
  margin-top: 0.75rem;
  font-family: .PingFang-SC-Medium;
  font-size: 13px;
  color: #ffffff;
}
</style>
