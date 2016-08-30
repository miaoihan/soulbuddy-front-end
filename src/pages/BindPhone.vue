<template>
	<div>
    <top-bar></top-bar>
		<input-box title="手机号码" btnname="发送验证码" name="phonenum" style="margin-top:1.0rem"></input-box>
		<input-box title="验证码" name="identcode" style="margin-top:0.05rem"></input-box>
    <div class="finish-body">
      <button class="finishBtn" v-on:click="handleClick(event)">
        完成
      </button>
    </div>
    
	</div>
</template>

<script>
import InputBox from '../components/areaComp/InputBox';
import TopBar from '../components/areaComp/TopBar';
export default {
  components: {
    InputBox,TopBar,
  },
  data () {
    return {
      
    }
  },
  methods:{
    handleClick(event){
      console.log("click the finishBtn")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.finish-body{
  overflow: hidden;
  height: 2.25rem;
  margin-top: 1.5rem;
}
.finishBtn{
  display: block;
  height:2.25rem;
  width: 100%;
  background-color: #29abe2;
  font-size: 0.8rem;
  color: #6cc5eb;
  text-align: center;
  line-height: 2.25rem;
  border: 0;
}
</style>
