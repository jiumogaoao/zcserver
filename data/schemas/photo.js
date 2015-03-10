var mongoose = require('mongoose');
var MemberSchema = new mongoose.Schema({
		"id":String,//图片id
		"image":String,//路径
		"dsc":String,//描述
		"name":String//名字
		})
module.exports = MemberSchema;