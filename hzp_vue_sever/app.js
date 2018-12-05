//加载模块
const express = require("express");
const pool = require("./pool");
//创建express对象
var  app = express();
//服务器node.js  允许跨域访问配置项
//2.1引入跨越模块
const  cors = require("cors");
//2.1配置允许哪个程序跨域访问 脚手架 
app.use(cors({
    orgin:[
        "http://127.0.0.1:3001","http://localhost:3001"
    ],
    credentials:true
}))
//指定静态目录
app.use(express.static(__dirname+ "/public"));
//绑定监听端口
app.listen(3000);
//功能一:轮播图
app.get("/imagelist",(req,res)=>{
    var obj = [
   {id:1,img_url:"http://127.0.0.1:3000/img/hzp01.jpg"},
   {id:2,img_url:"http://127.0.0.1:3000/img/hzp02.jpg"},
   {id:3,img_url:"http://127.0.0.1:3000/img/hzp03.jpg"},
   {id:4,img_url:"http://127.0.0.1:3000/img/hzp04.jpg"},
  ];
    res.send(obj)
  });
//功能二:返回商品详细信息
app.get("/goodsinfo",(req,res)=>{
    var id = req.query.id;
    var obj=[
        {id:1,title:"华为2000",now:9999,old:8888,pid:"9527"},
        {id:2,title:"华为2000",now:9999,old:8888,pid:"12121"},
        {id:3,title:"华为2000",now:9999,old:8888,pid:"1546"},
        {id:4,title:"华为2000",now:9999,old:8888,pid:"6666"},
];
    res.send(obj);
})

/*洁面 */
app.get("/jmlist",(req,res)=>{
    var id = req.query.id;
    var obj = [
        {id:1,title:"氨基酸男士保湿洁面膏（水密码）",now:"88",old:"99",q:1},
        {id:2,title:"悦诗风吟Innisfree绿茶精萃保湿洁面乳 150ml 泡沫细腻",now:"55",old:"54",q:2},
        {id:3,title:"【镇店之宝】丝塔芙洁面乳237ml 保湿洗面奶",now:"68",old:"98",q:3},
        {id:4,title:"【镇店之宝】丝塔芙洁面乳300ml 保湿洗面奶",now:"78",old:"88",q:4},
        {id:5,title:"高效玻尿酸B5深层清洁保湿补水洗面奶洁面180ml/支",now:"80",old:"95",q:5},
        {id:6,title:"【深度清洁 水润保湿】Whoo 后 拱辰享泡沫洁面膏 温和洁面洗面奶 深度清洁 水润保湿 180ml",now:"125",old:"118",q:6},
        {id:7,title:"【越洗越白的牛奶泡泡浴】HOLA赫拉雪肤焕白洁面慕斯150ml 美白淡斑 温和清洁",now:"79",old:"199",q:7},
        {id:8,title:"【玫瑰“真花瓣”】AFU阿芙玫瑰花瓣温和净透洁面晶115g  温和清洁洗面奶",now:"99",old:"148",q:8},
        {id:9,title:"欧莱雅科研致透三重源净洁面乳 125ml  温和清洁 保湿洗面奶",now:"94",old:"115",q:9},
        {id:10,title:"【油痘肌洁面**】La Roche-Posay理肤泉清痘净肤舒缓洁面啫喱200ml 控油清痘洗面奶护肤品啫喱",now:"169",old:"185",q:10},
    ];
    res.send(obj);
})

/*面膜 */
app.get("/mianmolist",(req,res)=>{
    var obj =[
        {id:1,title:"MEDIHEAL 美迪惠尔 胶原蛋白面膜24ml*10片/盒",now:"72",old:"188",q:1},
        {id:2,title:"【三部呵护 海洋能量】JM solution 海洋珍珠三部曲面膜 (精华液1.5ml+面膜27ml+眼霜1.5ml)*10片/盒",now:"75",old:"118",q:2},
        {id:3,title:"SNP 黄金胶原蛋白亮肤祛黄补水精华 面膜 25ml*10片/盒",now:"89",old:"125",q:3},
        {id:4,title:"奥洛菲OLEVA【人气爆款面膜套装】 水动力32片面膜组 补水 保湿 锁水 25ml*10片/盒",now:"48",old:"442",q:4},
        {id:5,title:"BBLAB 复活草清爽水润修护面膜175g  补水面膜",now:"209",old:"459",q:5},
        {id:6,title:"膜法世家水光黑面膜贴尊享礼盒40片  补水面膜",now:"99",old:"396",q:6},
        {id:7,title:"春雨玫瑰金补水面膜 25ml*10片/盒 保湿补水",now:"95",old:"226",q:7},
        {id:8,title:"【润彻肌底 焕现水光】JAYJUN 捷俊 水光面膜三部曲10片装 补水保湿",now:"105",old:"195",q:8},
        {id:9,title:"美即补水亮采混合系列黑白膜套装（60片）海藻面膜  清洁面膜  补水  去黄",now:"149",old:"850",q:9},
        {id:10,title:"【30片装，深补水，长锁水】番茄派TOMATO PAI 玻尿酸补水面膜套装30片装 补水保湿",now:"69",old:"384",q:10},
    ];
    res.send(obj);
})

/*乳液 */
app.get("/ruyanlist",(req,res)=>{
    var obj =[
        {id:1,title:"Guerisson 9complex 格丽松 爽肤乳 乳液 130ml 营养保湿",now:"79",old:"122",q:1},
        {id:2,title:"【保湿断货王】丝塔芙倍润保湿乳118ml 温和保湿乳",now:"56",old:"78",q:2},
        {id:3,title:"【天才黄油】倩碧卓越润肤乳125ml",now:"115",old:"300",q:3},
        {id:4,title:"JAYJUN 捷俊 密集焕亮精华乳液130ml 补水保湿提亮",now:"139",old:"218",q:4},
        {id:5,title:"玉兰油OLAY 滋润露75ml 滋润亮肤 保湿乳液",now:"38",old:"45",q:5},
        {id:6,title:"【皮肤水库超倍润】薇诺娜极润保湿乳液50g补水保湿",now:"119",old:"218",q:6},
        {id:7,title:"【给肌肤喝饱牛奶营养乳】HOLA赫拉雪肤焕白亲肌乳85ml 美白淡斑保湿",now:"89",old:"119",q:7},
        {id:8,title:"SKINFOOD 思亲肤 莴苣黄瓜沁颜乳液 140ml 保湿补水 淡化细纹",now:"85",old:"110",q:8},
        {id:9,title:"Lara style茶树清爽控油润肤乳150ml 水润滋养",now:"25",old:"60",q:9},
        {id:10,title:"欧珀莱 AUPRES 时光锁紧致塑颜系列柔肤乳 滋润型 130ml 乳液 提拉紧致",now:"180",old:"239",q:10},
    ];
    res.send(obj);
})
/*防嗮 */
app.get("/caizlist",(req,res)=>{
    var obj =[
        {id:1,title:"安热沙ANESSA水能户外防晒乳60ml",now:"208",old:"298",q:1},
        {id:2,title:"Naris up 娜丽丝 保湿芳香隔离霜隔离防晒妆前乳防晒霜90g SPF50",now:"77",old:"299",q:2},
        {id:3,title:"【江疏影同款】确美同 Coppertone 水宝宝纯净防晒乳SPF50 237ml 温和防晒",now:"99",old:"278",q:3},
        {id:4,title:"biore 碧柔清爽防晒乳 SPF50+PA++++30ml 水感防晒",now:"69",old:"89",q:4},
        {id:5,title:"【雪纺防晒衣 清爽水润】曼秀雷敦Mentholatum 新碧水薄清爽防晒露SPF30PA+++ 80g 四季保湿防晒 防紫外线（新老包装随机发货）",now:"45",old:"70",q:5},
        {id:6,title:"【娜扎同款 平价防晒】RE:CIPE 水晶防晒喷雾双支装150ml*2 防晒隔离SPF50+ PA+++",now:"99",old:"598",q:6},
        {id:7,title:"【不怕晒的太阳蛋】韩后 轻盈优护防晒乳SPF30PA+++81g 小金蛋 防水防汗 面部隔离 防晒霜",now:"69",old:"199",q:7},
        {id:8,title:"ISDIN 怡思丁 多维光护沁融水感防晒液 SPF50+ 30ml 防晒",now:"99",old:"199",q:8},
        {id:9,title:"姬芮Za 新焕真皙美白防水防晒乳50ml 防晒 防晒隔离",now:"108",old:"118",q:9},
        {id:10,title:"【梵高限量合作版】AFU阿芙多效清爽保湿高倍防晒乳SPF50+ PA+++ 梵高限量定制版 高效防晒霜",now:"99",old:"188",q:10},
    ];
    res.send(obj);
})

/* 补水*/
app.get("/caizlist",(req,res)=>{
    var obj =[
        {id:1,title:"Avene 雅漾舒护活泉水300ml 大喷 补水舒缓",now:"89"old:"189",q:1},
        {id:2,title:"美国EltaMD氨基酸泡沫洁面乳 207ml",now:"145",old:"249",q:2},
        {id:3,title:"御泥坊 法国孚日山活泉澎湃水能润肤水 150ml",now:"79",old:"129",q:3},
        {id:4,title:"欧珀莱 AUPRES 均衡保湿系列柔润水 滋润型 150mL 爽肤水 补水保湿",now:"80",old:"100",q:4},
        {id:5,title:"欧莱雅复颜清乳柔肤水130ml 补水护肤 爽肤水",now:"150",old:"195",q:5},
        {id:6,title:"【清莹补水 柔嫩肌肤】碧欧泉活泉新润漾柔肤水200ml  活肤滋润  爽肤水",now:"152",old:"195",q:6},
        {id:7,title:"花印  薏苡仁化妆水爽肤水柔肤水500ml 巨补水保湿大容量",now:"119",old:"149",q:7},
        {id:8,title:"SKINFOOD思亲肤 黑石榴莹润化妆水 180ml 爽肤水 补水保湿 水油平衡 淡化细纹",now:"158",old:"200",q:8},
        {id:9,title:"悦诗风吟Innisfree新绿茶精萃保湿平衡柔肤水 200ml",now:"115",old:"一口价",q:9},
        {id:10,title:"【便价水磨精华水】一叶子覆盆子紧致细腻柔肤水120ml",now:"85",old:"195",q:10},
    ];
    res.send(obj);
})

/* */
app.get("/caizlist",(req,res)=>{
    var obj =[
        {id:1,title:"Avene 雅漾舒护活泉水300ml 大喷 补水舒缓",now:"89"old:"189",q:1},
        {id:2,title:"美国EltaMD氨基酸泡沫洁面乳 207ml",now:"145",old:"249",q:2},
        {id:3,title:"御泥坊 法国孚日山活泉澎湃水能润肤水 150ml",now:"79",old:"129",q:3},
        {id:4,title:"欧珀莱 AUPRES 均衡保湿系列柔润水 滋润型 150mL 爽肤水 补水保湿",now:"80",old:"100",q:4},
        {id:5,title:"欧莱雅复颜清乳柔肤水130ml 补水护肤 爽肤水",now:"150",old:"195",q:5},
        {id:6,title:"【清莹补水 柔嫩肌肤】碧欧泉活泉新润漾柔肤水200ml  活肤滋润  爽肤水",now:"152",old:"195",q:6},
        {id:7,title:"花印  薏苡仁化妆水爽肤水柔肤水500ml 巨补水保湿大容量",now:"119",old:"149",q:7},
        {id:8,title:"SKINFOOD思亲肤 黑石榴莹润化妆水 180ml 爽肤水 补水保湿 水油平衡 淡化细纹",now:"158",old:"200",q:8},
        {id:9,title:"悦诗风吟Innisfree新绿茶精萃保湿平衡柔肤水 200ml",now:"115",old:"一口价",q:9},
        {id:10,title:"【便价水磨精华水】一叶子覆盆子紧致细腻柔肤水120ml",now:"85",old:"195",q:10},
    ];
    res.send(obj);
})