var mongoose = require('mongoose');
var memberSchema = require('../schemas/link');
var member = mongoose.model('friend',memberSchema);
module.exports = member;