function get(socket,data,fn){
	console.log("redPacket/get");
	var result={code:1};
if(socket){
	 	socket.emit("redPacket_get",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};


exports.get=get;