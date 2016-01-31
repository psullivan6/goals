define([
  'jquery',
  'underscore',
  '../BaseView',
  'text!templates/list/StreekListItemTemplate.html'
], function($, _, BaseView,
            StreekListItemTemplate){

  var StreekListItemView = BaseView.extend({
    tagName: 'li',
    className: 'streek-listItem clearfix',

    // It's the first function called when this view it's instantiated.
    initialize: function(){
      _.bindAll(this, 'render');
      this.template = _.template(StreekListItemTemplate);

      // Call the initialize function of the extended BaseView
      BaseView.prototype.initialize.call(this);
    },

    render: function(){
      var streekCount = this.commafiedNumber(this.model.get('count'));

      this.$el.html(this.template({
        color: this.model.get('color'),
        count: streekCount,
        name: this.model.get('name')
      }));
    },
  });

  return StreekListItemView;
});