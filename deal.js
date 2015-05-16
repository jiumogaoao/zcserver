function get(socket,data,fn){
	console.log("deal/get");
	var result={code:1};
if(socket){
	 	socket.emit("deal_getdeal",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function add(socket,data,fn){
	console.log("deal/add");
	var result={code:1};
if(socket){
	 	socket.emit("deal_add",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function edit(socket,data,fn){
	console.log("deal/edit");
	var result={code:1};
if(socket){
	 	socket.emit("deal_edit",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function remove(socket,data,fn){
	console.log("deal/remove");
	var result={code:1};
if(socket){
	 	socket.emit("deal_remove",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function list(socket,data,fn){
	console.log("deal/getdealList");
	var result={code:1};
if(socket){
	 	socket.emit("deal_getdealList",result);
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
exports.list=list;

