<template>
  <nav-header title="问题详情" left="back"></nav-header>
  <div class="que-content wrapper">
    <question-card gouser="true" :data="datas" :count="count" type="public" :is-content=true></question-card>
  </div>
  <!-- 底部开始回答 -->
  <div class="bottom-record wrapper fixed-bot" v-if="!currentUser">
    <div class="record-box" v-if="isbox">
      <div class="record-left">
        <i class="iconfont record-icon" @click="recordbgn" 
           v-if="isStart===false">&#xe610;</i>
        <i class="iconfont record-icon2" @click="recordfin" 
           v-if="isStart===true">&#xe614;</i>
      </div>
      <div class="record-right">
        <span class="hint-text" v-if="isStart==false">点击一下，开始录音</span>
        <span class="hint-text" v-if="isStart==true">再次点击结束录音</span>
        <span class="time" id="showtime">{{voice.time}}</span>
      </div>
    </div>
    <button class="record-startbtn btn" @click="changebtn(event)">
      <span v-if="!isbox">
        <i class="iconfont">&#xe608;</i> 开始回答
      </span>
      <span v-if="isbox" @click.stop="cancle" style="display:inline-block;width: 100%">
        取消
      </span>
    </button>
  </div>
  <div class="bottom-record wrapper fixed-bot" v-if="isFinish===true">
    <div class="record-box  font-center">
      <span class="shiting-text">点击试听</span>

      <!-- voice组件 -->
      <div class="test-voice">
        <voicep @click="playVoice" id="playVoice" 
               :data="voice">
        </voicep>
      </div>

    </div>
    <div class="record-finishbtn btn">
      <div class="finish"><button class="btn" @click="cancle">取消</button></div>
      <div class="finish"><button class="btn" @click="again">重新录制</button></div>
      <div class="finish"><input class="btn submit" type="text" value="发布答案" @click="submit"></div>
    </div>
  </div>
  <div class="back" v-if="isfirst" @click="cancelBox">
    
  </div>
  <div class="select-box" v-if="isfirst">
    <div class="wrapper">
      点击用户头像，可查看该用户详细资料和测评数据
    </div>
    <div class="sel-btn wrapper" @click="closeBack">知道了</div>
  </div>
</template>

<script>
import QuestionCard from 'components/areaComp/QuestionCard'
import Voicep from 'components/funComp/Voicep'
import NavHeader from 'components/funComp/NavHeader'
import TopBar from 'components/areaComp/TopBar'
export default {
  data () {
    return {
      isfirst:false,//咨询师是否是第一次回答
      isbox:false,//是否出现录音区域框，false时不出现
      isStart:false,//是否开始录音，true时则开始录音，false时等待点击开始
      isFinish:false,//是否结束录音进入到试听阶段，true时录音结束进入到试听发布阶段
      token:'',
      datas:{},
      voice:{
        localId:'',
        serverId: '',
        time: '0:00',
        is_free: true
      },
      //时间计数
      t: 0,
      flag: '',
      count: "0",
      hasAnswer: false,
      currentUser: false,
    }
  },
  components:{
  	QuestionCard,Voicep,TopBar,NavHeader
  },
  ready(){
    let vm = this;
    if(localStorage.answer_num==0){
      this.isfirst=true
    }

    //微信一分钟录音停止
    wx.onVoiceRecordEnd({
        // 录音时间超过一分钟没有停止的时候会执行 complete 回调
        complete: function (res) {
            // vm.stopTime();
            vm.recordfin();
            vm.voice.localId = res.localId; 
            alert('录音已超过一分钟上限,你可以重新回答或者直接提交此次回答'); 
        }
    });

    $.ajax({
          url: global.domain +'/question/get_question_info',
          type:'POST', 
          dataType: 'json',
          data: {
            q_id: this.$route.params.qid,
            token: global.token,
          },
          success: function(data) {
            // console.log("aa"+data)
            this.datas = data.data
            this.count = data.data.answers.length.toString();
            if (this.datas.user_id == global.user.u_id) this.currentUser = true;
            console.log(this.datas);
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.datas, status, err.toString());
          }.bind(this)
      });
  },
  methods:{
    closeBack(){
      this.isfirst=false
    },
    changebtn(event){
      // 检查是否能回答
      if (this.hasAnswer || this.datas.has_answer==1) { 
        alert('你已经回答过了哦!'); return; }
      $.post(global.domain +'/question/check_answer',
        { token: global.token, q_id: this.$route.params.qid }, v => {
          // this.readList = v.data; 
          if (v.data == true) this.isbox=!this.isbox;
          else alert('已经不能再抢答了哦！');
        },'json');
      console.log('isbox',this.isbox)
    },
    // 时间计时器
    startTime(){
      // alert(111)
      var minute = 0, second = 0;
      minute = (Math.floor(this.t/60%60) + 100 + '').substr(1);
      second = (Math.floor(this.t%60) + 100 + '').substr(1);
      this.voice.time = minute+":"+second;
      // document.getElementById('showtime').innerHTML=minute+":"+second;
      this.t++;
      // if (this.t>60) { 
      //   this.stopTime();
      //   alert('录音已超过一分钟上限,可以重新回答或者提交回答'); 
      //   return;
      // }
      // alert(this.voice.time)
      this.flag = setTimeout(this.startTime, 1000);           
    },
    stopTime(){
      clearTimeout(this.flag);
      this.t = 0;
    },
    //开始录音
    recordbgn(){
      this.isStart=!this.isStart;
      this.startTime()
      var that = this
      // document.querySelector('#startRecord').onclick = function () {
        wx.startRecord({
          cancel: function () {
            alert('用户拒绝授权录音');
          },
          success: function (res) {
            
        },
        });
      // };
    },
    //停止录音
    recordfin(){
      this.isFinish=!this.isFinish;
      this.stopTime();
      var that = this  
      wx.stopRecord({
        success: function (res) {
          that.voice.localId = res.localId;
        },
        fail: function (res) {
          // alert(JSON.stringify(res));
        }
      });
    },
    //播放音频
    playVoice(){
      var that = this  
      if (that.voice.localId == '') {
        alert('请先录制一段声音');
        return;
      }
      wx.playVoice({
        localId: that.voice.localId
      });
    },
    //取消回答
    cancle(){
      // $.post(global.domain +'/question/cancel_answer',
      //   { token: global.token, q_id: this.$route.params.qid }, v => {
      //     // this.readList = v.data; 
      //     if (v.code!= 1) alert('取消失败！');
      //   },'json');
      this.isFinish=false;
      this.isbox=false;
      this.isStart=false;
      // 停止录音
      this.stopTime();
      wx.stopRecord({
        fail: function (res) {
          // alert(JSON.stringify(res));
          console.log('stopRecord调用失败')
        }
      });
      // 清空
      this.voice={
        localId:'',
        serverId: '',
        time: '0:00'
      };

    },
    //重新录制
    again(){
      this.isFinish=false; this.isbox=true;
      this.isStart=false;
      this.stopTime();
      //停止
      wx.stopRecord({
        fail: function (res) {
          // alert(JSON.stringify(res));
          console.log('stopRecord调用失败')
        }
      });
      // 清空
      this.voice={
        localId:'',
        serverId: '',
        time: '0:00'
      };
    },
    submit(){
      this.isFinish=false;
      this.isbox=false;
      this.isStart=false;
      var that = this
      if (this.voice.localId == '') {
        alert('请先录制一段声音');
        return;
        // return;
      }
      // 语音上传,然后保存到服务器
      wx.uploadVoice({
        localId: that.voice.localId,
        success: function (res) {
          that.voice.serverId = res.serverId;
          //保存到服务器
          $.post( global.domain +'/question/add_answer', 
            { 'token'      :  global.token,
              'q_id'       :  that.$route.params.qid,
              'answer_url' :  res.serverId,
              'user_name'  :  global.user.user_name,
              'answer_time':  that.voice.time
            },
            function (res) {
              if (res.code!=1) {
                alert('语音上传失败！')
                //取消回答
                // $.post(global.domain +'/question/cancel_answer',
                //   { token: global.token, q_id: this.$route.params.qid }, v => {
                //     // this.readList = v.data; 
                //     if (v.code != 1) alert('失败！');
                //   },'json');
                alert(res.msg)
              }
              else {that.hasAnswer=true; alert('回答成功！')};
            }, 'json');
        }
      });
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
  background-color: #299FFF;
  border-radius: 0.3rem;
  text-align center
}
.select-box{
  padding:0.7rem
  border:0.05rem solid #eee
  border-radius 0.5rem
  overflow hidden
  z-index: 100
  position:absolute
  width:60%;
  background-color #eee
  left 20%
  top 30%
}
.sel-btn{
  width 100%
  text-align center
  margin-top: 0.5rem;
  margin-bottom: -0.4rem;
  font-weight: 700;
}
.back{
  top:0
  left:0
  bottom:-2.5rem
  width:100%
  height:100%
  position:absolute
  z-index: 11
  background-color black
  opacity:0.5
}
</style>
