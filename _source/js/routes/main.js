define([
  'backbone',
  '../collections/StreeksCollection',
  '../views/calendar/CalendarView',
  '../views/list/StreekListView'
], function (Backbone,
             StreeksCollection,
             CalendarView,
             StreekListView){

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

      this.streeksCollection = new StreeksCollection();
      this.streeksCollection.fetch({ success: function(collection){
        thisContext.setCalendarView(collection);
        thisContext.setStreeksView(collection);
      }});
    },

    setCalendarView: function(streeksCollection){
      this.calendarView = new CalendarView({ collection: streeksCollection});
      this.calendarView.render();
    },

    setStreeksView: function(streeksCollection){
      this.streekListView = new StreekListView({
        collection: streeksCollection
      });
      this.streekListView.render();
    }
  });

  return MainRouter;
});