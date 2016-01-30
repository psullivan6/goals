define([
  'jquery',
  'underscore',
  '../BaseView',
  'text!templates/form/StreekFormTemplate.html'
], function($, _, BaseView,
            StreekFormTemplate){

  var StreekFormView = BaseView.extend({
    el: '#page',

    // It's the first function called when this view it's instantiated.
    initialize: function(){
      _.bindAll(this, 'render');
      this.template = _.template(StreekFormTemplate);

      // Call the initialize function of the extended BaseView
      BaseView.prototype.initialize.call(this);
    },

    render: function(){
      var thisContext = this;
      this.$el.html(thisContext.template());
    },
  });

  return StreekFormView;
});