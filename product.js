function get(socket,data,fn){
	console.log("product/get");
	data.data = null/*不用传*/
	var result={
		code : 1,
		time : 10086,
		data : [
				{"id":"001","title":"aa","subhead":"nnnn","image":["http://","http://"],"price":1000,"costPrice":2000,"money":20000,"payed":10000,"payedCount":10,"copy":20,"maxTime":10086,"minUnit":1,"maxUnit":200,"tax":8,"area":1223,"costUnitPrice":10,"UnitPrice":9,"developer":"你妹","place":"那个地址","decorate":"一般","propertyType":"公寓","stratTime":0,"buildTime":1024,"rightType":"商业用房","haveLease":0,"yearReturn":"15%以上"},
				{"id":"002","title":"aa","subhead":"nnnn","image":["http://","http://"],"price":1000,"costPrice":2000,"money":20000,"payed":10000,"payedCount":10,"copy":20,"maxTime":10086,"minUnit":1,"maxUnit":200,"tax":8,"area":1223,"costUnitPrice":10,"UnitPrice":9,"developer":"你妹","place":"那个地址","decorate":"一般","propertyType":"公寓","stratTime":0,"buildTime":1024,"rightType":"商业用房","haveLease":0,"yearReturn":"15%以上"},
				{"id":"003","title":"aa","subhead":"nnnn","image":["http://","http://"],"price":1000,"costPrice":2000,"money":20000,"payed":10000,"payedCount":10,"copy":20,"maxTime":10086,"minUnit":1,"maxUnit":200,"tax":8,"area":1223,"costUnitPrice":10,"UnitPrice":9,"developer":"你妹","place":"那个地址","decorate":"一般","propertyType":"公寓","stratTime":0,"buildTime":1024,"rightType":"商业用房","haveLease":0,"yearReturn":"15%以上"},
				{"id":"004","title":"aa","subhead":"nnnn","image":["http://","http://"],"price":1000,"costPrice":2000,"money":20000,"payed":10000,"payedCount":10,"copy":20,"maxTime":10086,"minUnit":1,"maxUnit":200,"tax":8,"area":1223,"costUnitPrice":10,"UnitPrice":9,"developer":"你妹","place":"那个地址","decorate":"一般","propertyType":"公寓","stratTime":0,"buildTime":1024,"rightType":"商业用房","haveLease":0,"yearReturn":"15%以上"}
				]
		};
if(socket){
	 	socket.emit("product_get",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
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
				"yearReturn":"15%以上"/*年收益率*/
			}
	var result={code:1};
if(socket){
	 	socket.emit("product_add",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
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
				"yearReturn":"15%以上"/*年收益率*/
			}
	var result={code:1};
if(socket){
	 	socket.emit("product_edit",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}		
};

function remove(socket,data,fn){
	console.log("product/remove");
	data.data="ddssfs"/*商品id*/
	var result={code:1};
if(socket){
	 	socket.emit("product_remove",result);
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