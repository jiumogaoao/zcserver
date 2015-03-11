
function checkUser(socket,data,fn){
	console.log("client/checkUser");
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
	var result={code:1};
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
	var result={code:1};
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
