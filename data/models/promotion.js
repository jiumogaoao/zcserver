var mongoose = require('mongoose');
var memberSchema = require('../schemas/imageAndWord');
var member = mongoose.model('imageAndWord',memberSchema);
module.exports = member;