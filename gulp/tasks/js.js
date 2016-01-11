var config       = require('../config');
var gulp         = require('gulp');
var handleErrors = require('../helper/handleErrors');
var requirejs    = require('requirejs');

var requireConfig = {
  baseUrl: '_source',
  paths: {
    backbone    : 'libs/backbone/backbone',
    clndr       : 'libs/clndr/src/clndr',
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
  },
  name: 'main',
  out:  'release/main.js'
};

gulp.task('js', function(callback){
  requirejs.optimize(requireConfig, function(){
    return callback();
  }, function(error) {
    handleErrors(error);
  });
});