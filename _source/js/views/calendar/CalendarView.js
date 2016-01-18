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

    render: function(){
      var thisContext = this;

      // New Data format, try this out:
      this.events = [
        {
          date: '2016-01-22',
          streak_name: 'No Beer',
          streak_slug: 'no-beer',
          streak_class: 'streak-start',
          streak_color: '#f03'
        },
        {
          date: '2016-01-23',
          streak_name: 'No Beer',
          streak_slug: 'no-beer',
          streak_class: 'streak-middle',
          streak_color: '#f03'
        },
        {
          date: '2016-01-24',
          streak_name: 'No Beer',
          streak_slug: 'no-beer',
          streak_class: 'streak-middle',
          streak_color: '#f03'
        },
        {
          date: '2016-01-25',
          streak_name: 'No Beer',
          streak_slug: 'no-beer',
          streak_class: 'streak-end',
          streak_color: '#f03'
        },
        {
          date: '2016-01-28',
          streak_name: 'Excercise',
          streak_slug: 'excercise',
          streak_class: 'streak-solo',
          streak_color: '#36f'
        }
      ];

      this.renderCalendar();
    },
  });

  return CalendarView;
});