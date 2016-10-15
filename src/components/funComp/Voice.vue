<template>
	
  <div class="wrapper"
  		 :class=" data.is_free ? 'voice' : 'voice-locked' "
  		 :style="{width: data.time>60 ? '100%' : (data.time)*5/6+50+'%';background-color:color }"
  		 @click="voiceAction($event)"
  		 >
  	<div class="v-inner">
  	<!-- 计时 -->
	  	<div :class=" data.is_free ? 'free' : 'unfree'"
	  				style="display: inline-block">
	  		<i class="iconfont">&#xe60a;</i>
	  		<span class="v-time">
	  			{{min}}:{{sec}}
	  		</span>
	  	</div>
		<!-- 小锁 -->
		<i class="iconfont pull-right"
				v-if="!data.is_free"
				style="color: #fff; margin-top:2px">&#xe60b;</i>
  	</div>
  	<!-- 评价  -->
	  <div class="v-evaluate">
	  	<div class="eva-text">
	  		请对该答案进行评价
	  	</div>
	  	<div class="eva-help">
	  		<button href="#" class="button" style="margin-right:0.6rem"
	  			 			@click="hasHelp($event)"
	  			 			:disabled="isEva">有帮助</button>
	  		<button href="#" class="button"
	  						 @click="noHelp($event)"
	  						 :disabled="isEva">没有帮助</button>
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
	  				is_free: false,
	  				
	  			}
	  		}
	  	},
	  	color:{type:String,default:'#2b8ff7'}
	  },
	  data(){
	  	return{
	  		isEva: false,
	  	}
	  },
	  methods:{
	  	// 点击voice后的动作
	  	voiceAction(e){
	  		console.log(e)
	  		e.preventDefault();
	  		// 免费
	  		if(this.data.is_free){}
	  			// 还没评价
	  			// if (!this.isEva)
	  				// this.$el.style.height="6.5rem"
	  	},

	  	closeVoice(){
	  		
	  		
	  	},

	  	hasHelp(eve){
	  		this.data.like++
	  		// this.$el.style.height="1.8rem"
	  		this.isEva = true  	
	  		// 阻止事件传播、触发父组件
	  		eve.stopPropagation()  		
	  	},
	  	noHelp(eve){
	  		// this.$el.style.height="1.8rem"
	  		this.isEva = true  	
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
	  ready(){
	  	$(".voice").blur(function(){
  			// alert(111)
  			this.$el.style.height="1.8rem"
			}); 
			$(".v-inner").blur(function(){
  			// alert(111222	)
  			this.$el.style.height="1.8rem"
			}); 
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
	.voice:hover
		height 6.5rem

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

	.eva-help
		button
			width: auto;
			color: #fff;
			display: inline-block;
			background-color: #3eb3e4
			font-size: 12px;
		button:disabled
			background-color: #999
</style>
