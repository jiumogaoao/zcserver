var mongoose = require('mongoose');
var MemberSchema = new mongoose.Schema({
		id:String,//组id
		name:String,//组名
		dsc:String,//描述
		image:String,//图片
		privat:Boolean,//私密
		creater:String,//创建者
		"messageHide":Boolean
	})
module.exports = MemberSchema;