<template>
<nav-header title="绑定手机"></nav-header>
	<div class="wrapper" style="margin-top: 1.0rem">
		<div class="inputbox-body">
      <!-- <span class="inputbox-title" :style="{color:TitleColor}">{{title}}</span> -->
      <input type="text" class="inputbox-text" 
             placeholder="手机号码" id="mobile"
             v-model="mobile"></input>
    <div class="button-body">
      <button class="inputbox-button" :class="is_send ? 'issend':'' " @click="sendCode" :disabled="false">
        发送验证码
      </button>
    </div>
  </div>
	</div>
  <div class="inputbox-body">
      <!-- <span class="inputbox-title" :style="{color:TitleColor}">{{title}}</span> -->
      <input type="text" class="inputbox-text" placeholder="验证码" v-model="code"></input>
    <div class="button-body">
    </div>
  </div>
    <div class="finish-body">
      <button class="finishBtn" @click="bindAndLogin" id="">
        完成
      </button>

    </div>    
  </div>
</template>

<script>
import InputBox from 'components/areaComp/InputBox';
import TopBar from 'components/areaComp/TopBar';
import NavHeader from 'components/funComp/NavHeader';
export default {
  components: {
    InputBox,TopBar,NavHeader
  },
  data () {
    return {
      code: null,
      mobile: '',
      is_send: false,
    }
  },
  props: {
    bind: { type: Boolean, default: false },
  },
  created(){
    this.bind = false
  },
  methods:{
    sendCode(){
      if (this.checkPhone()) {
      $.post(global.domain +"/register/mobile_verify_randnum", 
        { mobile:  this.mobile,
          type  : 'reg'},
        v =>{
          if (v.code==1) {
            console.log('ok')
            this.is_send = true;
            alert('发送成功')
         }
         else if(v.code==0){
          alert('短信服务出现问题了，请稍后重试')
         }else if(v.msg=='您的手机号已经被注册'){
            alert('您的手机号已经被注册')}
        },'json');}
    },
    bindAndLogin(){
      if (this.checkPhone()) {
        $.post(global.domain +"/user/bindmobile", 
            { token : localStorage.token,
              mobile: this.mobile,
              code  : this.code
               },
            v =>{
              if (v.code==1) {
                // 将手机号码添加到user,后面主动获取了
                // global.user['mobile'] = this.mobile
                this.bind = true
                // this.$router.go({ path:'/home' })
                alert('验证成功！')
                // location.href = 'http://han.s3.natapp.cc/#!/home'
                this.$router.go('/home')
             }
             else{
              alert('验证失败，请重新输入')
              this.code = ''
             }
            },'json');}
    },
    checkPhone(){
      if(''== this.mobile) { alert('手机号码不能为空！'); return false}
      if(!this.isMobile(this.mobile)){
        alert('请填写正确的手机号！');
        return false
      }else{
        return true;
      }
    },
    isMobile( s ){   
      let regu =/^[1][345678][0-9]{9}$/; 
      let re = new RegExp(regu); 
      if (re.test(s)) return true; 
      else return false; 
    },
    pushHistory() {  
      var state = {  
          title: "title",  
          url: "#"  
      };  
      window.history.pushState(state, "title", "#");  
    }  
  },
  ready(){
    this.bind = false;

    let flag = false;
    //Chrome和Safari页面加载时会触发popstate事件
    // setTimeout(function(){
    //   flag = true;
    // }, 500)
    let vm = this
    vm.pushHistory();
    // alert(vm.pushHistory)
      window.addEventListener("popstate", function(e) { 
        //防止跳转到home后关闭页面
      if (location.hash === '#!/bind') 
        WeixinJSBridge.call('closeWindow');
      // alert("我监听到了浏览器的返回按钮事件啦");//根据自己的需求实现自己的功能 
    }, false);

    
    

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../assets/stylus.styl'

.inputbox-body{
  overflow: hidden;
  width: 100%;
  height: 2.5rem;
  background-color: #fff;
  font-size: 0.8rem;
  border-bottom 1px solid #ebebeb
}
.inputbox-title{
  float: left;
  line-height: 2.5rem;
  margin-left: 1.0rem;

}
.inputbox-text{
  float: left;
  height: 2.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  border:0;
  /*width: 100%;*/
  /*display: block;*/
}
input:focus{
    border:0;
}
/*.button-body{
  margin-top: 0.55rem;
  overflow: hidden;
  height: 1.4rem;
}*/
.inputbox-button{
  position: absolute;
  font-size: 0.7rem;
  height: 1.4rem;
  width: 4.75rem;
  right: 0.6rem;
  border-radius: 1.4rem;
  background-color: #2b8ff7;
  color: #fff;
  border:0;
  margin-top: 0.55rem;
}
.display{
  display: none;
}

.finish-body{
  overflow: hidden;
  height: 2.25rem;
  margin-top: 1.5rem;
}
.finishBtn{
  display: block;
  height:2.25rem;
  width: 100%;
  background-color: $ztc;
  font-size: 0.8rem;
  color: #fff;
  text-align: center;
  line-height: 2.25rem;
  border: 0;
}

.issend{
  background-color: #999
}
</style>
