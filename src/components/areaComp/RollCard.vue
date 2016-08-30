<template>
  <div class="swiper-container">
		<div class="swiper-wrapper">
		    <div class="swiper-slide" >
		    	<a href="3">
				    123
		    	</a>
		    </div>
		</div>
		<div class="swiper-pagination" style="margin-bottom:7px"></div>
    </div>
</template>

<script>
import swiper from '../../assets/swiper/swiper.min.js'
export default {
  data () {
    return {
      
    }
  },
  ready:function(){
   	console.log(123);
   	var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    autoplay: 3000,
		    pagination: '.swiper-pagination',
	})
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../assets/swiper/swiper.min.css';
</style>
