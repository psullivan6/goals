define([
  'jquery',
  'underscore',
  '../BaseView',
  './StreekListItemView',
  'text!templates/list/StreekListTemplate.html'
], function($, _, BaseView,
            StreekListItemView,
            StreekListTemplate){

  var StreekListView = BaseView.extend({
    el: '#streekList',

    // It's the first function called when this view it's instantiated.
    initialize: function(){
      _.bindAll(this, 'render');
      this.template = _.template(StreekListTemplate);

      // Call the initialize function of the extended BaseView
      BaseView.prototype.initialize.call(this);
    },

    addAll: function(){
      this.cleanupAll();

      for (var i = 0, collectionLength = this.collection.models.length; i < collectionLength; i++) {
        model = this.collection.models[i];
        this.addOne(model);
      };
    },

    addOne: function(item){
      var streekListItemView = new StreekListItemView({
        model: item
      });

      // Add the view instantiated above to the sub view array:
      this.addSubView(streekListItemView);

      // render the sub view and append it to this parent view's DOM element
      streekListItemView.render();
      this.$el.append(streekListItemView.el);
    },

    render: function(){
      var thisContext = this;

      this.$el.html(thisContext.template());
      this.addAll();
    },
  });

  return StreekListView;
});