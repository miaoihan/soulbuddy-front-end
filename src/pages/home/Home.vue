<template>
  <div>
  <nav-header title="新灵伙伴"></nav-header>
  	<func-nav :index.sync="index"></func-nav>
    <div style="margin-top: 0.5rem">
      <choice v-if="index==1" :swiper-list="swiperList" :index.sync="index"></choice>
      <question-list v-if="index==2" :data="queList" class="far-bom" :is-best="true"></question-list>
      <reading v-if="index==3" :data="readList"></reading>
      <evaluation v-if="index==4" :data="evaList" style="margin-bottom: 80px"></evaluation>
    </div>
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
    	NavHeader,FuncNav,QuestionList,Reading,Choice,Evaluation
    },
    data(){
      return{
        // index: 1,
        swiperList: [],
        queList: [],
        readList: [],
        evaList: [],
        jsApiParams: {},
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
          // cache: true,
          data:{
            page: 1,
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
  margin: 10px 10% 0;
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

</style>
