<template>
  <div class="wrapper voice"
  		 :style="{width: data.time>60 ? '100%' : (data.time)*5/6+50+'%'; }" 
  		 @click="voiceAction($event)"
  		 >
  	<div class="v-inner">
  		<!-- 播放 暂停-->
			<i class="iconfont" v-if="!is_play">&#xe632;</i>
			<i class="iconfont" v-if="is_play">&#xe634;</i>
  		<!-- 计时 -->
  		<span class="v-time">
  			{{ data.time }}
  		</span>
  	</div>
  </div>
</template>

<script>
  export default{
	  props: {
	  	data: {
	  		type: Object,
	  	},
	  },
	  data(){
	  	return{
	  		isEva: false,
	  		is_play: false
	  	}
	  },
	  methods:{
	  	// 点击voice后的动作
	  	voiceAction(e){
	  		// console.log(e)
	  		if (!is_play) {
			    voice.play();
			    this.is_play = true
			  } else {
			    voice.pause();
			    this.is_play = false
			  }
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
		background-color: #fff;
	}

	.v-inner
		margin: 0 1rem;
		color: $ztc;
		i
			position absolute
			left 2.25rem
			font-size:16px
			margin-top: 2px
		.v-time
			margin-left: -3.0rem;
			margin-top: 2px
	
</style>
