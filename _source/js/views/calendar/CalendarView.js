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
          start: '2015-12-28',
          end:   '2016-01-06',
          title: 'Monday to Friday Event',
          goal:  'goal-one'
        },
        {
          start: '2016-01-15',
          end:   '2016-01-20',
          title: 'Another Long Event',
          goal:  'goal-two'
        },
        {
          start: '2016-01-18',
          end:   '2016-01-24',
          title: 'Another Long Event',
          goal:  'goal-one'
        },
        {
          start: '2016-01-17',
          end:   '2016-01-21',
          title: 'Another Long Event',
          goal:  'goal-three'
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