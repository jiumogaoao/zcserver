var mongoose = require('mongoose');
var MemberSchema = new mongoose.Schema({
	"id":String,//用户id
		"userName":String,//用户名
		"nickName":String,//昵称
		"image":String,//头像
		"place":String,//地区
		"phone":String,//手机
		"sex":Number,//性别
		"messageHide":Boolean
})
module.exports = MemberSchema;