<template>
   <div  class="app-homeContainer">
      <!--顶部导航条 1：-->
      <mt-header fixed title="化妆品商城"></mt-header>
      <!--轮播图    2：-->
      <mt-swipe  :auto="2000">
        <mt-swipe-item v-for="item in list" :key="item.id">
           <img :src="item.img_url" />
        </mt-swipe-item>
      </mt-swipe>
      <!--六宫格-->
      <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/daohang1.png"/>
		                    <div class="mui-media-body">彩妆</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/daohang2.png"/>
		                    <div class="mui-media-body">补水</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/daohang3.png"/>
		                    <div class="mui-media-body">防晒</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/daohang4.png"/>
		                    <div class="mui-media-body">洁面</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/daohang5.png"/>
		                    <div class="mui-media-body">乳液</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/daohang6.png"/>
		                    <div class="mui-media-body">面膜</div></a></li>
      
		  </ul> 
        
   </div>
</template>
<script>
  export default {
    data(){
      return {list:[]}  //创建data属性保存数据
    },
    methods:{    
      getImage(){
        //发送ajax请求并且获取图片列表并且显示
        var url = "http://127.0.0.1:3000/imagelist";
        this.$http.get(url).then(result=>{
          //获取返回数据，保存 list属性中
          this.list = result.body;
        })
      }
    },
    created(){
      this.getImage();
    }
  }
</script>
<style>
  /*自定义组件的样式*/
  .app-homeContainer header.mint-header{
    /*background-color:yellow;*/
    /*color:red;*/
  }
  /*图片轮播设置高度*/
  .app-homeContainer .mint-swipe{
    height:200px;
  }
  .app-homeContainer .mint-swipe img{
    width:100%;
  }
  /*调整六宫格 */
  .app-homeContainer .mui-grid-view.mui-grid-9{
    background:#fff;
    border:0;
  }
  .app-homeContainer .mui-grid-view.mui-grid-9 img{
    width:60px;
    height:50px;
  }
  .app-homeContainer.mui-table-view.mui-grid-view.mui-table-view-cell.mui-media-body{
    font-size:13px;
  }

</style>