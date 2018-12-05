<template>
  <div class="app-goodinfo">
   <!--1.商品的轮播区域-->
    <div class="mui-content">
			<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swiper-box :list="imglist"></swiper-box>
					</div>
				</div>
			</div>
    </div>
   <!--2.商品购买区域-->
    <div class="mui-card">
      <div class="mui-card-header">{{info.title}}</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p class="price">
              市场价:<del>￥{{info.old}}</del>
              销售价:<span class="now">￥{{info.now}}</span>
            </p>
            <p>
              <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
                <button class="mui-btn mui-btn-numbox-minus" type="button" @click="goodSub">-</button>
                <input id="test" class="mui-input-numbox" type="number" value="1" v-model="val" />
                <button class="mui-btn mui-btn-numbox-plus" type="button" @click="goodAdd">+</button>
				      </div>
            </p>
            <p>
              <mt-button type="primary" size="small">立即购买</mt-button>
              <mt-button type="danger" size="small" @click="addCartTo()">加入购物车</mt-button>
            </p>
          </div>
        </div>
      <div class="mui-card-footer">页脚</div>
    </div>
   <!--3.商品的参数区域-->
    <div class="mui-card">
      <div class="mui-card-header"></div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:{{info.pid}}</p>
          <p>商品颜色:山里红</p>
          <p>商品运免:0</p>
        </div>
      </div>
      <div class="mui-card-footer">页脚</div>
    </div>
  </div>
</template>
<script>
    import swiper  from "../sub/swiper.vue";
    import {Toast}  from  "mint-ui";
    //引入  mui库
    //import mui  from "../../lib/mui/js/mui.js";
  export default {
    data(){
      return{
        imglist:[],
        val:1,
        info:{}
      }
    },
    methods:{
      addCartTo(){
        //console.log("提交");
        //1.将商品编号和数量保存至服务器
        //1.1获取商品编号
        var  id = this.$route.params.id;
         //1.2获取商品数量
        var count = this.val;
        //1.3发送请求
        this.$http.get("addCart?pid="+id+"&count="+count).then(result=>{
            if(result.body.code == 1){
              //1.4修改新购物车中商品数量
              this.$store.commit("increment",count);
              Toast(result.body.msg);
            }else{
              Toast(result.body.msg);
            }
        });
        
      },
      getGoodInfo(){
        //商品列表将商品器id传递商品详情
        var id = this.$route.params.id;
          this.$http.get("http://127.0.0.1:3000/goodsinfo?id="+id).then(result=>{
            this.info = result.body;
            console.log(this.info);
          })
        },
      goodAdd(){
        if(this.val<=998){
        this.val++;
        }
      },
      goodSub(){
        if(this.val>1){
        this.val--;
        }
      },
      getImageList(){
        this.$http.get("http://127.0.0.1:3000/imagelist").then(result=>{
          this.imglist = result.body;
        })
      }
    },
    created() {
			this.getImageList();
			this.getGoodInfo();
      //console.log(this.$route.params.id);
    },
		components:{
			"swiper-box":swiper
		}
  }
</script>
<style>
</style>