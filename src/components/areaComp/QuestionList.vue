<template>
  <div>
	  <div class="question-item" v-for="que in data">
	  	<div class="content part">
	  		{{ que.content }}
	  	</div>
	  	<div class="nock">
	  		
	  	</div>
			<div class="best-answer">
				<div class="helper-inf">
					
				</div>
				<div class="voice">
					
				</div>
				<div class="meta">
					
				</div>
			</div>
		</div>
  </div>
</template>

<script>
  export default{
	  props: {
	  	data: {
	  		type: Array,
	  		default() {
	  			return
	  				[
	  					{
	  						content: '同样是这些球星的第一次夺冠，为啥勇士都没人哭呢。特别是新FMVP比库里更淡定的样子是因为从上个赛季到这个赛季来了一次暴发户似的进化吗？'
	  					}
	  				]
	  		}
	  	}
	  },
	  components: {

	  },
  }
</script>

<style scoped lang="stylus">
.question-item
	height 29.3rem 
	

.content
	margin-top: 0.5rem
	padding 1.15rem 1.35rem 0 1.0rem

</style>
