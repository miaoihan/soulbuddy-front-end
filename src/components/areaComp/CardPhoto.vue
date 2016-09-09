<template>
  <div class="part photo-body wrapper">
	<div class="title-body">
		<span class="title-text float-left">相关证件</span>
		<span class="title-note float-left">(非必须)</span>
	</div>
	<div class="photo-note">
		请上传您的就医证明、康复证明等能证明您相关身份的照片
	</div>
	<div class="photo-box-body wrapper">
		<div class="photo-box float-left" v-for="img in imgs">
		
		</div>
		<div class="add-btn float-left text-center" @click="addPhoto">
			<i class="iconfont">&#xe61a;</i>
		</div>
	</div>
  </div>
</template>

<script>
  export default{
    components: {},
    data(){
    	return{

    	}
    },
    props:{
    	imgs:{
    		type:Array,
    		default(){
    			return[
    				{imgUrl:""},
    			]
    		}
    	}
    },
    methods:{
    	addPhoto(){
    		this.imgs.push({imgUrl:""})
    	}
    }
  }
</script>

<style scoped lang="stylus">
@import '../../assets/stylus.styl'
.photo-body{
	// height 9.1rem
	width 100%
}
.title-body{
	height 2.5rem
	line-height 2.5rem
	overflow hidden
	border-bottom 0.05rem solid #e3e3e3
}
.title-text{
	font-size 0.8rem
	color black
}
.title-note{
	margin-left 0.75rem
	font-size 0.7rem
	color #b4b4b4
}
.photo-note{
	font-size 0.65rem
	color #d2d2d2
	margin-top 0.7rem
	margin-bottom 1.1rem
}
.photo-box-body{
	margin-bottom:1rem
	// margin-right -1rem
} 
.photo-box{
	height 3.0rem
	width 3.0rem
	border-radius 0.3rem
	background-color #eee
	margin-right 1rem
	margin-bottom 0.5rem
}
.add-btn{
	position relative
	height 3.0rem
	width 3.0rem
	border 0.1rem solid $ztc
	border-radius 0.3rem
	line-height 3.0rem
}
.iconfont{
	font-size 1.2rem
	color $ztc
}
</style>
