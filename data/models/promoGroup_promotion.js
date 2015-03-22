var mongoose = require('mongoose');
var memberSchema = require('../schemas/link');
var member = mongoose.model('link',memberSchema);
module.exports = member;