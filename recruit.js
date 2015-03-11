function get(socket,data,fn){
	console.log("recruit/get");
	var result={code:1};
if(socket){
	 	socket.emit("recruit_get",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function add(socket,data,fn){
	console.log("recruit/add");
	var result={code:1};
if(socket){
	 	socket.emit("recruit_add",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function edit(socket,data,fn){
	console.log("recruit/edit");
	var result={code:1};
if(socket){
	 	socket.emit("recruit_edit",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};


function remove(socket,data,fn){
	console.log("recruit/remove");
	var result={code:1};
if(socket){
	 	socket.emit("recruit_remove",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

exports.get=get;
exports.add=add;
exports.edit=edit;
exports.remove=remove;