<template>
  <div v-if="show">
  	<!-- 遮罩背景层 -->
  	<div class="modal-bg" id="modalBg"></div>
  	<div class="modal-item part">
  		<div class="mod-title"></div>
  		<div class="mod-content">
  			
  		</div>
  		<div class="mod-button">
  			<span class="m-b-1" @click="buttons[0].click">{{buttons[0].text}}</span>
  			<span class="m-b-2"></span>
  			<span class="m-b-3" @click="buttons[1].click">{{buttons[1].text}}</span>
  		</div>
  	</div>
  </div>
</template>

<script>
  export default{
  	props: {
  		show: { type: Boolean, default: false },
  		content: { type: String },
  	  buttons: { type: Array, default:[
  	  	{
  	  		text: '',
  	  		click: function(){},
  	  	} 
  	  ]
  	  }
  	},
  	methods:{
  		close(){
  			this.show = false;
  		},
  		test(){
  			alert('ok')
  		},
  		btnClick: click
  	},
  	ready(){
  		// let that = this;
  		// $('#as').click(function(){
  		// 	// that.show = false;	
  		// 	alert(1111);
  		// })
  	},

  }
</script>

<style lang="stylus">

	.modal-bg
		position: absolute;  
		top: 0%;  
		left: 0%;  
		width: 100%;  
		height: 100%;  
		background-color: black;  
		z-index: 1001;  
		-moz-opacity: 0.5;  
		opacity:.50;  
		// filter: alpha(opacity=50);
	.modal-item
		position: absolute;  
		top: 28%;  
		left: 10%;  
		width: 80%;  
		height: 33%;  
		border-radius: 10px
		z-index: 1002;  
		overflow: auto;		
		.mod-content
			padding 26px
			height 72%
		.mod-button
			display flex
			align-items center
			
			// justify-content center
			height 28%
			border-top 1px solid #e5e5e5
			.m-b-1
				flex 1
				text-align: center
			.m-b-2
				// flex 1
				height 50%
				border-left 1px solid #e5e5e5
			.m-b-3
				flex 1
				text-align: center
</style>
