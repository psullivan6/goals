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
            this.getHexValue('000021');
          }
        } else {
          this.getHexValue('000003');
        }

        this.colorList.push(this.colorValue);
      }
    },

    render: function(){
      var thisContext = this;

      // [TODO] Do this recursively in a function
      this.loopHexData(36);
      this.colorValue = '000300';
      this.loopHexData(36);
      this.colorValue = '000600';
      this.loopHexData(36);
      this.colorValue = '000900';
      this.loopHexData(36);
      this.colorValue = '000c00';
      this.loopHexData(36);
      this.colorValue = '000f00';
      this.loopHexData(36);

      this.colorValue = '003000';
      this.loopHexData(36);
      this.colorValue = '006000';
      this.loopHexData(36);
      this.colorValue = '009000';
      this.loopHexData(36);
      this.colorValue = '00c000';
      this.loopHexData(36);
      this.colorValue = '00f000';
      this.loopHexData(36);

      this.colorValue = '003300';
      this.loopHexData(36);
      this.colorValue = '006300';
      this.loopHexData(36);
      this.colorValue = '009300';
      this.loopHexData(36);
      this.colorValue = '00c300';
      this.loopHexData(36);
      this.colorValue = '00f300';
      this.loopHexData(36);

      this.colorValue = '030000';
      this.loopHexData(36);
      this.colorValue = '060000';
      this.loopHexData(36);
      this.colorValue = '090000';
      this.loopHexData(36);
      this.colorValue = '0c0000';
      this.loopHexData(36);
      this.colorValue = '0f0000';
      this.loopHexData(36);

      this.colorValue = '300000';
      this.loopHexData(36);
      this.colorValue = '600000';
      this.loopHexData(36);
      this.colorValue = '900000';
      this.loopHexData(36);
      this.colorValue = 'c00000';
      this.loopHexData(36);
      this.colorValue = 'f00000';
      this.loopHexData(36);

      this.$el.html(thisContext.template({ colorList: this.colorList}));
    },
  });

  return StyleguideView;
});