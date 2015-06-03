var mongoose = require('mongoose');
var MemberSchema = new mongoose.Schema({
		"type":String,
		"number":String,
		"code":Boolean
	})
module.exports = MemberSchema;