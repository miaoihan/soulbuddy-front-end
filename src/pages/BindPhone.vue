<template>
	<div>
		<input-box title="手机号码" buttonName="发送验证码"></input-box>
		<input-box title="验证码" style="margin-top:.01rem"></input-box>
	</div>
</template>

<script>
import InputBox from '../components/areaComp/InputBox'
export default {
  components: {
    InputBox
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
