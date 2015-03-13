function get(socket,data,fn){
	console.log("redPacket/get");
	data.data = null/*不传*/
	var result={
		code:1,
		data:[
								{"id":"001","userId":"001","money":0,"type":0,"strat":0,"end":0},
								{"id":"002","userId":"001","money":0,"type":0,"strat":0,"end":0},
								{"id":"003","userId":"001","money":0,"type":0,"strat":0,"end":0}
								]
	};
if(socket){
	 	socket.emit("redPacket_get",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
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
if(socket){
	 	socket.emit("redPacket_add",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
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
if(socket){
	 	socket.emit("redPacket_detail",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

exports.get=get;
exports.edit=edit;
exports.detail=detail;