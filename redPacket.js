function get(socket,data,fn){
	console.log("redPacket/get");
	data.data = 10086/*不传*/
	var result={
		code:1,
		data:[
								{"id":"001","userId":"001","money":0,"type":0,"strat":0,"end":0},
								{"id":"002","userId":"001","money":0,"type":0,"strat":0,"end":0},
								{"id":"003","userId":"001","money":0,"type":0,"strat":0,"end":0}
								]
	};
	var returnFn=function(){
		if(socket){
	 	socket.emit("redPacket_get",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}
		}
	data_mg.updateTime.find({"parentKey":"redPacket"},function(err,doc){
		if(err){
			result.code=0
			returnFn()
			}else{
				if(doc&&doc.length&&doc[0].childKey>data.data){
					result.time=doc[0].childKey
					data_mg.redPacket.find({},function(errA,docA){
						if(errA){
							result.code=0
							}else{
								result.code=1
								result.data=docA
								}
								returnFn()
						})
					}
				
				}
		})
		
};

function add(socket,data,fn){
	console.log("redPacket/add");
	data.data = {
		"id":uuid(),/*id*/
		"userId":"sfsgsf",/*用户id*/
		"money":0,/*金额*/
		"type":0,/*类型*/
		"strat":0,/*发放日期*/
		"end":0/*消费日期*/
		}
	var result={code:1};
	var returnFn=function(){
		if(socket){
	 	socket.emit("redPacket_add",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}
		}
	var newRedPacket=new data_mg.redPacket(data.data);
	newRedPacket.save(function(err){
		if(err){
			result.code=0
			returnFn();
			}else{
				data_mg.updateTime.update({"parentKet":"redPacket"},{$set:{"childKey":new Date().getTime()}},{},function(errA){
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

function detail(socket,data,fn){
	console.log("redPacket/detail");
	data.data = "ssfsfs"/*用户id*/
	var result={
							code:1,
							time:10086,
							data:[
								{"id":"001","userId":"001","money":0,"type":0,"strat":0,"end":0},
								{"id":"002","userId":"001","money":0,"type":0,"strat":0,"end":0},
								{"id":"003","userId":"001","money":0,"type":0,"strat":0,"end":0}
								]
							};
	data_mg.redPacket.find({"userId":data.data},function(err,doc){
		if(err){
			result.code=0
			}else{
				result.code=1;
				result.data=doc
				}
			if(socket){
	 	socket.emit("redPacket_detail",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}
		})
	
		
};

exports.get=get;
exports.add=add;
exports.detail=detail;