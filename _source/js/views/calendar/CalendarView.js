define([
  'jquery',
  'underscore',
  'clndr',
  'moment',
  '../BaseView',
  'text!templates/calendar/CalendarTemplate.html'
], function($, _, clndr, moment, BaseView,
            CalendarTemplate){

  var CalendarView = BaseView.extend({
    el: '#calendar',

    // It's the first function called when this view it's instantiated.
    initialize: function(){
      _.bindAll(this, 'render', 'handleMonthChange', 'renderCalendar');

      this.currentMonthOffset = 0;
      this.events = [];

      // Call the initialize function of the extended BaseView
      BaseView.prototype.initialize.call(this);
    },

    handleMonthChange: function(options){
      var month = options.month;
      var monthOffset = options.currentOffset;

      this.currentMonthOffset += monthOffset;

      if (this.currentMonthOffset === 0) {
        console.log('CURRENT MONTH');
      } else if (this.currentMonthOffset > 0){
        console.log('NEXT MONTHS');
      } else {
        console.log('PREVIOUS MONTHS');
      }
    },

    renderCalendar: function(){
      var thisContext = this;

      this.$el.clndr({
        template: CalendarTemplate,
        events: thisContext.events,
        adjacentDaysChangeMonth: true,
        forceSixRows: true,
        clickEvents: {
          nextMonth: function(month){
            thisContext.handleMonthChange({ month: month, currentOffset: 1 });
          },
          previousMonth: function(month){
            thisContext.handleMonthChange({ month: month, currentOffset: -1 });
          },
        }
      });
    },

    handleStreekData: function(){
      for (var i = 0, collectionLength = this.collection.models.length; i < collectionLength; i++) {
        streekModel = this.collection.models[i];
        this.handleEventData(streekModel.get('events'));
      }
    },

    handleEventData: function(eventsCollection){
      for (var i = 0, collectionLength = eventsCollection.models.length; i < collectionLength; i++) {
        eventModel = eventsCollection.models[i];
        this.events.push(eventModel.attributes);
      }
    },

    render: function(){
      var thisContext = this;

      // [TODO] DO the event aggregation on the server
      this.handleStreekData();
      this.renderCalendar();
    },
  });

  return CalendarView;
});