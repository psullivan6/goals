require.config({
  paths: {
    backbone    : 'libs/backbone/backbone',
    clndr       : 'libs/clndr/clndr.min',
    jquery      : 'libs/jquery/dist/jquery.min',
    Modernizr   : 'libs/Modernizr/modernizr.custom',
    moment      : 'libs/moment/moment',
    owlCarousel : 'libs/owl.carousel/dist/owl.carousel',
    text        : 'libs/requirejs-text/text',
    underscore  : 'libs/underscore/underscore-min'
  },
  shim: {
    'clndr' : {
      deps:    ['jquery', 'moment'],
      exports: 'clndr'
    },
    'owlCarousel' : {
      deps : ['jquery'],
      exports : 'Owl'
    },
    'Modernizr' : {
      deps : ['jquery'],
      exports : 'Modernizr'
    }
  }
});

require([
  'backbone',
  'js/routes/main'
], function(Backbone,
            MainRouter){

  var mainRouter = new MainRouter();

  Backbone.history.start({pushState: true})
});