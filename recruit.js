function get(socket,data,fn){
	console.log("recruit/get");
	data.data = null/*不用传*/
	var result={
						code:1,
						time:10086,
						data:[
						{"id":"001","title":"bhk","message":"fkdjf","start":0,"end":1008611},
						{"id":"002","title":"bhk","message":"fkdjf","start":0,"end":1008611},
						{"id":"003","title":"bhk","message":"fkdjf","start":0,"end":1008611},
						{"id":"004","title":"bhk","message":"fkdjf","start":0,"end":1008611},
						{"id":"005","title":"bhk","message":"fkdjf","start":0,"end":1008611}
						]
						};
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
	data.data = {
		"id":uuid(),/*id*/
		"title":"dssfs",/*标题*/
		"message":"sfsfs",/*内容*/
		"start":0,/*生效时间*/
		"end":0/*结束时间*/
		}
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
	data.data = {
		"id":"errdgd",/*id*/
		"title":"dssfs",/*标题*/
		"message":"sfsfs",/*内容*/
		"start":0,/*生效时间*/
		"end":0/*结束时间*/
		}
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
	data.data = "dsfsg"/*招聘id*/
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