<template>
  <div class="part photo-body wrapper">
	<div class="title-body">
		<span class="title-text float-left">相关证件</span>
		<span class="title-note float-left">(非必须)</span>
	</div>
	<div class="photo-note">
		请上传您的就医证明、康复证明等能证明您相关身份的照片
	</div>
	<form class="photo-box-body wrapper" method="post" enctype="multipart/form-data"
				action="javascript: yulan();" >
	<div id="photos">
		
	</div>
		<div class="add-btn float-left text-center" >
			<input type="file" class="getfile photo-box" 
					id="tt" @change="addPhoto()">
			<i class="iconfont">&#xe61a;</i>
			</input>
		</div>

	</form>
	<!-- <input type="file" class="" @click="addPhoto" id="tt">
	<button @click="getv">get</button> -->
  </div>


</template>

<script>
  export default{
    components: {},
    data(){
    	return{
    		num:0,
    	}
    },
    props:{
    	imgs:{
    		type:Array,
    		default(){
    			return[
    				
    			]
    		}
    	},
    	ids:{
    		type:Array,
    		default(){
    			return[

    			]
    		}
    	}
    },
    methods:{
    	addPhoto(){	
    		// let num = this.num
    		// this.ids.push(num);
    		// console.log('num is:',num);
    		// let item = "photo"+num;
    		// console.log('id is:',item);
    		var prevDiv = document.getElementById("photos");    		
    		var fileInput = document.getElementById('tt');
    		// console.log(fileInput);
    		var reader = new FileReader();
    		reader.onload = function(evt){
                console.log(prevDiv)
                var child=document.createElement("div");
                // console.log(evt.target.result)
            	child.innerHTML = '<div style="overflow:hidden;height:3.0rem;width:3.0rem;border-radius: 0.3rem;background-color:#eee;margin-right:1rem;margin-bottom:0.5rem;float:left"><img src="' + evt.target.result + '" /></div>';
            	prevDiv.appendChild(child)
            
            }
            // prevDiv.innerHTML = '<div style="overflow:hidden;height:3.0rem;width:3.0rem;border-radius: 0.3rem;background-color:#eee;margin-right:1rem;float:left" class="photo-box float-left" ><img src="' + evt.target.result + '" /></div>';
 //            overflow:hidden
	// height 3.0rem
	// width 3.0rem
	// border-radius 0.3rem
	// background-color #eee
	// margin-right 1rem
			reader.readAsDataURL(fileInput.files[0]);
    		this.num=this.num+1;
    	},
    },
    ready(){
    	
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
	// height
	// margin-bottom:1rem
	// margin-right -1rem
} 
.photo-box{
	overflow:hidden
	height 3.0rem
	width 3.0rem
	border-radius 0.3rem
	background-color #eee
	margin-right 1rem
	// margin-bottom 0.5rem
}
.add-btn{
	position relative
	height 3.0rem
	width 3.0rem
	border 0.1rem solid $ztc
	border-radius 0.3rem
	line-height 2.8rem
	margin-bottom 1rem
}
.getfile{
	position:absolute;
 	font-size:5.0rem; 
 	opacity:0; 
 	// filter:alpha(opacity=0);
}
.iconfont{
	font-size 1.2rem
	color $ztc
}
</style>
