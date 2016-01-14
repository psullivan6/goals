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
      _.bindAll(this, 'render', 'handleMonthChange');

      this.currentMonthOffset = 0;

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

    render: function(){
      var thisContext = this;

      var streaks = [
        {
          date: '2016-01-19',
          title: 'CLNDR GitHub Page Finished',
          url: 'http://github.com/kylestetz/CLNDR',
          goal: 'goal-one'
        },
        {
          date: '2016-01-19',
          title: '2 CLNDR GitHub Page Finished',
          url: 'http://github.com/kylestetz/CLNDR',
          goal: 'goal-two'
        },
        {
          date: '2016-01-19',
          title: '2 CLNDR GitHub Page Finished',
          url: 'http://github.com/kylestetz/CLNDR',
          goal: 'goal-four'
        }
      ];

      this.$el.clndr({
        template: CalendarTemplate,
        events: streaks,
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
  });

  return CalendarView;
});