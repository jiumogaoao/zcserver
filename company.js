function get(socket,data,fn){
	console.log("company/get");
	data.data = null;/*不传*/
	var result={
						code : 1,
						time : 10086,
						data : [
								{"id":"001","title":"dhfkh","message":"edgdf","start":0,"end":1008611},
								{"id":"002","title":"dhfkh","message":"edgdf","start":0,"end":1008611},
								{"id":"003","title":"dhfkh","message":"edgdf","start":0,"end":1008611},
								{"id":"004","title":"dhfkh","message":"edgdf","start":0,"end":1008611},
								{"id":"005","title":"dhfkh","message":"edgdf","start":0,"end":1008611}
								]
						};
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
	data.data={
		"id":uuid(),/*id*/
		"title":"erree",/*标题*/
		"message":"erreer",/*内容*/
		"start":0,/*生效时间*/
		"end":0/*结束时间*/
		}
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
	data.data={
		"id":"dsfs",/*id*/
		"title":"erree",/*标题*/
		"message":"erreer",/*内容*/
		"start":0,/*生效时间*/
		"end":0/*结束时间*/
		}
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
	data.data="dfsf"/*资料id*/
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