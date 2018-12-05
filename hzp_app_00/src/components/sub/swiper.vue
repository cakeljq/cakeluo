
<template>
    <div class="app-subswipe">
        <mt-swipe  :auto="2000">
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.img_url" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        props:["list"]  //子主件接收父组件数据
    }
</script>
<style>
    /*图片轮播设置高度*/
  .app-homeContainer .mint-swipe{
    height:200px;
  }
  .app-homeContainer .mint-swipe img{
    width:100%;
  }
</style>