function get(socket,data,fn){
	console.log("announcement/get");
	var result={code:1};
if(socket){
	 	socket.emit("announcement_get",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function add(socket,data,fn){
	console.log("announcement/add");
	var result={code:1};
if(socket){
	 	socket.emit("announcement_add",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function edit(socket,data,fn){
	console.log("announcement/edit");
	var result={code:1};
if(socket){
	 	socket.emit("announcement_edit",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function remove(socket,data,fn){
	console.log("announcement/remove");
	var result={code:1};
if(socket){
	 	socket.emit("announcement_remove",result);
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