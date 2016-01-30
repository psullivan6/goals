define([
  'backbone',
  '../models/StreekModel'
], function (Backbone, StreekModel){

  var StreeksCollection = Backbone.Collection.extend({
    model: StreekModel,
    url: '/api/data/streeks.json'
  });

  return StreeksCollection;
});