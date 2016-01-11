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
      _.bindAll(this, 'render');

      // Call the initialize function of the extended BaseView
      BaseView.prototype.initialize.call(this);
    },

    render: function(){
      var thisContext = this;

      var streaks = [
        {
          end: '2016-01-08',
          start: '2016-01-04',
          title: 'Monday to Friday Event'
        }, {
          end: '2016-01-20',
          start: '2016-01-15',
          title: 'Another Long Event'
        }
      ];

      this.$el.clndr({
        template: CalendarTemplate,
        events: streaks,
        multiDayEvents: {
          endDate: 'end',
          startDate: 'start'
        },
        adjacentDaysChangeMonth: true,
        forceSixRows: true
      });
    },
  });

  return CalendarView;
});