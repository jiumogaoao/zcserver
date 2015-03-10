var mongoose = require('mongoose');
var memberSchema = require('../schemas/link');
var member = mongoose.model('a_p',memberSchema);
module.exports = member;