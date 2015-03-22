var mongoose = require('mongoose');
var MemberSchema = new mongoose.Schema({
		"id":String,/*id*/
		"userName":String,/*帐号*/
		"client":Boolean,/*用户管理*/
		"admin":Boolean,/*管理员管理*/
		"announcement":Boolean,/*公告管理*/
		"recruit":Boolean,/*招聘管理*/
		"company":Boolean,/*企业信息管理*/
		"product":Boolean,/*商品管理*/
		"promotion":Boolean,/*宣传管理*/
		"redPacket":Boolean/*红包管理*/
	})
module.exports = MemberSchema;