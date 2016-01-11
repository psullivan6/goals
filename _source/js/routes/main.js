define([
  'backbone',
  '../views/calendar/CalendarView'
], function (Backbone, CalendarView){

  var MainRouter = Backbone.Router.extend({
    routes: {
      '': 'all',
      ':route': 'all',
      ':route/*parameters': 'all'
    },

    initialize: function () {
      _.bindAll(this, 'handleData');

      this.on('route:all', function (route, parameters) {
        this.handleData(route, parameters);
      });
    },

    handleData: function (route, parameters) {
      var thisContext = this;

      this.calendarView = new CalendarView({ page: route });
      this.calendarView.render();

      console.log('DATA', route, parameters);
    }
  });

  return MainRouter;
});