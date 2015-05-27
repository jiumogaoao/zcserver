function get(socket,data,fn){
	console.log("recruit/get");
	data.data = 10086/*更新时间*/
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
	var returnFn=function(){
		if(socket){
	 	socket.emit("recruit_get",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}
		}

		returnFn();
		return;
	data_mg.updateTime.find({"parentKey":"recruit"},function(err,doc){
		if(err){
			result.code=0
			returnFn()
			}else{
				if(doc&&doc.length&&doc[0].childKey>data.data){
					result.time=doc[0].childKey
					data_mg.recruit.find({},function(errA,docA){
						if(errA){
							result.code=0
							}else{
								result.code=1;
								result.data=docA
								}
						returnFn()
						})
					}else{
						result.code=2
						returnFn()
						}
				}
		})
		
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
	var returnFn=function(){
		if(socket){
	 	socket.emit("recruit_add",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}	
		}
	var newRecruit=new data_mg.recruit(data.data);
	newRecruit.save(function(err){
		if(err){
			result.code=0
			returnFn()
			}else{
				data_mg.updateTime.update({"parentKey":"recruit"},{$set:{"childKey":new Date().getTime()}},{},function(errA){
					if(errA){
						result.code=0
						}else{
							result.code=1
							}
						returnFn()
					})
				}
		});
	
	
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
	var returnFn=function(){
		if(socket){
	 	socket.emit("recruit_edit",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}	
		}
	data_mg.recruit.update({"id":data.data.id},{$set:data.data},{},function(err){
		if(err){
			result.code=0
			returnFn()
			}else{
				data_mg.updateTime.update({"parentKey":"recruit"},{$set:{"childKey":new Date().getTime()}},{},function(errA){
					if(errA){
						result.code=0
						}else{
							result.code=1
							}
					returnFn()
					})
				}
		})
	
};


function remove(socket,data,fn){
	console.log("recruit/remove");
	data.data = "dsfsg"/*招聘id*/
	var result={code:1};
	var returnFn=function(){
		if(socket){
	 	socket.emit("recruit_remove",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}	
		}
	data_mg.recruit.remove({"id":data.data},function(err){
		if(err){
			result.code=0
			returnFn()
			}else{
				data_mg.updateTime.update({"parentKey":"recruit"},{$set:{"childKey":new Date().getTime()}},{},function(errA){
					if(errA){
						result.code=0
						}else{
							result.code=1
							}
						returnFn()
					})
				}
		})
	
};

exports.get=get;
exports.add=add;
exports.edit=edit;
exports.remove=remove;