<template>
  <div class="wrapper" @click="voiceAction($event)"
  		 :class=" data.can_listen ? 'voice' : 'voice-locked' "
  		 :style="{width: length; background-color:color }">
  	<div class="v-inner">
  	<!-- 计时 -->
	  	<div :class=" data.can_listen ? 'free' : 'unfree'"
	  				style="display: inline-block">
	  		<!-- 播放 暂停-->
	  			<i class="iconfont" style="font-size:16px" v-if="!is_play">&#xe632;</i>
	  			<i class="iconfont" style="font-size:16px" v-if="is_play">&#xe634;</i>
	  		<span class="v-time">
	  			{{ data.answer_time }}
	  			<audio :src="data.answer_url" :id="aid"></audio>
	  		</span>
	  	</div>
		<!-- 小锁 -->
		<i class="iconfont pull-right"
				v-if="!data.can_listen"
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
	  				
	  			}
	  		}
	  	},
	  	color: {type:String,default:'#2b8ff7'},
	  	index: '',
	  },
	  data(){
	  	return{
	  		isEva: false,
	  		is_free: true,
	  		is_play: false,
	  		time: '',
	  		aid:''
	  	}
	  },
	  methods:{
	  	// 点击voice后的动作
	  	voiceAction(e){
	  		e.preventDefault();
	  		// alert(111)
	  		if (!this.data.can_listen) return;
	  		// console.log(e)
	  		let voice = document.getElementById(this.aid)
	  		// console.log(voice)
			  if (!this.is_play) {
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
	  		eve.preventDefault();
	  		this.data.praise_count++
	  		// this.$el.style.height="1.8rem"
	  		 // alert(111)
		  	// 有帮助
	      $.ajax({
	          url: global.domain +'/question/praise_answer',
	          type:'POST', 
	          dataType: 'json',
	          data:{
	            token: global.token,
	            a_id:  this.data.a_id
	          },
	          // success: data => this.evaList = data.data,
	          error: err => console.error(err.toString())
	        });
	  		this.isEva = true;  	
	  		// 阻止事件传播、触发父组件
	  		eve.stopPropagation();  		
	  	},
	  	noHelp(eve){
	  		eve.preventDefault();
	  		// this.$el.style.height="1.8rem"
	  		this.isEva = true;  	
	  	}
	  },
	  computed: {
	  	length: function(){
	  		// alert(22233)
	  		console.log(1111)
	  		console.log(this.data.answer_time)
	  		return this.data.answer_time>60 ? '100%' : (this.data.answer_time)*5/6+50+'%'
	  	},
	  	// 将秒转换成分秒
	    min(){
	    	let time = this.time;
	      if (time>0 && time<60)
	      	return 0
	      else
	      	time = parseInt(time/60)
	      	return time
	    },
	    sec(){
				let time = this.time;
				if (time < 60)
					return time
				else
					time = time%60
					if (time<10)
						// 不足10前面加个0
						time = '0' + time
					return time
	    },
	  },
	  ready(){
	  	// 不用再前端获取时间了，后端获取
	  	this.aid = 'answer-'+this.index;
	  // 	console.log(this.aid)
	  	
			// var that = this
	  // 	setTimeout(function(){
	  // 		let t  = document.getElementById(that.aid).duration;
	  // 		let minute = (Math.floor(t/60%60) + 100 + '').substr(1);
   //    	let second = (Math.floor(t%60) + 100 + '').substr(1);
   //    	that.time = minute+":"+second;
	  // 		// console.log(that.time)
	  // 	},500);

			// var run = setInterval(function () {
			// 	var aa = document.getElementById(that.aid)
			// 	var time = document.getElementById(that.aid).duration;
			// 	console.log(aa)
			// 	console.log(time)
			// 	if(!isNaN(time)){
			// 		console.log(!isNaN(time))
			// 		clearInterval(run);
			// 		that.time = time
			// 	}else{
			// 		console.info("该歌曲的总时间为："+time+"秒")
			// 	}
			// 	}, 1000);



	  // 	$(".voice").blur(function(){
  	// 		// alert(111)
  	// 		this.$el.style.height="1.8rem"
			// }); 
			// $(".v-inner").blur(function(){
  	// 		// alert(111222	)
  	// 		this.$el.style.height="1.8rem"
			// }); 
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
		height 1.8rem
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
