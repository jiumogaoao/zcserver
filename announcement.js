function get(socket,data,fn){
	console.log("announcement/get");
	data.data=null/*不用传*/
	var result={
		code:1,
		time:10086,
		data:[
				{"id":"001","title":"中筹网金唐人：2015，房地产众筹怎么玩？","message":"中筹网金唐人：2015，房地产众筹怎么玩？","start":0,"end":0},
				{"id":"002","title":"中筹网金唐人：2015，房地产众筹怎么玩？","message":"中筹网金唐人：2015，房地产众筹怎么玩？","start":0,"end":0},
				{"id":"003","title":"中筹网金唐人：2015，房地产众筹怎么玩？","message":"中筹网金唐人：2015，房地产众筹怎么玩？","start":0,"end":0},
				{"id":"004","title":"中筹网金唐人：2015，房地产众筹怎么玩？","message":"中筹网金唐人：2015，房地产众筹怎么玩？","start":0,"end":0},
				{"id":"005","title":"中筹网金唐人：2015，房地产众筹怎么玩？","message":"中筹网金唐人：2015，房地产众筹怎么玩？","start":0,"end":0}
			]
		};
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
	data.data={
		"id":uuid(),/*id*/
		"title":"eee",/*标题*/
		"message":"rewr",/*内容*/
		"start":0,/*生效时间*/
		"end":0/*结束时间*/
		}
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
	data.data={
		"id":"sfs",/*id*/
		"title":"eee",/*标题*/
		"message":"rewr",/*内容*/
		"start":0,/*生效时间*/
		"end":0/*结束时间*/
		}
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
	data.data="ehdjk"/*id*/
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