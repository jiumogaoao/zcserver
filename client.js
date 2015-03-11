
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


exports.login=login;


