
function checkUser(socket,data,fn){
	console.log("client/checkUser");
	data.data="name";
	var result={code:1};
if(socket){
	 	socket.emit("client_checkUser",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function checkPhone(socket,data,fn){
	console.log("client/checkPhone");
	data.data = "phone";
	var result={code:1};
if(socket){
	 	socket.emit("client_checkPhone",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function checkEmail(socket,data,fn){
	console.log("client/checkEmail");
	data.data = "email";
	var result={code:1};
if(socket){
	 	socket.emit("client_checkEmail",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function login(socket,data,fn){
	console.log("client/login");
	data.data = {"userName":"aa",/*登录名/手机/邮箱*/
				"passWord":"djisk"}/*密码*/
	var result={
					code:1,
					data:{"id":"001","type":1,"userName":"aa","image":"http://","place":"bb","phone":"6575798","email":"dcghf@tgh.com","name":"fdgh","contacts":"sddfsf","contactsPhone":"34242","record":"本科","university":"你妹的学校","job":"做你妹","company":"你妹的"}
					};
if(socket){
	 	socket.emit("client_login",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function register(socket,data,fn){
	console.log("client/register");
	data.data={
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
if(socket){
	 	socket.emit("client_register",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function resetKey(socket,data,fn){
	console.log("client/resetKey");
	data.data={
				id:"2333r3",/*用户id*/
				oldKey:"1231231",/*旧密码*/
				newKey:"532424"/*新密码*/
				}
	var result={code:1};
if(socket){
	 	socket.emit("client_resetKey",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function get(socket,data,fn){
	console.log("client/get");
	data.data = null/*不用传*/
	var result={
		code:1,
		time:10086,
		data:[
			{"id":"001","type":1,"userName":"aa","image":"http://","place":"bb","phone":"6575798","email":"dcghf@tgh.com","name":"fdgh","contacts":"sddfsf","contactsPhone":"34242","record":"本科","university":"你妹的学校","job":"做你妹","company":"你妹的"},
			{"id":"002","type":1,"userName":"aa","image":"http://","place":"bb","phone":"6575798","email":"dcghf@tgh.com","name":"fdgh","contacts":"sddfsf","contactsPhone":"34242","record":"本科","university":"你妹的学校","job":"做你妹","company":"你妹的"},
			{"id":"003","type":1,"userName":"aa","image":"http://","place":"bb","phone":"6575798","email":"dcghf@tgh.com","name":"fdgh","contacts":"sddfsf","contactsPhone":"34242","record":"本科","university":"你妹的学校","job":"做你妹","company":"你妹的"},
			{"id":"004","type":1,"userName":"aa","image":"http://","place":"bb","phone":"6575798","email":"dcghf@tgh.com","name":"fdgh","contacts":"sddfsf","contactsPhone":"34242","record":"本科","university":"你妹的学校","job":"做你妹","company":"你妹的"},
			{"id":"005","type":1,"userName":"aa","image":"http://","place":"bb","phone":"6575798","email":"dcghf@tgh.com","name":"fdgh","contacts":"sddfsf","contactsPhone":"34242","record":"本科","university":"你妹的学校","job":"做你妹","company":"你妹的"},
		]
		};
if(socket){
	 	socket.emit("client_get",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
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
if(socket){
	 	socket.emit("client_add",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function edit(socket,data,fn){
	console.log("client/edit");
	data.data = {
		"id":"24253",/*id*/
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
if(socket){
	 	socket.emit("client_edit",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function remove(socket,data,fn){
	console.log("client/edit");
	data.data = "ddssfs"/*商品id*/
	var result={code:1};
if(socket){
	 	socket.emit("client_edit",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

exports.checkUser=checkUser;
exports.checkPhone=checkPhone;
exports.checkEmail=checkEmail;
exports.login=login;
exports.register=register;
exports.resetKey=resetKey;
exports.get=get;
exports.add=add;
exports.edit=edit;
exports.remove=remove;
