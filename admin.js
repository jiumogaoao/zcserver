function regest(socket,data,fn){
	console.log("member/regest");
	var newMember = new data_mg.member(data.data);
	var result ={}
	newMember.save(function(err){
		if(err){
			console.log(err);
			result.code=0;
		}else{
			console.log(data.data)
			var newpassword = new data_mg.password({
				"parentKey":data.data.userName,//图片id
				"childKey":data.data.key,//路径
			})
			newpassword.save(function(err){
				if(err){
					console.log(err);
					result.code=0;
				}else{
					result.code=1;
					var newFriend=new updateTime({id:data.data.id,model:"friend",updateTime:0});
					var newGroup=new updateTime({id:data.data.id,model:"group",updateTime:0});
					var newAlbum=new updateTime({id:data.data.id,model:"album",updateTime:0});
					var newmessage=new updateTime({id:data.data.id,model:"message",updateTime:0});
					var newGM=new updateTime({id:data.data.id,model:"g_m",updateTime:0});
					result.userName=data.data.userName;
				}
				if(socket){
	 	socket.emit("member_regest",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}
			});
		}
		
	});

	 
	 
	
};
function login(socket,data,fn){
	console.log("member/login");
	var result={};
	data_mg.password.find({parentKey:data.data.userName,childKey:data.data.password},function(err,returnData){
		if(err){
			console.log(err);
			result.code=0;
		}else{
			if(returnData&&returnData.length){
				result.code=1
			}else{
				result.code=0
			}
		}
if(socket){
	 	socket.emit("member_login",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}	
	})

	 
	
	
};
function set(socket,data,fn){
	console.log("member/set");
	var result = {code:0};
	 var callback = function(){
	 	if(socket){
	 	socket.emit("member_set",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}
	 }
	 data_mg.member.update({id:data.data.id},data.data,{},function(err,rdata){
	 	if(err){
	 		console.log(err)
	 		result.code = 0;
	 		callback();
	 	}else{
	 		if(rdata){
	 			data_mg.updateTime.update({"id":data.data.id,"model":"member"},{"updateTime":new Date().getTime()},{},function(err,tdata){
	 				if(err){
	 					condole.log(err)
	 					result.code = 0;
	 				}else{
	 					result.code = 1;
	 				}
	 				callback();
	 			})
	 		}
	 	}
	 })
	
};

function resetKey(socket,data,fn){
	console.log("member/resetKey");
	var result = {code:0};
	 var callback = function(){
	 	if(socket){
	 	socket.emit("member_resetKey",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}
	 }
	 data_mg.member.findOne(data.data,function(err,rdata){
	 	if(err){
	 		console.log(err);
	 		result.code = 0;
	 		callback();
	 	}else{
	 		if(rdata){
	 			data_mg.password.update({"parentKey":data.data.userName},{"childKey":123456},{}function(err,tdata){
	 				if(err){
	 					console.log(err)
	 					result.code = 0
	 				}else{
	 					if(tdata){
	 					result.code = 1
	 					}
	 				}
	 				callback()
	 			})
	 		}
	 	}
	 })
	 
}

function get(socket,data,fn){
	console.log("member/get");
	console.log(data.data)
	var result={code:0}
	data_mg.member.findOne({"userName":data.data.userName},function(err,data){
		if(data){
			console.log(data);
				result.data = data;
				result.code =1 ;
		}else{
			result.code = 0;
		}
		if(socket){
			 	socket.emit("member_get",result);
			 }
			 	else if(fn){
			 		var returnString = JSON.stringify(result);
			 		fn(returnString);
			 	}
	})
	
	 
}
exports.regest=regest;
exports.login=login;
exports.set=set;
exports.resetKey =resetKey;
exports.get = get;

