<template>
  <div class="part photo-body wrapper">
	<div class="title-body">
		<span class="title-text float-left">相关证件</span>
		<span class="title-note float-left"></span>
	</div>
	<div class="photo-note">
		请上传您的就医证明、康复证明等能证明您相关身份的照片
	</div>
	<div class="photo-box-body wrapper" >
	<div id="photos">
		
	</div>
		<div class="add-btn float-left text-center" >
			<div class="getfile photo-box" 
					id="addPhoto"></div>
			<i class="iconfont">&#xe61a;</i>
			
		</div>

	</div>
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
    		serverId: ''
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
    	},
    	ceid:{type:String}
    },
    methods:{
    },
    ready(){
     	var that = this
      document.querySelector('#addPhoto').onclick = function () {
        let prevDiv = document.getElementById("photos");  
        let localId = ''
	    	wx.chooseImage({
	            count: 1, // 默认9
	            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
	            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
	            success: function (res) {
	                // alert(3333)
	                localId = res.localIds.toString();
	                // $('#logo').attr('src',res.localIds);
	                let child=document.createElement("div");
	                // console.log(evt.target.result)
	            	child.innerHTML = '<div style="overflow:hidden;height:3.0rem;width:3.0rem;border-radius: 0.3rem;background-color:#eee;margin-right:1rem;margin-bottom:0.5rem;float:left"><img src="' + res.localIds + '" /></div>';
	            	prevDiv.appendChild(child)
	                // alert(this.localId)
	                // alert('chenggong:' +that.serverId)
	                setTimeout(function () {
	                    wx.uploadImage({
	                        localId: localId, // 需要上传的图片的本地ID，由chooseImage接口获得
	                        isShowProgressTips: 1, // 默认为1，显示进度提示
	                        success: function (res) {
	                            console.log(res.serverId);// 返回图片的服务器端ID
	                            that.ceid = res.serverId
	                            // alert('zhi: ' +this.serverId)

	                        }
	                    });
	                }, 100);
	            }
	        });	
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
