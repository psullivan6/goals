define([
  'jquery',
  'underscore',
  '../BaseView',
  'text!templates/styleguide/StyleguideTemplate.html'
], function($, _, BaseView,
            StyleguideTemplate){

  var StyleguideView = BaseView.extend({
    el: 'body',

    // It's the first function called when this view it's instantiated.
    initialize: function(){
      _.bindAll(this, 'render');
      this.template = _.template(StyleguideTemplate);

      this.colorValue = '000000';
      this.colorList = [];
      this.colorAdders = ['3', '6', '9', 'c', 'f'];

      // Call the initialize function of the extended BaseView
      BaseView.prototype.initialize.call(this);
    },

    getHexValue: function(additiveColor){
      var newHexColor = (parseInt(this.colorValue, 16) + parseInt(additiveColor, 16)).toString(16);
      while (newHexColor.length < 6) { newHexColor = '0' + newHexColor; } // Zero pad.
      this.colorValue = newHexColor;
    },

    loopHexData: function(loopCount){
      for (var i = 0; i < loopCount; i++) {

        if (i % 6 === 0) {
          if (i !== 0) {

            if (i % 36 === 0) {
              if (i % 216 === 0) {
                if (i % 1296 === 0) {
                  if (i % 7776 === 0) {
                    this.getHexValue('200001');
                  } else {
                    this.getHexValue('020001');
                  }
                } else {
                  this.getHexValue('002001');
                }
              } else {
                this.getHexValue('000201');
              }
            } else {
              this.getHexValue('000021');
            }
          }
        } else {
          this.getHexValue('000003');
        }

        this.colorList.push(this.colorValue);
      }
    },

    render: function(){
      var thisContext = this;

      this.loopHexData(46656);
      // this.loopHexData(108);

      this.$el.html(thisContext.template({ colorList: this.colorList}));
    },
  });

  return StyleguideView;
});