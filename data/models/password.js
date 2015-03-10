var mongoose = require('mongoose');
var memberSchema = require('../schemas/link');
var member = mongoose.model('password',memberSchema);
module.exports = member;