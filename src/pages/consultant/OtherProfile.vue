<template>
<nav-header title="用户资料" left="back"></nav-header>
<div class="far-bom">
  <div class="top wrapper">
  <!-- 头像 -->
    <div class="person-photo-pro wrapper">
      <img :src="user.logo" class="avator" id="logo">
    </div>
    <div class="nik-body wrapper">
      <div class="nikname wrapper">
        <span name="user_name" class="nikname-val" style="width:5.0rem">
        {{user.user_name}}
        </span>
      </div>
    </div>
  </div>
  <div class="container-20" style="font-size:0.55rem;margin-bottom:0.5rem;padding-bottom:0">TA 已完成 {{user_access.length}} 份心理测评</div>
  <eva-card :datap="user_access" type="other" v-if="user_access.length!=0"></eva-card>
  <div class="profile-list wrapper">
    <change-btn :is-icon="false" btntext="绑定手机" title-color="black" :placeholder="user.mobile" class="change-btn-pro"  place-color="#000" ></change-btn>
    <change-btn :is-icon="false" btntext="年龄" title-color="black" :placeholder="user.borth_date" class="change-btn-pro" place-color="#000"></change-btn>
    <change-btn :is-icon="false" btntext="性别" title-color="black" :placeholder="sex[user.sex-1]" class="change-btn-pro" place-color="#000"></change-btn>
    <change-btn :is-icon="false" btntext="学历" title-color="black" :placeholder="qualifications[user.education-1]" class="change-btn-pro" place-color="#000"></change-btn>
    <change-btn :is-icon="false" btntext="婚姻状况" title-color="black" :placeholder="marriage[user.marital_status-1]" class="change-btn-pro" place-color="#000"></change-btn>
    <change-btn :is-icon="false" btntext="工作" title-color="black" :placeholder="user.work" class="change-btn-pro" place-color="#000" ></change-btn>
    
  </div>
  <div class="textarea-pro">
      <textarea class="inputarea-pro" maxlength="150" name="intro" placeholder="请填写自我评价（最多150个字）" disabled="disabled">{{user.intro}}</textarea>
  </div>    
  </div>
</template>

<script>
import InputBox from 'components/funComp/InputBox'
import ChangeBtn from 'components/funComp/ChangeBtn'
import SelectBtn from 'components/funComp/SelectBtn'
import NavHeader from 'components/funComp/NavHeader'
import EvaCard from 'components/funComp/EvaCard'
  export default{
    components: {
    	InputBox,ChangeBtn,SelectBtn,NavHeader,EvaCard
    },
    data(){
      return{
        user: {},
        user_access:[],
        serverId: '',
        age:[],
        sex:["男","女"],
        qualifications:["初中及以下","高中","大学及以上"],
        marriage:["单身","恋爱中","婚姻中","离异","分居","丧偶"],
      }
    },
    compiled(){
      for (var i = 1; i <= 100; i++) {
        this.age.push(i);
      }
    },
    created(){
    	$.ajax({
         url: global.domain +"/user/get_user_info",
         type:'post', 
         dataType: 'json',
         data:{
          token:global.token,
          u_id:this.$route.params.id,
         },
         success: function(data) {
           this.user=data.data
         }.bind(this),
         error: function(xhr, status, err) {
           console.err(err.toString())
         }.bind(this)
      });
       $.ajax({
          url: global.domain +'/access/get_user_access',
          type:'POST', 
          dataType: 'json',
          data:{
            user_id:this.$route.params.id,
            // user_id:1,
            page:1
          },
          success: data =>{ 
            this.user_access = data.data
          },
          error: err => console.log(err)
        });
    },
    ready(){
     
      
    },
    methods:{
      
    }
  }
</script>

<style scoped>
.top{
  overflow: hidden;
  height: 4.2rem;
  background-color: #ffffff;
  padding-right: 0.75rem;
}
.person-photo-pro{
  float: left;
  border-radius :3.2rem;
  height: 2.2rem;
  width: 2.2rem;
  background-color: #efefef;
  margin-top: 1.05rem;
  margin-left: 0.75rem;
}
.nik-body{
  float: left;
  height: 3.2rem;
  /*line-height: 3.2rem;*/
  /*margin-top:  1.05rem;*/
  margin-left: 0.75rem;
  width:69%;
}
.nikname{
  /*float: left;*/
  /*height: 0.7rem;*/
  margin-top: 1.5rem;
  font-size: 0.8rem;
  /*margin-left: 0.5rem;*/
}
.nikname-val{
  border:0;
  font-size: 0.85rem
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
  background: #fff
}
</style>