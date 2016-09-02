<template>
  <div class="wrapper" 
  		 :class=" data.isFree ? 'voice' : 'voice-locked' "
  		 :style="{width: data.time>60 ? '100%' : (data.time)*5/6+50+'%' }"
  		 @click="voiceAction($el)">
  	<div class="v-inner">
  	<!-- 计时 -->
	  	<div :class=" data.isFree ? 'free' : 'unfree'"
	  				style="display: inline-block">
	  		<i class="iconfont">&#xe60a;</i>
	  		<span class="v-time">
	  			{{min}}:{{sec}}
	  		</span>
	  	</div>
		<!-- 小锁 -->
		<i class="iconfont pull-right"
				v-if="!data.isFree"
				style="color: #fff">&#xe60b;</i>
  	</div>
  	<!-- 评价  -->
	  <div class="v-evaluate">
	  	<div class="eva-text">
	  		请对该答案进行评价
	  	</div>
	  	<div class="eva-help">
	  		<a href="" class="button" style="margin-right:0.6rem">有帮助</a>
	  		<a href="" class="button">没有帮助</a>

	  	</div>
	  </div>
  </div>
</template>

<script>
  export default{
	  props: {
	  	data: {
	  		type: Object,
	  		default() {
	  			return {
	  				isFree: false
	  			}
	  		}
	  	}
	  },
	  methods:{
	  	voiceAction(el){

	  		if(this.data.isFree)
	  			el.style.height="6.5rem"
	  	}
	  },
	  computed: {
	  	// 将秒转换成分秒
	    min(){
	    	let time = this.data.time;
	      if (time>0 && time<60)
	      	return 0
	      else
	      	time = parseInt(time/60)
	      	return time
	    },
	    sec(){
				let time = this.data.time;
				if (time < 60)
					return time
				else
					time = time%60
					if (time<10)
						// 不足10前面加个0
						time = '0' + time
					return time
	    }
	  },
	  components: {

	  },
  }
</script>

<style scoped lang="stylus">
@import '../../assets/stylus.styl'

.voice{
	height: 1.8rem;
	line-height: 1.8rem;
	/*width: 100%;*/
	border-radius: 20px;
	background-color: $ztc;
	/*动画效果*/
	/*transition:all .3s ;*/
}

.voice-locked{
	height: 1.8rem;
	line-height: 1.8rem;
	border-radius: 20px;
	background-color: $ztc;
}

.v-inner
	margin: 0 1rem;
	.free
		color: #fff;
	.unfree
		color: #69c4ea;

.v-time{
	margin-left: 1.0rem;
}

.v-evaluate{
	width: 94%;
  margin-left: 3%;
	padding-top: 0.5rem;
	text-align: center;
	border-top: 1px solid #69c4ea;
	color:#fff;
}

.eva-help .button{
	width: auto;
	color: #fff;
	display: inline-block;
	background-color: #3eb3e4;
	font-size: 12px;
}


</style>
