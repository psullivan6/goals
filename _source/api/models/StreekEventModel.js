var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var StreekEventSchema = new Schema({
  date : Date,
  name : String,
  slug : String
});

module.exports = mongoose.model('StreekEventModel', StreekEventSchema);