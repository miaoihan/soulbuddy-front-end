<template>
  <div>
  <nav-header title="新灵伙伴"></nav-header>
  	<func-nav :index.sync="index"></func-nav>
    <div style="margin-top: 0.5rem">
      <choice v-if="index==1" :swiper-list="swiperList" :index.sync="index"></choice>
      <question-list v-if="index==2" :data="queList" :is-best="true"></question-list>
      <div class="seemore" @click="seeMore('que')" v-if="index==2">
        查看更多问答
      </div>
      <div class="bom-div" v-if="index==2"></div>
      <reading v-if="index==3" :data="readList"></reading>
      <evaluation v-if="index==4" :data="evaList" style="margin-bottom: 80px"></evaluation>
    </div>
    <!-- <modal></modal> -->
  </div>
</template>

<script>
import NavHeader from 'components/funComp/NavHeader'
import FuncNav from 'components/areaComp/FuncNav.vue'
import QuestionList from 'components/areaComp/QuestionList.vue'
import Reading from 'pages/home/Reading.vue'
import Choice from 'pages/home/Choice.vue'
import Evaluation from 'pages/home/Evaluation.vue'
  export default{
    components: {
    	NavHeader,FuncNav,QuestionList,Reading,Choice,Evaluation,
     // Modal: require('components/funComp/Modal')
    },
    data(){
      return{
        // index: 1,
        swiperList: [],
        queList: [],
        readList: [],
        evaList: [],
        jsApiParams: {},
        que_page:1
      }
    },
    props: {
      index:{type:Number,default:1},
      bind: {
        type: Boolean, // String, Number, Boolean, Function, Object, Array
        default: true
      }
    },
    methods:{
      // 加载更多
      seeMore(type){
        console.log(type)
          $.post(global.domain +'/question/get_question_list',
            { token: global.token, page: ++this.que_page, }, v => 
            this.queList = this.queList.concat(v.data), 'json');
      },
      // 微信支付
      // onBridgeReady(){
      //  WeixinJSBridge.invoke(
      //      'getBrandWCPayRequest', {
      //          "appId": "wx2421b1c4370ec43b",     //公众号名称，由商户传入     
      //          "timeStamp":" 1395712654",         //时间戳，自1970年以来的秒数     
      //          "nonceStr" : "e61463f8efa94090b1f366cccfbbb444", //随机串     
      //          "package" : "prepay_id=u802345jgfjsdfgsdg888",     
      //          "signType" : "MD5",         //微信签名方式:     
      //          "paySign" : "70EA570631E4BB79628FBCA90534C63FF7FADD89" //微信签名 
      //      },
      //      function(res){     
      //          if(res.err_msg == "get_brand_wcpay_request：ok" ) {}     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
      //      }
      //  ); 
      // }
    },
    created(){
      // 获取轮播
      $.ajax({
          url: global.domain +'/article/get_top_article',
          type:'POST', 
          dataType: 'json',
          async:false,
          success: data => {
            let lunboArr = data.data
            for (var i = 0; i < lunboArr.length; i++) {
              this.swiperList.$set(i,{
                contitle:lunboArr[i].title,
                imgurl: lunboArr[i].img_file,
                href: '#!/article/' + lunboArr[i].art_id,
              });
            }
          },error: err => console.error(err.toString())
        });
    },
    ready(){
      this.bind = true
      // console.log(global.domain)
      // 问答列表
      $.ajax({
          url: global.domain +'/question/get_question_list',
          type:'POST', 
          dataType: 'json',
          data:{
            token: global.token
          },
          success: data => this.queList = data.data,
          error: err => console.error(err.toString())
        });

      // 阅读列表
      $.post(global.domain +'/article/get_article_list',
        { page: 1, },
        v => this.readList = v.data ,'json');
      
      // 测评列表
      $.ajax({
          url: global.domain +'/access/get_access_list',
          type:'POST', 
          dataType: 'json',
          data:{
            token: global.token
          },
          success: data => this.evaList = data.data,
          error: err => console.error(err.toString())
        });

      

    }
  }
</script>

<style lang="stylus">
// 主页公共样式
.pangbai{
  text-align:center;
  margin: 18px 0 15px 0
  color #999
  font-size: 14px
}

.heng{
  width:20px;
  display:inline-block;
  margin-bottom:4px 
  border-bottom:1px solid #b1b1b1;
}

.seemore{
  text-align:center;
  margin: 3px 10% 0;
  height: 30px;
  line-height: 32px;
  // background: #E3E3E3;
  border-radius: 15px;
  font-size: 13px;
  color: #999;
}

.label-box{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 20px 0 10px 0;
  background-color: #fff
}

.label-box span
  margin: 0 0 15px 15px;
  
a
  color #444
  width 100%
  
p
  line-height 1.30rem

//modal 暂时放到这里
.pay-modal
  position fixed
  top: 20%;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: 20% auto;
  text-align: center
  border-radius: 10px
  z-index: 1002;
  height 5rem
  width 50%
  background-color: #fff
  div
    height: 2.5rem
    line-height:2.5rem

.modal-bg
  position: fixed;  
  top: 0%;  
  left: 0%;  
  width: 100%;  
  height: 120%;  
  background-color: black;  
  z-index: 1001;  
  -moz-opacity: 0.5;  
  opacity:.50;  
  // filter: alpha(opacity=50);
    
.modal-item
  position: absolute;  
  top: 28%;  
  left: 10%;  
  width: 80%;  
  // height: 36%;  
  border-radius: 10px
  z-index: 1002;  
  overflow: auto;   
  .mod-content
    padding 0.75rem 1.20rem
    // height 72%
    .c-top
      margin 0 auto
      // text-align center
      width 1.5rem
    .c-middle
      margin-top: 0.4rem
      font-size: 13px
  .mod-button
    display flex
    align-items center
    
    // justify-content center
    height 2.5rem
    border-top 1px solid #e5e5e5
    .m-b-1
      flex 1
      text-align: center
    .m-b-2
      // flex 1
      height 50%
      border-left 1px solid #e5e5e5
    .m-b-3
      flex 1
      text-align: center

</style>
