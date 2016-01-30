define([
  'jquery',
  'underscore',
  '../BaseView',
  'text!templates/list/StreekListItemTemplate.html'
], function($, _, BaseView,
            StreekListItemTemplate){

  var StreekListItemView = BaseView.extend({

    // It's the first function called when this view it's instantiated.
    initialize: function(){
      _.bindAll(this, 'render');
      this.template = _.template(StreekListItemTemplate);

      // Call the initialize function of the extended BaseView
      BaseView.prototype.initialize.call(this);
    },

    render: function(){
      var thisContext = this;
      this.$el.html(thisContext.template());
    },
  });

  return StreekListItemView;
});