#1:进入cz库中
USE cz;
#2:创建
CREATE TABLE cz_index(
 id    INT PRIMARY KEY AUTO_INCREMENT, 
 title VARCHAR(128),
 ctime DATETIME,
 img_url VARCHAR(255),
 point INT
);
#now() 当前数据库时间 年月日时分秒
INSERT INTO cz_news VALUES(null,'护肤专区',now(),"http://127.0.0.1:3000/img/daohang1.png",0);
INSERT INTO cz_news VALUES(null,'化妆品专区',now(),"http://127.0.0.1:3000/img/daohang2.png",0);
INSERT INTO cz_news VALUES(null,'化妆品专区',now(),"http://127.0.0.1:3000/img/daohang3.png",0);
INSERT INTO cz_news VALUES(null,'化妆品专区',now(),"http://127.0.0.1:3000/img/daohang4.png",0);
INSERT INTO cz_news VALUES(null,'化妆品专区',now(),"http://127.0.0.1:3000/img/daohang5.png",0);
INSERT INTO cz_news VALUES(null,'化妆品专区',now(),"http://127.0.0.1:3000/img/daohang6.png",0);
INSERT INTO cz_news VALUES(null,'化妆品专区',now(),"http://127.0.0.1:3000/img/daohang7.png",0);
INSERT INTO cz_news VALUES(null,'化妆品专区',now(),"http://127.0.0.1:3000/img/daohang8.png",0);
INSERT INTO cz_news VALUES(null,'化妆品专区',now(),"http://127.0.0.1:3000/img/caizhuang1.jpg",0);
INSERT INTO cz_news VALUES(null,'化妆品专区',now(),"http://127.0.0.1:3000/img/caizhuang2.jpg",0);
INSERT INTO cz_news VALUES(null,'化妆品专区',now(),"http://127.0.0.1:3000/img/caizhuang3.jpg",0);
INSERT INTO cz_news VALUES(null,'化妆品专区',now(),"http://127.0.0.1:3000/img/caizhuang4.jpg",0);
INSERT INTO cz_news VALUES(null,'化妆品专区',now(),"http://127.0.0.1:3000/img/caizhuang5.jpg",0);
INSERT INTO cz_news VALUES(null,'化妆品专区',now(),"http://127.0.0.1:3000/img/caizhuang6.jpg",0);

/*商品列表*/
USE cz;
CREATE TABLE cz_price(
 id    INT PRIMARY KEY AUTO_INCREMENT, 
 title   VARCHAR(128),
 ctime   DATETIME,
 img_url VARCHAR(255),
 price   VARCHAR(128)
);
INSERT INTO cz_price VALUES(null,'【强烈推荐】怦然心动,水密码#8522号色口红',now(),"http://127.0.0.1:3000/img/remai1.jpg",188);
INSERT INTO cz_price VALUES(null,'氨基酸男士保湿洁面膏（水密码）',now(),"http://127.0.0.1:3000/img/remai2.jpg",198);
INSERT INTO cz_price VALUES(null,'【上新】水漾泉水润唇膏，明星系列',now(),"http://127.0.0.1:3000/img/remai3.jpg",180);
INSERT INTO cz_price VALUES(null,'【极力推荐】水润气垫BB',now(),"http://127.0.0.1:3000/img/remai4.jpg",200);
INSERT INTO cz_price VALUES(null,'【夏日必备】小冰瓶懒人防晒霜，30+',now(),"http://127.0.0.1:3000/img/remai5.jpg",220);
INSERT INTO cz_price VALUES(null,'【新品上市】水漾泉水喷雾(100ml)',now(),"http://127.0.0.1:3000/img/remai6.jpg",150);
INSERT INTO cz_price VALUES(null,'【新品上市】水光素颜霜50g',now(),"http://127.0.0.1:3000/img/remai7.jpg",190);
INSERT INTO cz_price VALUES(null,'妈咪嫩芽安抚面膜(三片装)，精华提取',now(),"http://127.0.0.1:3000/img/remai8.jpg",230);
INSERT INTO cz_price VALUES(null,'祛痘精华液30ml,修复痘肌，淡化痘印',now(),"http://127.0.0.1:3000/img/remai9.jpg",210);
INSERT INTO cz_price VALUES(null,'酰胺补水保湿面膜，不油腻，易吸收',now(),"http://127.0.0.1:3000/img/remai10.jpg",200);
INSERT INTO cz_price VALUES(null,'酰胺补水保湿乳',now(),"http://127.0.0.1:3000/img/remai11.jpg",108);
INSERT INTO cz_price VALUES(null,'【热卖】弹润精致修护鱼尾纹眼霜30ml',now(),"http://127.0.0.1:3000/img/remai12.jpg",100);
INSERT INTO cz_price VALUES(null,'补水保湿精华40ml',now(),"http://127.0.0.1:3000/img/remai13.jpg",145);
INSERT INTO cz_price VALUES(null,'补水保湿洁面乳100g',now(),"http://127.0.0.1:3000/img/remai14.jpg",160);
INSERT INTO cz_price VALUES(null,'玻尿酸补水保湿面膜',now(),"http://127.0.0.1:3000/img/remai15.jpg",155);
INSERT INTO cz_price VALUES(null,'【尊享套盒】水漾尊享套盒神经酰胺补水保湿',now()"http://127.0.0.1:3000/img/remai16.jpg",399);

/*用户密码*/
CREATE TABLE cz_users(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25),
  upwd  VARCHAR(32)
);
#通用加密算法md5
INSERT INTO cz_users VALUES(null,'dd',md5('123'));
INSERT INTO cz_users VALUES(null,'wh',md5('123'));
INSERT INTO cz_users VALUES(null,'lily',md5('123'));


/*轮播图*/
USE cz;
CREATE  TABLE  cx_img(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url  VARCHAR(255)
);
INSERT  INTO  cx_img  VALUES(NULL,"http://127.0.0.1:3000/hzp01.jpg");
INSERT  INTO  cx_img  VALUES(NULL,"http://127.0.0.1:3000/hzp02.jpg");
INSERT  INTO  cx_img  VALUES(NULL,"http://127.0.0.1:3000/hzp03.jpg");
INSERT  INTO  cx_img  VALUES(NULL,"http://127.0.0.1:3000/hzp04.jpg");

