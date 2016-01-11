var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var DailyLogSchema = new Schema({
  date: Date,
  name : String
});

module.exports = mongoose.model('DailyLogModel', DailyLogSchema);