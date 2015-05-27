function get(socket,data,fn){
	console.log("admin/get");
	data.data = 10086/*不用传*/
	var result={
					code:1,
					time:10086,
					data:[
						{"id":"001","userName":"001","client":"1","admin":"2","announcement":"0","recruit":"0","company":"0","product":"0","promotion":"0","redPacket":"0"},
						{"id":"002","userName":"002","client":"0","admin":"1","announcement":"2","recruit":"0","company":"0","product":"0","promotion":"0","redPacket":"0"},
						{"id":"003","userName":"003","client":"0","admin":"0","announcement":"1","recruit":"2","company":"0","product":"0","promotion":"0","redPacket":"0"},
						{"id":"004","userName":"004","client":"0","admin":"0","announcement":"0","recruit":"1","company":"2","product":"0","promotion":"0","redPacket":"0"}
					]
					};
	var returnFn=function(){
		if(socket){
	 	socket.emit("admin_get",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}	
	}
	returnFn();
	return;
	data_mg.updateTime.find({"parentKey":"admin"},function(err,doc){
		if(err){
			result.code=0;
			returnFn();
		}else{
			if(doc&&doc.length&&doc[0].childKey>data.data){
				result.time=doc[0].childKey
				data_mg.admin.find({},function(errA,docA){
					if(errA){
						result.code=0
					}else{
						result.code=1;
						result.data=docA;
					}
					returnFn();
				});
			}else{
				result.code=2;
				returnFn();
			}
		}
	})
	
};

function add(socket,data,fn){
	console.log("admin/add");
	data.data = {
		"id":uuid(),/*id*/
		"userName":"sfdffgdgdgd",/*帐号*/
		"type":2,/*类型,1普通用户2管理用户*/
		"client":false,/*用户管理*/
		"admin":false,/*管理员管理*/
		"announcement":false,/*公告管理*/
		"recruit":false,/*招聘管理*/
		"company":false,/*企业信息管理*/
		"product":false,/*商品管理*/
		"promotion":false,/*宣传管理*/
		"redPacket":false/*红包管理*/
		}
	var result={code:1};
	var returnFn=function(){
		if(socket){
	 	socket.emit("admin_add",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}	
	}
	var newAdmin=new data_mg(data.data);
	newAdmin.save(function(err){
		if(err){
			result.code=0;
			returnFn()
		}else{
			data_mg.updateTime.update({"parentKey":"admin"},{$set:{"childKey":new Date().getTime()}},{},function(errA){
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
	console.log("admin/edit");
	data.data = {
		"id":"fssfs",/*id*/
		"userName":"sfdffgdgdgd",/*帐号*/
		"type":2,/*类型,1普通用户2管理用户*/
		"client":false,/*用户管理*/
		"admin":false,/*管理员管理*/
		"announcement":false,/*公告管理*/
		"recruit":false,/*招聘管理*/
		"company":false,/*企业信息管理*/
		"product":false,/*商品管理*/
		"promotion":false,/*宣传管理*/
		"redPacket":false/*红包管理*/
		}
	var result={code:1};
	var returnFn=function(){
		if(socket){
	 	socket.emit("admin_edit",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}	
	}
	data_mg.admin.update({"id":data.data.id},{$set:data.data},{},function(err){
		if(err){
			result.code=0
			returnFn()
		}else{
			data_mg.updateTime.update({"parentKey":"admin"},{$set:{"childKey":new Date().getTime()}},{},function(errA){
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
	console.log("admin/remove");
	data.data = "ddgdgd"/*管理员id*/
	var result={code:1};
	var returnFn=function(){
		if(socket){
	 	socket.emit("admin_remove",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}
	}
	data_mg.admin.remove({"id":data.data},function(err){
		if(err){
			result.code=0
			returnFn()
		}else{
			data_mg.updateTime.update({"parentKey":"admin"},{$set:{"childKey":new Date().getTime()}},{},function(errA){
				if(errA){
					result.code=0
				}else{
					result.code=1
				}
				returnFn();
			})
		}
	})
		
};

exports.get=get;
exports.add=add;
exports.edit=edit;
exports.remove=remove;