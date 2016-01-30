define([
  'backbone',
  '../models/StreekEventModel'
], function (Backbone, StreekEventModel){

  var StreekEventsCollection = Backbone.Collection.extend({
    model: StreekEventModel,
    url: '/api/data/streeks.json'
  });

  return StreekEventsCollection;
});