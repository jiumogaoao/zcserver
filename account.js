function get(socket,data,fn){
	console.log("account/get");
	var result={code:1};
if(socket){
	 	socket.emit("account_get",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};


exports.get=get;