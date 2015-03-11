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

function edit(socket,data,fn){
	console.log("redPacket/edit");
	var result={code:1};
if(socket){
	 	socket.emit("redPacket_edit",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function detail(socket,data,fn){
	console.log("redPacket/detail");
	var result={code:1};
if(socket){
	 	socket.emit("redPacket_detail",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

exports.get=get;
exports.edit=edit;
exports.detail=detail;