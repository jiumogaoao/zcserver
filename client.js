var http = require('http');  
var qs = require('querystring');  

var crypto = require('crypto');
var userName = 'dwfc'
var password = '123123'
var md5 = crypto.createHash('md5');
md5.update(password);
var d = md5.digest('hex');
var md6=crypto.createHash('md5');
md6.update(userName+d);
var b = md6.digest('hex');
var options = {  
    hostname: 'www.jc-chn.cn',   
    path: '/smsSend.do',  
    method: 'POST',  
    headers: {  
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'  
    }  
}; 
/**********************************************************************/
var nodemailer = require("nodemailer");
// 开启一个 SMTP 连接池
var smtpTransport = nodemailer.createTransport("SMTP",{
  host: "smtp.qq.com", // 主机
  secureConnection: true, // 使用 SSL
  port: 465, // SMTP 端口
  auth: {
    user: "394127821@qq.com", // 账号
    pass: "jiumogaoao86," // 密码
  }
});

/************************************************************************/


function checkUser(socket,data,fn){
	console.log("client/checkUser");
	console.log(data.data);
	//data.data="name";
	var result={code:0};
	var returnFn=function(){
		if(socket){
	 	socket.emit("client_checkUser",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}
		}
	data_mg.client.find({userName:data.data},function(err,doc){
		if(err){
			result.code=0;
			returnFn();
			}else{
				if(doc&&doc.length){
			result.code=0
			}else{
				result.code=1
				}
			returnFn();
				}
		
		})
		
};

function checkPhone(socket,data,fn){
	console.log("client/checkPhone");
	console.log(data.data)
	var result={code:0};
	var returnFn=function(){
		if(socket){
	 	socket.emit("client_checkPhone",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}
		}
	data_mg.client.find({phone:data.data},function(err,doc){
		if(err){
			result.code=0;
			returnFn();
			}else{
				if(doc&&doc.length){
			result.code=0
			}else{
				result.code=1
				}
				returnFn();
				}
		
		
		})
		
};

function checkEmail(socket,data,fn){
	console.log("client/checkEmail");
	console.log(data.data)
	var result={code:0};
	var returnFn=function(){
		if(socket){
	 	socket.emit("client_checkEmail",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}
		}
	data_mg.client.find({phone:data.data},function(err,doc){
		if(err){
			console.log(err);
			returnFn();
			}else{
				if(doc&&doc.length){
			result.code=0
			}else{
				result.code=1
				}
				returnFn();
				}
		
			
		})
};

function login(socket,data,fn){
	console.log("client/login");
	//data.data = {"userName":"aa",/*登录名/手机/邮箱*/
	//			"passWord":"djisk"}/*密码*/
	if(typeof(data.data)=="string"){
		data.data=JSON.parse(data.data)
		}
	console.log(data.data)
	var result={
					code:0,
					data:{}
					};
					
	var returnFunction=function(){
		if(socket){
	 	socket.emit("client_login",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}
		}				
	//returnFunction();
	//return;				
	data_mg.client.$where('this.userName == "'+data.data.userName+'" || this.email == "'+data.data.userName+'" || this.phone == "'+data.data.userName+'"').exec(function(err,doc){
		console.log(err)
		console.log(doc)
		if(doc&&doc.length){
			data_mg.client_password.findOne({"parentKey":doc[0].id,"childKey":data.data.passWord},function(err,docA){
				console.log(err)
				console.log(docA)
				if(docA){
					result.code=1;
					result.data=doc;
					}else{
						result.code=0;
						}
				returnFunction();
				})
			}else{result.code=0;
			returnFunction();
			}
		})
		
};

function register(socket,data,fn){
	console.log("client/register");
	if(typeof(data.data)=="string"){
		data.data=JSON.parse(data.data)
		}
	
	//data.data={
	//	"id":uuid(),/*id*/
	//	"type":1,/*类型,1普通用户2管理用户*/
	//	"userName":"用户名",/*用户名*/
	//	"image":"http://",/*头像*/
	//	"place":"地址",/*地址*/
	//	"phone":"18239208903",/*手机*/
	//	"email":"fhdj@email.com",/*邮箱*/
	//	"name":"真实名",/*真实姓名*/
	//	"contacts":"联系人",/*联系人*/
	//	"contactsPhone":"2738948393",/*联系人电话*/
	//	"record":"本科",/*学历*/
	//	"university":"华农",/*毕业院校*/
	//	"job":"这个职位",/*职位*/
	//	"company":"公司",/*公司*/
	//	"password":"123456"/*密码*/
	//}
	var result={code:0};
	var returnFn=function(){
		if(socket){
	 	socket.emit("client_register",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}	
		}
	var newClient=new data_mg.client(data.data)
	newClient.save(function(err,Clientsc){
		console.log(Clientsc)
		if(err){
			result.code=0;
			returnFn();
			}else{
				var newPassword=new data_mg.client_password({
					"parentKey":data.data.id,
					"childKey":data.data.password,
					})
				newPassword.save(function(errA,Passsc){
					console.log(Passsc)
					if(errA){
						result.code=0
						returnFn();
						}else{
							data_mg.updateTime.update({"parentKey":"client"},{$set:{"childKey":new Date().getTime()}},{},function(errB){
								if(errB){
									result.code=0;
									returnFn();
								}else{
									var bindData=new data_mg.bind({"id":data.data.id,"phone":true,"email":false})
									bindData.save(function(errC){
										if(errC){
											console.log(errC);
											result.code=0
											}else{
												result.code=1;
												}
												returnFn();
										})
									
								}
								
							})
							}
						
					})
				}
			
		})
	
};

function resetKey(socket,data,fn){
	console.log("client/resetKey");
	data.data={
				id:"2333r3",/*用户id*/
				oldKey:"1231231",/*旧密码*/
				newKey:"532424"/*新密码*/
				}
	var result={code:1};
	data_mg.client.update({"parentKey":data.data.id,"childKey":data.data.oldKey},{$set:{"childKey":data.data.newKey}},{},function(err){
		if(err){
			result.code=0
			}else{
				result.code=1
				}
			if(socket){
	 	socket.emit("client_resetKey",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}
		})
		
};

function get(socket,data,fn){
	console.log("client/get");
	//data.data = 10086/*不用传*/
	console.log(data.data)
	var result={
		code:0,
		time:0,
		data:[]
		};
		var returnFn=function(){
			if(socket){
		 		socket.emit("client_get",result);
		 	}
		 	else if(fn){
		 		var returnString = JSON.stringify(result);
		 		fn(returnString);
		 	}
		}
		
data_mg.updateTime.find({"parentKey":"client"},function(err,doc){
	if(err){
		result.code=0;
		returnFn();
	}else{
		if(doc&&doc.length&&doc[0]>data.data){
			result.time=doc.childKey;
			data_mg.client.$where('this.type != 2').exec(function(errA,docA){
				if(errA){
					result.code=0;
				}else{
					if(docA){
						result.code=1
						result.data=docA
					}
				}
				returnFn();
			})
		}else{
			result.code=2;
			returnFn();
		}
	}
	
})
		
};

function add(socket,data,fn){
	console.log("client/add");
	data.data = {
		"id":uuid(),/*id*/
		"type":1,/*类型,1普通用户2管理用户*/
		"userName":"用户名",/*用户名*/
		"image":"http://",/*头像*/
		"place":"地址",/*地址*/
		"phone":"18239208903",/*手机*/
		"email":"fhdj@email.com",/*邮箱*/
		"name":"真实名",/*真实姓名*/
		"contacts":"联系人",/*联系人*/
		"contactsPhone":"2738948393",/*联系人电话*/
		"record":"本科",/*学历*/
		"university":"华农",/*毕业院校*/
		"job":"这个职位",/*职位*/
		"company":"公司"/*公司*/
	}
	var result={code:1};
	var returnFn=function(){
		if(socket){
	 	socket.emit("client_add",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}
	}
	var newClient=new data_mg.client(data.data);
	newClient.save(function(err){
		if(err){
			result.code=0;
			returnFn()
		}else{
			data_mg.updateTime.update({"parentKey":"client"},{$set:{"childKey":new Date().getTime()}},{},function(errA){
				if(errA){
					result.code=0
				}else{
					result.code=1;
				}
				returnFn();
			})
		}
	})
		
};

function edit(socket,data,fn){
	console.log("client/edit");
	if(typeof(data.data)=="string"){
		data.data=JSON.parse(data.data)
		}
	console.log(data.data)
	var result={code:0};
	var returnFn=function(){
		if(socket){
	 	socket.emit("client_edit",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}
	}
	console.log("开始更新")
	data_mg.client.update({"id":data.data.id},{$set:data.data},{},function(err){
		console.log("更新回调")
		if(err){
			console.log(err)
			result.code=0
			returnFn()
		}else{
			console.log("开始更新时间")
			data_mg.updateTime.update({"parentKey":"client"},{$set:{"childKey":new Date().getTime()}},{},function(errA){
				console.log("更新回调")
				if(errA){
					console.log(errA)
					result.code=0
				}else{
					console.log("修改成功")
					result.code=1
				}
				returnFn();
			})
		}
	})
		
};

function remove(socket,data,fn){
	console.log("client/remove");
	//data.data = "ddssfs"/*商品id*/
	var result={code:1};
	var returnFn=function(){
		if(socket){
	 	socket.emit("client_edit",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}	
	}
	data_mg.client.remove({"id":data.data},function(err){
		if(err){
			result.code=0;
			returnFn()
		}else{
			data_mg.updateTime.update({"parentKey":"client"},{$set:{"childKey":new Date().getTime()}},{},function(errA){
				if(errA){
					result.code=0
				}else{
					result.code=1
				}
				returnFn()
			})
		}
	})
	
};
function getSafeQusetion(socket,data,fn){
	console.log("client/getSafeQusetion");
	var result={code:1};
if(socket){
	 	socket.emit("client_getSafeQusetion",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function checkSafeQusetion(socket,data,fn){
	console.log("client/checkSafeQusetion");
	var result={code:1};
if(socket){
	 	socket.emit("client_checkSafeQusetion",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function bind(socket,data,fn){
	console.log("client/bind");
	if(typeof(data.data)=="string"){
		data.data=JSON.parse(data.data)
		}
		console.log(data.data)
	var result={code:0};
	function returnFn(){
		if(socket){
	 	socket.emit("client_bind",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}
		}
	data_mg.bindCode.findOne({"type":data.data.type,"number":data.data.number},function(err,doc){
		if(err){
			console.log(err);
			result.code=0;
			returnFn();
			}else{
				if(doc){
					if(doc.code==data.data.code){
						data_mg.bindCode.remove({"type":data.data.type,"number":data.data.number},function(errB){
							if(errB){
								console.log(errB);
								result.code=0;
								returnFn();
								}else{
									var setTrue={};
									setTrue[data.data.type]=true;
									data_mg.bind.updata({"id":data.data.id},{$set:setTrue},{},function(errC){
										if(errC){
											result.code=0;
								returnFn();
											}else{
												var setType={};
												setType[data.data.type]=data.data.number;
												data_mg.client.update({"id":data.data.id},{$set:setType},{},function(errD){
													if(errD){
														result.code=0
														}else{
															result.code=1
															}
														returnFn();
													})
												}
										})
									}
							})
						}
					}else{
						result.code=0;
			returnFn();
						}
				}
		})	
};

function getBindCode(socket,data,fn){
	console.log("client/getBindCode");
	if(typeof(data.data)=="string"){
		data.data=JSON.parse(data.data);
		}
	console.log(data.data);
	var result={code:0};
	function returnFn(){
		if(socket){
	 	socket.emit("client_getBindCode",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}
		}
	data_mg.bindCode.findOne({"type":data.data.type,"number":data.data.number},function(err,doc){
		if(err){console.log(err)}else{
			var code=Math.round(Math.random()*1000000)
			console.log(code)
			function sendMsg(){
					var post_data = {  
    					username: userName,  
    					password: b,
						mobile:"13692146343",
						content:"短信测试，你的验证码是"+code,
						dstime:null
						};//这是需要提交的数据  
  
				var content = qs.stringify(post_data);
				var req = http.request(options, function (res) {  
					console.log('STATUS: ' + res.statusCode);  
					console.log('HEADERS: ' + JSON.stringify(res.headers));  
					res.setEncoding('utf8');  
					res.on('data', function (chunk) {  
					console.log(chunk)
						result.code=1;
							result.data=code;
							  returnFn()
					});  
				});  
				  
				req.on('error', function (e) {  
					result.code=0; 
					returnFn()
				});  
				  
				// write data to request body  
				req.write(content);  
				  
				req.end();
				}
			if(doc){
				console.log("修改code")
				data_mg.bindCode.update({"type":data.data.type,"number":data.data.number},{$set:{"code":code}},{},function(errA){
					if(errA){
						console.log(errA)
						result.code=0;
						returnFn();
						}else{
							console.log(b);
							if(data.data.type=="phone"){
								sendMsg()
								}else{
									// 设置邮件内容
var mailOptions = {
  from: "jiumogaoao<394127821@qq.com>", // 发件地址
  to: "394127821@qq.com", // 收件列表
  subject: "test", // 标题
  html: "<b>test</b> "+code // html 内容
}
// 发送邮件
smtpTransport.sendMail(mailOptions, function(error, response){
  if(error){
    console.log(error);
	result.code=0;
	 returnFn()
  }else{
    console.log("Message sent: " + response.message);
	result.code=1;
							result.data=code;
							  returnFn()
  }
  smtpTransport.close(); // 如果没用，关闭连接池
});
									}
							}
						
					})
				}else{
					console.log("创建code")
					var codebind=new data_mg.bindCode({"type":data.data.type,"number":data.data.number,"code":code})
					codebind.save(function(errA){
						if(errA){
						console.log(errA)
						result.code=0;
						returnFn();
						}else{
							console.log(b);
							if(data.data.type=="phone"){
								sendMsg()
								}
							
							}
						
						})
				}
			}
		})
		
};

function getBind(socket,data,fn){
	console.log("client/getBind");
	console.log(data.data)
	var result={code:0};
	function returnFn(){
		if(socket){
	 	socket.emit("client_getBind",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}
		}
	data_mg.bind.findOne({id:data.data},function(err,doc){
		if(err){
			console.log(err);
			result.code=0;
			}else{
				if(doc){
					result.code=1;
					result.data=doc;
					}else{
						result.code=0;
						}
				}
				returnFn()
		});	
};
exports.getSafeQusetion=getSafeQusetion;
exports.checkSafeQusetion=checkSafeQusetion;
exports.checkUser=checkUser;
exports.checkPhone=checkPhone;
exports.checkEmail=checkEmail;
exports.login=login;
exports.register=register;
exports.resetKey=resetKey;
exports.get=get;
//exports.add=add;
exports.edit=edit;
exports.remove=remove;
exports.bind=bind;
exports.getBindCode=getBindCode;
exports.getBind=getBind;
