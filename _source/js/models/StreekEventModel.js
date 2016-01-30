define([
  'backbone'
], function(Backbone) {

  var StreekEventModel = Backbone.Model.extend({
    idAttribute : '_id',

    date: Date
  });

  return StreekEventModel;
});