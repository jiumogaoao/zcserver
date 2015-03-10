var mongoose = require('mongoose');
var memberSchema = require('../schemas/group');
var member = mongoose.model('album',memberSchema);
module.exports = member;