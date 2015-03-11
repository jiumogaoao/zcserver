function get(socket,data,fn){
	console.log("company/get");
	var result={code:1};
if(socket){
	 	socket.emit("company_get",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};


exports.get=get;