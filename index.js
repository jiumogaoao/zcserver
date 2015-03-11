//var server = require("./server");
//var router = require("./router");
//server.start(router.route);

var app = require('./server')
  , router = require('./router')
   , url = require("url")
   , query = require("querystring")
   , server = {
   	account : require('./account'),
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
   global.db = require("mongoose").connect(dbURL)
   global.data_mg = {}
      data_mg.member = require('./data/models/member');//人表
      data_mg.group = require('./data/models/group');//圈子表
      data_mg.album = require('./data/models/album');//相册表
      data_mg.friend = require('./data/models/friend');//朋友表
      data_mg.photo = require('./data/models/photo');//相片表
      data_mg.message = require('./data/models/message');//消息表
      data_mg.a_p = require('./data/models/a_p');//相册相片表
      data_mg.g_m = require('./data/models/g_m');//圈子成员表
      data_mg.password = require('./data/models/password');//密码表
      data_mg.updateTime = require('./data/models/updateTime');//更新表
      var newMember = new data_mg.member({
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
         }
      });

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