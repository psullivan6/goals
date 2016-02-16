var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var StreekEventSchema = new Schema({
  date : {
    type : Date,
    default: Date.now
  },
  class: String
});

module.exports = mongoose.model('StreekEventModel', StreekEventSchema);