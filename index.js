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

   var dbURL="mongodb://127.0.0.1:27017/talk"
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
      data_mg.bind = require('./data/models/bind');//绑定表
	  data_mg.bindCode = require('./data/models/bindCode');//验证码表
	var showDB=function(){
		
		data_mg.client.find({},function(err,data){console.log("client")
			console.log(data)
			})
		
		data_mg.admin.find({},function(err,data){console.log("admin")
			console.log(data)
			})
		
		data_mg.promotion.find({},function(err,data){console.log("promotion")
			console.log(data)
			})
		
		data_mg.updateTime.find({},function(err,data){console.log("updateTime")
			console.log(data)
			})
		
		data_mg.client_password.find({},function(err,data){
		  console.log("password")
		  console.log(data)
		  })
		}
	var initDB=function(){
		var totalCount=0;
		function totalCheck(){
			totalCount++;
			if(totalCount==24){
				showDB();
				}
			}
		var addAdmin=new data_mg.client({"id":"001","userName":"admin","type":2})
		addAdmin.save(function(){
			console.log("Admin init");
			totalCheck();
			});
		var keyAdmin=new data_mg.client_password({"parentKey":"001","childKey":"123456"})
		keyAdmin.save(function(){
			console.log("key init");
			totalCheck();
			});
		var indexpromo1=new data_mg.promotion({"id":"001","name":"广告位一","image":[""],"dsc":"","job":"",group:"index"})
		indexpromo1.save(function(){
			console.log("indexpromo1 init");
			totalCheck();
			});
		var indexpromo2=new data_mg.promotion({"id":"002","name":"广告位二","image":[""],"dsc":"","job":"",group:"index"})
		indexpromo2.save(function(){
			console.log("indexpromo2 init");
			totalCheck();
			});
		var indexpromo3=new data_mg.promotion({"id":"003","name":"广告位三","image":[""],"dsc":"","job":"",group:"index"})
		indexpromo3.save(function(){
			console.log("indexpromo3 init");
			totalCheck();
			});
		var indexpromo4=new data_mg.promotion({"id":"004","name":"饼状图","image":[""],"dsc":"","job":"",group:"index",data:[
										{"name":"19岁以下","value":1},
										{"name":"20-29岁以下","value":25},
										{"name":"30-39岁以下","value":62},
										{"name":"40-49岁以下","value":7},
										{"name":"50岁以上","value":4},
										]})
		indexpromo4.save(function(){
			console.log("indexpromo4 init");
			totalCheck();
			});
		var indexpromo5=new data_mg.promotion({"id":"005","name":"雷达图","image":[""],"dsc":"","job":"",group:"index",data:[
										{"name":"北京","value":32.26},
										{"name":"上海","value":28.93},
										{"name":"广州","value":21.65},
										{"name":"杭州","value":9.21},
										{"name":"南京","value":8.26},
										{"name":"深圳","value":5.43},
										{"name":"东三省","value":5.27},
										{"name":"成都","value":5.21},
										{"name":"厦门","value":2.87},
										{"name":"乌鲁木齐","value":0.16},
									]})
		indexpromo5.save(function(){
			console.log("indexpromo5 init");
			totalCheck();
			});
		var indexpromo6=new data_mg.promotion({"id":"006","name":"柱状图","image":[""],"dsc":"","job":"",group:"index",data:[
										{"name":"一个月","value":10},
										{"name":"三个月","value":20},
										{"name":"六个月","value":30},
										{"name":"九个月","value":40},
									]})
		indexpromo6.save(function(){
			console.log("indexpromo6 init");
			totalCheck();
			});
		var indexpromo7=new data_mg.promotion({"id":"007","name":"众筹步聚","image":[],"dsc":"","job":"",group:"procedure"})
		indexpromo7.save(function(){
			console.log("indexpromo7 init");
			totalCheck();
			});
		var indexpromo8=new data_mg.promotion({id:"008",
					name:"常见问题",
					dsc:"不说",
					data:[],group:"FAQS"})
		indexpromo8.save(function(){
			console.log("indexpromo8 init");
			totalCheck();
			});
		var indexpromo9=new data_mg.promotion({id:"009",
					name:"创始团队",
					dsc:"不说",
					data:[],
					group:"team"
					})
		indexpromo9.save(function(){
			console.log("indexpromo9 init");
			totalCheck();
			});
		var indexpromo10=new data_mg.promotion({id:"010",
					name:"风险控制小组",
					dsc:"不说",
					data:[],group:"team"
					})
		indexpromo10.save(function(){
			console.log("indexpromo10 init");
			totalCheck();
			});
		var indexpromo11=new data_mg.promotion({id:"011",
					name:"底部专栏",
					dsc:"不说",
					data:[],group:"team"
					})
		indexpromo11.save(function(){
			console.log("indexpromo11 init");
			totalCheck();
			});
		var indexpromo12=new data_mg.promotion({"id":"012","name":"经营理念","image":[""],"dsc":"","job":"",group:"idea",data:[]
						   })
		indexpromo12.save(function(){
			console.log("indexpromo12 init");
			totalCheck();
			});
		var adminUP=new data_mg.updateTime({"parentKey":"admin","childKey":"0"})
	    adminUP.save(
		function(){
			console.log("adminTime init");
			totalCheck();
			}
		);
	var announcementUP=new data_mg.updateTime({"parentKey":"announcement","childKey":"0"})
	    announcementUP.save(function(){
			console.log("announcementTime init");
			totalCheck();
			});
	var clientUP=new data_mg.updateTime({"parentKey":"client","childKey":"0"})
	    clientUP.save(function(){
			console.log("clientTime init");
			totalCheck();
			});
	var companyUP=new data_mg.updateTime({"parentKey":"company","childKey":"0"})
	    companyUP.save(function(){
			console.log("companyTime init");
			totalCheck();
			});
	var productUP=new data_mg.updateTime({"parentKey":"product","childKey":"0"})
	    productUP.save(function(){
			console.log("productTime init");
			totalCheck();
			});
	var promotionUP=new data_mg.updateTime({"parentKey":"promotion","childKey":new Date().getTime()})
	    promotionUP.save(function(){
			console.log("promotionTime init");
			totalCheck();
			});
	var recruitUP=new data_mg.updateTime({"parentKey":"recruit","childKey":"0"})
	    recruitUP.save(function(){
			console.log("recruitTime init");
			totalCheck();
			});
	var redPacketUP=new data_mg.updateTime({"parentKey":"redPacket","childKey":"0"})
	    redPacketUP.save(function(){
			console.log("redPacketTime init");
			totalCheck();
			});
	var dealUP=new data_mg.updateTime({"parentKey":"deal","childKey":"0"})
	    dealUP.save(function(){
			console.log("dealTime init");
			totalCheck();
			});
	var bindUP=new data_mg.updateTime({"parentKey":"bind","childKey":"0"})
	    bindUP.save(function(){
			console.log("bindTime init");
			totalCheck();
			});
		}
	var emptyDB=function(){
		var totalCount=0;
		function totalCheck(){
			totalCount++;
			if(totalCount==16){
				initDB();
				}
			}
		data_mg.admin.remove({},function(){
			console.log("admin empty");
			totalCheck();
			});
	data_mg.announcement.remove({},function(){
			console.log("announcement empty");
			totalCheck();
			});
	data_mg.client.remove({},function(){
			console.log("client empty");
			totalCheck();
			});
	data_mg.client_password.remove({},function(){
			console.log("client_password empty");
			totalCheck();
			});
	data_mg.client_product.remove({},function(){
			console.log("client_product empty");
			totalCheck();
			});
	data_mg.client_redPacket.remove({},function(){
			console.log("client_redPacket empty");
			totalCheck();
			});
	data_mg.company.remove({},function(){
			console.log("company empty");
			totalCheck();
			});
	data_mg.page_promoGroup.remove({},function(){
			console.log("page_promoGroup empty");
			totalCheck();
			});
	data_mg.product.remove({},function(){
			console.log("product empty");
			totalCheck();
			});
	data_mg.promoGroup_promotion.remove({},function(){
			console.log("promoGroup_promotion empty");
			totalCheck();
			});
	data_mg.promotion.remove({},function(){
			console.log("promotion empty");
			totalCheck();
			});
	data_mg.recruit.remove({},function(){
			console.log("recruit empty");
			totalCheck();
			});
	data_mg.redPacket.remove({},function(){
			console.log("redPacket empty");
			totalCheck();
			});
	data_mg.updateTime.remove({},function(){
			console.log("updateTime empty");
			totalCheck();
			});
	data_mg.deal.remove({},function(){
			console.log("deal empty");
			totalCheck();
			});
	data_mg.bind.remove({},function(){
			console.log("bind empty");
			totalCheck();
			});
		}
	emptyDB();	 
	//showDB();


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