function get(socket,data,fn){
	console.log("product/get");
	var result={code:1};
if(socket){
	 	socket.emit("product_get",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};


exports.get=get;
