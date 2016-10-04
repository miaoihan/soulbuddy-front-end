<template>
  <div class="top wrapper">
    <div class="person-photo-pro wrapper">
      <img src="" alt="">
    </div>
    <div class="nik-body wrapper">
      <div class="nikname wrapper">
        笔三
      </div>
      <div class="border">   
      </div>
      <div class="nikname-make wrapper">
        <a href="" style="color:#999999">修改昵称</a>
      </div>
    </div>
  </div>
  <div class="profile-list wrapper">
    <change-btn btntext="绑定手机" title-color="black" :placeholder="phonenum" class="change-btn-pro"></change-btn>
    <change-btn btntext="年龄" title-color="black" placeholder="请选择" class="change-btn-pro"></change-btn>
    <change-btn btntext="性别" title-color="black" placeholder="请选择" class="change-btn-pro"></change-btn>
    <change-btn btntext="学历" title-color="black" placeholder="请选择" class="change-btn-pro"></change-btn>
    <change-btn btntext="婚姻状况" title-color="black" placeholder="请选择" class="change-btn-pro"></change-btn>
    <input-box title="工作" name="job" title-color="black" placeholder="请填写" class="input-box"></input-box>
  </div>
  <div class="textarea-pro">
      <textarea class="inputarea-pro" maxlength="150" name="evaluation" placeholder="请填写自我评价（最多150个字）"></textarea>
    </div>
  <!-- <div style="height:5.0rem;margin-top:1.0rem"> -->
    
  <!-- </div> -->
  
</template>

<script>
import InputBox from '../../components/funComp/InputBox'
import ChangeBtn from '../../components/funComp/ChangeBtn'
  export default{
    components: {
    	InputBox,ChangeBtn
    },
    props:{
    phonenum:{type:String,default:"156156156"}
  },
  }
</script>

<style>
.top{
  overflow: hidden;
  height: 5.4rem;
  background-color: #ffffff;
  padding-right: 0.75rem;
}
.person-photo-pro{
  float: left;
  border-radius :3.2rem;
  height: 3.2rem;
  width: 3.2rem;
  background-color: #efefef;
  margin-top: 1.05rem;
  margin-left: 0.75rem;
}
.nik-body{
  float: left;
  height: 3.2rem;
  margin-top:  1.05rem;
  margin-left: 0.75rem;
  width:69%;
}
.nikname{
  /*float: left;*/
  margin-top: 0.35rem;
  font-size: 0.7rem;
  /*margin-left: 0.5rem;*/
}
.border{
  height: 0.05rem;
  margin-top: 0.3rem;
  background-color: #e3e3e3;
  width: 100%;
}
.nikname-make{
  margin-top: 0.3rem;
  font-size: 0.7rem;
}
.profile-list{
  margin-top: 1.0rem;
  /*height: 2.5rem;*/
  
}
.change-btn-pro{
  margin-bottom: 0.05rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.input-box{
  margin-top: 0.05rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.textarea-pro{
  margin-top: 1rem;
  width: 100%;
  height: 5.0rem;
  padding:0.75rem 1.0rem;
  background-color: #fff;
}
.inputarea-pro{
  width: 100%;
  height:100%;
  border:0;
  resize: none;
}
</style>
