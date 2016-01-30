var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var StreekSchema = new Schema({
  name : String
});

module.exports = mongoose.model('StreekModel', StreekSchema);