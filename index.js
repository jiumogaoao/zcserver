//var server = require("./server");
//var router = require("./router");
//server.start(router.route);

var app = require('./server')
  , router = require('./router')
   , url = require("url")
   , query = require("querystring")
   , server = {
   	deal : require('./deal'),
      admin : require('./admin'),
      announcement : require('./announcement'),
      client : require('./client'),
      company : require('./company'),
      product : require('./product'),
      promotion : require('./promotion'),
      recruit : require('./recruit'),
      redPacket : require('./redPacket')
   }

   var dbURL="mongodb://localhost/talk"
   global.db = require("mongoose").connect(dbURL);
   global.data_mg = {}
      data_mg.admin = require('./data/models/admin');//管理员表
      data_mg.announcement = require('./data/models/announcement');//公告表
      data_mg.client = require('./data/models/client');//客户表
      data_mg.client_password = require('./data/models/client_password');//密码表
      data_mg.client_product = require('./data/models/client_product');//购买表
      data_mg.client_redPacket = require('./data/models/client_redPacket');//客户红包表
      data_mg.company = require('./data/models/company');//企业表
      data_mg.page_promoGroup = require('./data/models/page_promoGroup');//页面宣传组表
      data_mg.product = require('./data/models/product');//商品表
      data_mg.promoGroup_promotion = require('./data/models/promoGroup_promotion');//宣传组对宣传表
      data_mg.promotion = require('./data/models/promotion');//宣传表
      data_mg.recruit = require('./data/models/recruit');//招聘表
      data_mg.redPacket = require('./data/models/redPacket');//红包表
      data_mg.updateTime = require('./data/models/updateTime');//更新表
      data_mg.deal = require('./data/models/deal');//交易表
      data_mg.bind = require('./data/models/bind');//交易表
     /* var newMember = new data_mg.member({
         id:"001",
         userName:"001",
         nickName:"001",
         image:"http://",
         place:"001"
      });

      newMember.save(function(err){
         if(err){console.log(err)}else{
            data_mg.member.find({},function(err,data){
               console.log(data)
               data_mg.member.update({},{$set:{"userName":"003"}},{},function(err,data){
                     console.log(data);
                     data_mg.member.find({},function(err,data){
               console.log(data)
               data_mg.member.remove({},function(err,data){
                                 console.log(data)
                              })
            })
                     
               })
               
            })
         */

 	 var io = require('socket.io').listen(app.target)
app.target.listen(8888);
 
 io.sockets.on('connection', function (socket) {
 	console.log("连上了");
   socket.emit('connected', { hello: 'world' });
   socket.on('server',function(data){
   		if(data&&data.model&&data.action&&server[data.model]&&server[data.model][data.action]){
   			server[data.model][data.action](socket,data);
   		}
   	});


 });