<template>
    <div class="app-product">
        <div class="product-item" v-for="item in list" :key="item.id">
            <img  :src="item.img_url"  @click="getDetail(item.id)"/>
        <h3 class="title">{{item.title}}</h3>
            <div class="info">
                <p class="price">
                    <span class="now">{{item.now}}</span>
                    <span class="old">{{item.old}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余:{{item.q}}</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                list:[]
            }
        },
        created(){
            this.getImageList();
            },
        methods: {
            getImageList(){
                this.$http.get("http://127.0.0.1:3000/ruyelist").then(result=>{
                    this.list = result.body;
                })
            },
            getDetail(id){
                //参数商品的id
                console.log(id);
                this.$router.push("/home/productinfo/" + id);
            }
        }
    }
</script>

<style>
.app-product{
    display:flex;    /*最外层设置弹性布局 */
    flex-wrap:wrap;
    justify-content:space-between;   /*两端对齐 */
    padding:7px;
}
.app-product .product-item{
    width:49%;
    border:1px;
    box-shadow:0 0  8px #ccc;   /*阴影 */
    margin:4px 0;
    padding:2px;
    display:flex;
    flex-direction:column;

}
.app-product .product-item img{
    width:100%;
}
 /*修改价格的颜色 */
 .app-product .product-item .now{
     color:red;
     font-weight:bold;
     font-size:16px;
     margin-left:10px;
 }
 .app-product .product-item .old{
     font-size:12px;
     text-decoration:line-through;
     margin-left:10px;
 }
 .title{
     font-size:12px;
 }
</style>