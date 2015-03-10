var mongoose = require('mongoose');
var memberSchema = require('../schemas/updateTime');
var member = mongoose.model('updateTime',memberSchema);
module.exports = member;