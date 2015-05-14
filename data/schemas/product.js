var mongoose = require('mongoose');
var MemberSchema = new mongoose.Schema({
		"id":String,/*id*/
		"title":String,/*标题*/
		"subhead":String,/*副标题*/
		"image":Array,/*图片*/
		"price":Number,/*价格*/
		"costPrice":Number,/*原价*/
		"money":Number,/*金额*/
		"payed":Number,/*以筹金额*/
		"payedCount":Number,/*众筹笔数*/
		"copy":Number,/*份数*/
		"maxTime":Number,/*持有期限*/
		"minUnit":Number,/*最小单位*/
		"maxUnit":Number,/*最大单位*/
		"tax":Number,/*税费预算*/
		"area":Number,/*面积*/
		"costUnitPrice":Number,/*原单价*/
		"UnitPrice":Number,/*单价*/
		"developer":String,/*开发商*/
		"place":String,/*地址*/
		"decorate":String,/*装修状况*/
		"propertyType":String,/*物业类型*/
		"stratTime":Number,/*开始时间*/
		"buildTime":Number,/*建造时间*/
		"rightType":String,/*产权类型*/
		"haveLease":String,/*有否租约*/
		"yearReturn":String,/*年收益率*/
		"more":Number
	})
module.exports = MemberSchema;