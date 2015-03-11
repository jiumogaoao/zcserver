function get(socket,data,fn){
	console.log("admin/get");
	var result={code:1};
if(socket){
	 	socket.emit("admin_get",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};


exports.get=get;