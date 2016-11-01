<template>
  <nav-header title="心灵伙伴" left="back"></nav-header>
  <div class="far-bom">
	  <div class="quecard wrapper">
	    <span class="card-name">询问我的问题</span>
	    <div class="swiper-container container-20-lr" id="swp5">
			<div class="swiper-wrapper">
			    <div class="swiper-slide" v-for="data in myQues" v-if="data.answer_count==0">
			    	<a v-link="{name:'answer', params:{qid:data.q_id} }">
					    <div style="width:100%;">
					    	<div class="person-img quer-top">
					    		<img :src="data.logo" class="img-body">
					    	</div>
					    	<div class="quername quer-top">
					    		{{data.user_name}}
					    	</div>
					    	<div class="paymoney quer-top">
					    		已支付￥{{data.reward_money}}
					    	</div>
					    </div>
				    	<div class="que-text">
				    		<p>{{data.title}}</p>
				    	</div>
			    	</a>
			    </div>
			    <div class="swiper-slide" v-if="myQues.length==0">
				    <div class="que-text">
				    	<p>暂时没有人向我咨询</p>
				    </div>
			    </div>
			</div>
	    </div>
	  </div>
	  <div class="que-item" v-for="listdata in otherQues" v-if="listdata.answer_count<3">
	  	<question-card type="public" :data="listdata"></question-card>
	  </div> 
	  <!-- <answer-card></answer-card> -->
  </div>
</template>

<script>
import swiper from 'assets/swiper/swiper.min.js'
import NavHeader from 'components/funComp/NavHeader'
import QuestionCard from 'components/areaComp/QuestionCard'
export default {
	components:{
		NavHeader,QuestionCard
	},
	
  data () {
    return {
      token:'',
  		myQues:[],
  		otherQues:[],
    }
  },
  created(){
  	// 咨询我的问题
	  	$.ajax({
          url: global.domain +'/question/get_need_answer_list',
          type:'POST', 
          dataType: 'json',
          async: false,
          data: {
          	page:1,
          	type:1,		
						token:global.token,
		  		},
          cache: false,
          success: function(data) {
          	// console.log(data)
            this.myQues = data.data
            console.log('----------person: '+this.myQues);
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(err.toString());
          }.bind(this)
        });
  },
   ready:function(){
        $.ajax({
          url: global.domain +'/question/get_need_answer_list',
          type:'POST', 
          dataType: 'json',
          data: {
          	page:1,
          	type:2,		
						token:global.token,
		  	},
          success: function(data) {
          	// console.log(data)
            this.otherQues = data.data
            console.log('person: '+this.otherQues);
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(err.toString());
          }.bind(this)
        });
        // console.log(999999999999999999999)
        var mySwiper = new Swiper ('#swp5', {
			    freeMode : true,
			    loop: false,
			    slidesPerView:1.42,
	        paginationClickable: true,
	        spaceBetween: 15
		})
   }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../assets/swiper/swiper.min.css';
.quecard{
	/*margin-top: 1.55rem;*/
	overflow: hidden;
	/*margin-top: -6rem;*/
	height: 9.25rem;
	width: 100%;
	background-color: #2b8ff7;
}
.card-name{
	display: block;
	margin-top: 1.15rem;
	margin-left: 1.15rem;
	color: #fff;
	font-size: 0.8rem
}
.swiper-container{
	margin-top: 0.75rem;
	height: 5.0rem;
}
.swiper-wrapper{
}
.swiper-slide{
	overflow: hidden;
  height: 5rem;
  background-color: #299fff;
  border-radius: 0.25rem;
}
.quer-top{
	margin-top: 0.6rem;
	color: #fff;
	height: 1.5rem;
	line-height: 1.5rem;
}
.person-img{
	overflow: hidden;
	width: 1.5rem;
	border-radius: 1.5rem;
	background-color: #fff;
	float: left;
	margin-left:0.55rem;
}
.quername{
	float: left;
	margin-left: 0.4rem;
}
.paymoney{
	float: right;
	margin-right: 0.5rem;
}
.que-text{
	float: left;
	overflow: hidden;
	width: 90%;
	margin-top: 0.55rem;
	margin-left: 5%;
	font-size: 0.65rem;
	color: #b1e0f4;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
.que-item{
	background-color: #fff;
	padding:1rem 1rem 0rem 1rem;
	overflow: hidden;
	margin-bottom: 0.5rem;
}
</style>