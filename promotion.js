function get(socket,data,fn){
	console.log("promotion/get");
	var result={code:1};
if(socket){
	 	socket.emit("promotion_get",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function edit(socket,data,fn){
	console.log("promotion/edit");
	var result={code:1};
if(socket){
	 	socket.emit("promotion_edit",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};


exports.get=get;
exports.edit=edit;
