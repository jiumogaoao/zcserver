function get(socket,data,fn){
	console.log("account/get");
	var result={code:1};
if(socket){
	 	socket.emit("account_get",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function add(socket,data,fn){
	console.log("account/add");
	var result={code:1};
if(socket){
	 	socket.emit("account_add",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function getSafeQusetion(socket,data,fn){
	console.log("account/getSafeQusetion");
	var result={code:1};
if(socket){
	 	socket.emit("account_getSafeQusetion",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function checkSafeQusetion(socket,data,fn){
	console.log("account/checkSafeQusetion");
	var result={code:1};
if(socket){
	 	socket.emit("account_checkSafeQusetion",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function getdeal(socket,data,fn){
	console.log("account/getdeal");
	var result={code:1};
if(socket){
	 	socket.emit("account_getdeal",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function adddeal(socket,data,fn){
	console.log("account/adddeal");
	var result={code:1};
if(socket){
	 	socket.emit("account_adddeal",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function editdeal(socket,data,fn){
	console.log("account/editdeal");
	var result={code:1};
if(socket){
	 	socket.emit("account_editdeal",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function removedeal(socket,data,fn){
	console.log("account/removedeal");
	var result={code:1};
if(socket){
	 	socket.emit("account_removedeal",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function getdealList(socket,data,fn){
	console.log("account/getdealList");
	var result={code:1};
if(socket){
	 	socket.emit("account_getdealList",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function confirmDeal(socket,data,fn){
	console.log("account/confirmDeal");
	var result={code:1};
if(socket){
	 	socket.emit("account_confirmDeal",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function payDeal(socket,data,fn){
	console.log("account/payDeal");
	var result={code:1};
if(socket){
	 	socket.emit("account_payDeal",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function recharge(socket,data,fn){
	console.log("account/recharge");
	var result={code:1};
if(socket){
	 	socket.emit("account_recharge",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};


function paid(socket,data,fn){
	console.log("account/paid");
	var result={code:1};
if(socket){
	 	socket.emit("account_paid",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};


exports.get=get;
exports.add=add;
exports.getSafeQusetion=getSafeQusetion;
exports.checkSafeQusetion=checkSafeQusetion;
exports.getdeal=getdeal;
exports.adddeal=adddeal;
exports.editdeal=editdeal;
exports.removedeal=removedeal;
exports.getdealList=getdealList;
exports.confirmDeal=confirmDeal;
exports.payDeal=payDeal;
exports.recharge=recharge;
exports.paid=paid;
