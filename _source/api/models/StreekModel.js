var mongoose         = require('mongoose');
var Schema           = mongoose.Schema;
var StreekEventModel = require('./StreekEventModel');

var StreekSchema = new Schema({
  name   : String,
  slug   : String,
  color  : String,
  events : [{
    type: Schema.Types.ObjectId,
    ref: 'StreekEventModel'
  }]
});

module.exports = mongoose.model('StreekModel', StreekSchema);