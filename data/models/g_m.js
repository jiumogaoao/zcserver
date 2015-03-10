var mongoose = require('mongoose');
var memberSchema = require('../schemas/link');
var member = mongoose.model('g_m',memberSchema);
module.exports = member;