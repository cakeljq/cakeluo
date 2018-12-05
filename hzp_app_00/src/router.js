import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
//1:引入自定义组件 
import TestContainer from "./components/testContainer.vue";
import listContainer from "./components/listContainer.vue"
import homeContainer from "./components/tabbar/HomeContainer.vue"
import productlist from "./components/products/productList.vue"
import  productinfo  from  "./components/products/productInfo.vue"
import  water     from "./components/water/water.vue"
import  suntan  from  "./components/suntan/suntan.vue"
import  face   from   "./components/face/face.vue"
import  ruyan  from   "./components/ruyan/ruyan.vue"
import  mianmo   from  "./components/mianmo/mianmo.vue"
Vue.use(Router)
//2:配置访问自定义组件路径
//   {path访问路径 component  组件名称}
export default new Router({
  routes: [
    {path:"/home/mianmo",component:mianmo},
    {path:"/home/ruyan",component:ruyan},
    {path:"/home/face",component:face},
    {path:"/home/suntan",component:suntan},
    {path:"/home/water",component:water},
    {path:"/home/productinfo/:id",component:productinfo},
    {path:'/home/productlist',component: productlist},
    {path:'/',component:HelloContainer},
    {path:"/test",component:TestContainer},
    {path:"/list",component:listContainer},
    {path:"/home",component:homeContainer}
  ]
})


