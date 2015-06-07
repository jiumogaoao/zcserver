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
	if(typeof(data.data)=="string"){
		data.data=JSON.parse(data.data)
		}
		console.log(data.data)
	var result={code:0};
	var returnFn=function(){
		if(socket){
	 	socket.emit("deal_add",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}
		};
	var deal=new data_mg.deal(data.data);
	deal.save(function(err){
		if(err){
			console.log(err)
			result.code=0
			}else{
				result.code=1
				}
			returnFn();
		});
		
};

function edit(socket,data,fn){
	console.log("deal/edit");
	if(typeof(data.data)=="string"){
		data.data=JSON.parse(data.data)
		}
	var result={code:0};
	var returnFn=function(){
		if(socket){
	 	socket.emit("deal_edit",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}
		}
		data_mg.deal.update({"id":data.data.id},{$set:data.data},{},function(err){
			if(err){
				console.log(err)
				result.code=0
				}else{
					result.code=1
					}
					returnFn();
			})
		
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
	console.log(data.data)
	var result={code:0};
	var returnFN=function(){
		if(socket){
	 	socket.emit("deal_getdealList",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}
		}
		data_mg.deal.find({userId:data.data},function(err,doc){
			if(err){
				console.log(err)
				result.code=0
				}else{
					result.code=1;
					result.data=doc
					}
			returnFN();		
			})
};

exports.get=get;
exports.add=add;
exports.edit=edit;
exports.remove=remove;
exports.list=list;

