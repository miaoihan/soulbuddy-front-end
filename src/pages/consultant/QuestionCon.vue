<template>
  <nav-header title="问题详情"></nav-header>
  <div class="que-content wrapper">
    <question-card :data="data" :is-content=true></question-card>
  </div>
  <div class="bottom-record wrapper">
    <div class="record-box" v-if="isbox===true">
      <div class="record-left">
        <i class="iconfont record-icon" @click="recordbgn" v-if="isStart===false">&#xe610;</i>
        <i class="iconfont record-icon2" @click="recordfin" v-if="isStart===true">&#xe614;</i>
      </div>
      <div class="record-right">
        <span class="hint-text" v-if="isStart===false">点击一下，开始录音</span>
        <span class="hint-text" v-if="isStart===true">再次点击结束录音</span>
        <span class="time">0:00</span>
      </div>
    </div>
    <button class="record-startbtn btn" @click="changebtn(event)">
      <span v-if="isbox===false">
        <i class="iconfont">&#xe608;</i> 开始回答
      </span>
      <span v-if="isbox===true">
        取消
      </span>
    </button>
  </div>
  <div class="bottom-record wrapper" v-if="isFinish===true">
    <div class="record-box  font-center">
      <span class="shiting-text">点击试听</span>
      <div class="test-voice">
        <voice></voice>
      </div>
    </div>
    <div class="record-finishbtn btn">
      <div class="finish"><button class="btn" @click="cancle">取消</button></div>
      <div class="finish"><button class="btn" @click="again">重新录制</button></div>
      <div class="finish"><input class="btn submit" type="submit" name="submit" value="发布答案" @click="submit"></div>
    </div>
  </div>
</template>

<script>
import QuestionCard from 'components/areaComp/QuestionCard'
import Voice from 'components/funComp/Voice'
import NavHeader from 'components/funComp/NavHeader'
import TopBar from 'components/areaComp/TopBar'
export default {
  data () {
    return {
      isbox:false,//是否出现录音区域框，false时不出现
      isStart:false,//是否开始录音，true时则开始录音，false时等待点击开始
      isFinish:false,//是否结束录音进入到试听阶段，true时录音结束进入到试听发布阶段
    }
  },
  components:{
  	QuestionCard,Voice,TopBar,NavHeader
  },
  props:{
  	data:{
  		type:Object,
  		default(){
  			return{qname: '王小喵33',
  				     queimg:require('assets/logo.png'),

		       	   pay: '25',
		       	   quetitle:'你可以在网上找到类似上述的其他脚本，它们不管多么优秀，其原理都是一样的，通过对keydown',
		       	   quecontent:'是一个比较特殊的样式，我们可以用它代替我们通常所用的标题截取函数有300px的宽度。如果用标题截取函数，则标题不是完整的',
		       	   type:'private',
		       	   answernum:2,
		       	   date:'08-14'}
  		}
  	},
  },
  ready:function(){

  },
  methods:{
    changebtn(event){
      this.isbox=!this.isbox;
      console.log('isbox',this.isbox)
    },
    recordbgn(){
      this.isStart=!this.isStart;
    },
    recordfin(){
      this.isFinish=!this.isFinish;
    },
    cancle(){
      this.isFinish=false;
      this.isbox=false;
      this.isStart=false;
    },
    again(){
      this.isFinish=false;
      this.isbox=true;
      this.isStart=false;
    },
    submit(){
      this.isFinish=false;
      this.isbox=false;
      this.isStart=false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../../assets/stylus.styl'
.que-content{
	background-color: #fff;
	padding:1rem 1rem 0rem 1rem;
}
.bottom-record{
  position: fixed;
  bottom:0;
  width: 100%;
}
.btn{
  background-color: $ztc;
  color: #fff;
  border: 0;
}
.record-startbtn{
  width: 100%;
  height: 2.25rem;
  border: 0;
}
.record-box{
  position: relative;
  overflow: hidden;
  height: 6.0rem;
  background-color: $ztc;
  color:#fff;
}
/*进行录音中*/
.record-left{
  overflow: hidden;
  float: left;
  margin-left: 1.25rem;
  height: 6.0rem;
  width: 3.05rem;
  line-height: 6.0rem;
}
.record-icon{
  float: left;
  font-size: 3.05rem;
}
.record-icon2{
  float: left;
  font-size: 2.95rem;
}
.record-right{
  overflow: hidden;
  float: left;
  margin-left: 1.25rem;
  height: 6rem;
}
.hint-text{
  display:block;
  margin-top: 1.75rem;
  font-size: 0.75rem;
  color:#a4dbf2;
}
.time{
  font-size: 0.95rem;
  font-weight: 700;
}
/*录音完成试听*/
.shiting-text{
  display:block;
  font-size: 0.65rem;
  color: #a4dbf2;
  margin-top: 0.55rem;
}
.test-voice{
  height: 1.65rem;
  width: 10.75rem;
  margin-top: 1.2rem;
  margin-left: 1.0rem;
  /*background-color: #fff*/
}
.record-finishbtn{
  width: 100%;
  height: 2.25rem;
  overflow: hidden;
  line-height: 2.25rem;
}
.finish{
  text-align: center;
  height: 100%;
  width: 33.33%;
  float: left;
}
.submit{
  height: 1.5rem;
  width: 3.7rem;
  background-color: #48b7e6;
  border-radius: 0.3rem;
}
</style>
