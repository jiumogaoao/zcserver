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

function add(socket,data,fn){
	console.log("company/add");
	var result={code:1};
if(socket){
	 	socket.emit("company_add",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function edit(socket,data,fn){
	console.log("company/edit");
	var result={code:1};
if(socket){
	 	socket.emit("company_edit",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function remove(socket,data,fn){
	console.log("company/remove");
	var result={code:1};
if(socket){
	 	socket.emit("company_remove",result);
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