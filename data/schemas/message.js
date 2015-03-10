var mongoose = require('mongoose');
var MemberSchema = new mongoose.Schema({
		from:String,//发送方
		to:String,//接收方
		type:Number,//0单聊1群聊
		time:Number,//时间
		group:String,
		main:String//内容
	})
module.exports = MemberSchema;