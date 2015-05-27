function get(socket,data,fn){
	console.log("product/get");
	data.data = 10086/*不用传*/
	var result={
		code : 1,
		time : 10086,
		data : [
				{"id":"001","title":"aa","subhead":"nnnn","image":["http://","http://"],"price":1000,"costPrice":2000,"money":20000,"payed":10000,"payedCount":10,"copy":20,"maxTime":10086,"minUnit":1,"maxUnit":200,"tax":8,"area":1223,"costUnitPrice":10,"UnitPrice":9,"developer":"你妹","place":"那个地址","decorate":"0","propertyType":"1","stratTime":0,"buildTime":1024,"rightType":"2","haveLease":"0","yearReturn":"15%以上","more":0},
				{"id":"002","title":"aa","subhead":"nnnn","image":["http://","http://"],"price":1000,"costPrice":2000,"money":20000,"payed":10000,"payedCount":10,"copy":20,"maxTime":10086,"minUnit":1,"maxUnit":200,"tax":8,"area":1223,"costUnitPrice":10,"UnitPrice":9,"developer":"你妹","place":"那个地址","decorate":"1","propertyType":"2","stratTime":0,"buildTime":1024,"rightType":"0","haveLease":"1","yearReturn":"15%以上","more":0},
				{"id":"003","title":"aa","subhead":"nnnn","image":["http://","http://"],"price":1000,"costPrice":2000,"money":20000,"payed":10000,"payedCount":10,"copy":20,"maxTime":10086,"minUnit":1,"maxUnit":200,"tax":8,"area":1223,"costUnitPrice":10,"UnitPrice":9,"developer":"你妹","place":"那个地址","decorate":"2","propertyType":"0","stratTime":0,"buildTime":1024,"rightType":"1","haveLease":"0","yearReturn":"15%以上","more":0},
				{"id":"004","title":"aa","subhead":"nnnn","image":["http://","http://"],"price":1000,"costPrice":2000,"money":20000,"payed":10000,"payedCount":10,"copy":20,"maxTime":10086,"minUnit":1,"maxUnit":200,"tax":8,"area":1223,"costUnitPrice":10,"UnitPrice":9,"developer":"你妹","place":"那个地址","decorate":"0","propertyType":"0","stratTime":0,"buildTime":1024,"rightType":"2","haveLease":"1","yearReturn":"15%以上","more":0}
				]
		};
	var returnFn=function(){
		if(socket){
	 	socket.emit("product_get",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}
		}
		returnFn();
		return;
	data_mg.updateTime.find({"parentKey":"product"},function(err,doc){
		if(err){
			result.code=0
			returnFn()
			}else{
				if(doc&&doc.length&&doc[0].childKey>data.data){
					result.time=doc[0].childKey;
					data_mg.product.find({},function(errA,docA){
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
	console.log("product/add");
	data.data = {"id":uuid(),/*id*/
				"title":"aa",/*标题*/
				"subhead":"nnnn",/*副标题*/
				"image":["http://","http://"],/*图片*/
				"price":1000,/*价格*/
				"costPrice":2000,/*原价*/
				"money":20000,/*金额*/
				"payed":10000,/*以筹金额*/
				"payedCount":10,/*众筹笔数*/
				"copy":20,/*份数*/
				"maxTime":10086,/*持有期限*/
				"minUnit":1,/*最小单位*/
				"maxUnit":200,/*最大单位*/
				"tax":8,/*税费预算*/
				"area":1223,/*面积*/
				"costUnitPrice":10,/*原单价*/
				"UnitPrice":9,/*单价*/
				"developer":"你妹",/*开发商*/
				"place":"那个地址",/*地址*/
				"decorate":"一般",/*装修状况*/
				"propertyType":"公寓",/*物业类型*/
				"stratTime":0,/*开始时间*/
				"buildTime":1024,/*建造时间*/
				"rightType":"商业用房",/*产权类型*/
				"haveLease":0,/*有否租约*/
				"yearReturn":"15%以上",/*年收益率*/
				"more":0
			}
	var result={code:1};
	var returnFn=function(){
		if(socket){
	 	socket.emit("product_add",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}
		}
	var newProduct=new data_mg.product(data.data);
	newProduct.save(function(err){
		if(err){
			result.code=0
			returnFn()
			}else{
				data_mg.updateTime.update({"parentKey":"product"},{$set:{"childKey":new Date().getTime()}},{},function(errA){
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

function edit(socket,data,fn){
	console.log("product/edit");
	data.data = {"id":"38u3",/*id*/
				"title":"aa",/*标题*/
				"subhead":"nnnn",/*副标题*/
				"image":["http://","http://"],/*图片*/
				"price":1000,/*价格*/
				"costPrice":2000,/*原价*/
				"money":20000,/*金额*/
				"payed":10000,/*以筹金额*/
				"payedCount":10,/*众筹笔数*/
				"copy":20,/*份数*/
				"maxTime":10086,/*持有期限*/
				"minUnit":1,/*最小单位*/
				"maxUnit":200,/*最大单位*/
				"tax":8,/*税费预算*/
				"area":1223,/*面积*/
				"costUnitPrice":10,/*原单价*/
				"UnitPrice":9,/*单价*/
				"developer":"你妹",/*开发商*/
				"place":"那个地址",/*地址*/
				"decorate":"一般",/*装修状况*/
				"propertyType":"公寓",/*物业类型*/
				"stratTime":0,/*开始时间*/
				"buildTime":1024,/*建造时间*/
				"rightType":"商业用房",/*产权类型*/
				"haveLease":0,/*有否租约*/
				"yearReturn":"15%以上",/*年收益率*/
				"more":0
			}
	var result={code:1};
	var returnFn=function(){
		if(socket){
	 	socket.emit("product_edit",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}
		}
	data_mg.product.update({"id":data.data.id},{$set:data.data},{},function(err){
		if(err){
			result.code=0
			returnFn()
			}else{
				data_mg.updateTime.update({"parentKey":"product"},{$set:{"childKey":new Date().getTime()}},{},function(errA){
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
	console.log("product/remove");
	data.data="ddssfs"/*商品id*/
	var result={code:1};
	var returnFn=function(){
		if(socket){
	 	socket.emit("product_remove",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}	
		}
	data_mg.product.remove({"id":data.data},function(err){
		if(err){
			result.code=0
			returnFn()
			}else{
				data_mg.updateTime.update({"parentKey":"product"},{$set:{"childKey":new Date().getTime()}},{},function(errA){
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