var mongoose = require('mongoose');
var memberSchema = require('../schemas/photo');
var member = mongoose.model('photo',memberSchema);
module.exports = member;