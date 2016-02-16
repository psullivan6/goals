// #############################################################################
// DEPENDENCIES
// #############################################################################
var express  = require('express');
var mongoose = require('mongoose');
var router   = express.Router();
require('colors');


// #############################################################################
// CONNECT TO THE MONGO DATABASE
// #############################################################################
var DATABASE = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/boilerplate'; // Heroku influenced variable

mongoose.connect(DATABASE);

var database = mongoose.connection;
database.on('error', function (error) {
  console.error(error);
});
database.once('open', function () {
  console.log('Successful database connection'.brightGreen);
});


// #############################################################################
// CUSTOM MONGOOSE MODELS
// #############################################################################
var StreekModel      = require('../../api/models/StreekModel');
var StreekEventModel = require('../../api/models/StreekEventModel');


// #############################################################################
// HELPER FUNCTIONS
// #############################################################################
// courtesy https://gist.github.com/mathewbyrne/1280286
var slugify = function(text){
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

var handleError = function(error, response){
  console.log('ERROR', error);
  response.status(501).send('ERROR');
};


// #############################################################################
// API ROUTES
// #############################################################################

// middleware to use for all requests
router.use(function (request, response, next) {
  console.log(request.method.magenta, request.url);
  next(); // make sure we go to the next routes and don't stop here
});


router.route('/streeks')
  .get(function(request, response){

    StreekModel.find({}).sort({created: -1}).exec(function (error, streeks) {
      if (error) {
        handleError(error);
      } else {
        response.status(200).json(streeks);
      }
    });
  });

router.route('/streek')
  .post(function(request, response){
    var data = request.body;
    var streekModel = new StreekModel();

    streekModel.name = data.name;
    streekModel.slug = (typeof data.slug !== 'undefined') ? data.slug : slugify(data.name);
    streekModel.color = data.color;

    streekModel.save(function (error, streekModel) {
      if (error) {
        handleError(error);
      } else {
        console.log('SUCCESS'.brightGreen, 'Streek', streekModel._id, 'was created');
        response.status(200).json(streekModel);
      }
    });
  });

router.route('/streek/:id')
  .get(function(request, response){
    var streekID = request.params.id;

    StreekModel.findById(streekID).populate('events').exec(function (error, streekModel) {
      if (error) {
        handleError(error);
      } else {
        response.status(200).json(streekModel);
      }
    });
  })
  .post(function(request, response){
    var streekID = request.params.id;
    var streekEventData = request.body;

    StreekModel.findById(streekID, function (error, streekModel) {
      if (error) {
        handleError(error);
      } else {
        var streekEventModel = new StreekEventModel();

        streekEventModel.date = streekEventData.date;
        streekEventModel.class = streekEventData.class; // This should be set via the db find and sort

        streekEventModel.save(function(error, streekEventModel){
          if (error) {
            handleError(error);
          } else {
            console.log('FULL EVENT MODEL', streekEventModel);
            streekModel.events.push(streekEventModel._id);

            streekModel.save(function(error, streekModel){
              if (error) {
                handleError(error);
              } else {
                response.status(200).json(streekModel);
              }
            });
          }
        });
      }
    });
  });



router.route('/boilerplate')
  .get(function (request, response) {
    //find() here returns top-level populated item
    BoilerplateModel.find({}).populate('items').exec(function (error, boilerplate) {
      if (error) {
        response.send(error);
      } else {
        response.send(boilerplate);
      }
    });
  })
  .post(function (request, response) {
    var parameters  = request.body;
    var boilerplate = new BoilerplateModel();
    var itemsIDList = [];

    // Set the Boilerplate variables to their respective values
    if (parameters.items) {
      for (var i = 0; i < parameters.items.length; i++) {
        itemsIDList.push(parameters.items[i]._id);
      }
    }

    boilerplate.items = itemsIDList;
    boilerplate.label = parameters.label;
    boilerplate.name  = parameters.name;

    // Save the Carousel with its new attributes
    boilerplate.save(function (error) {
      if (error) {
        response.send(error);
      } else {
        response.json(boilerplate);
      }
    });
  });

router.route('/boilerplate/:id')
  .get(function (request, response) {
    BoilerplateModel.findById(request.params.id).populate('items').exec(function (error, boilerplate) {
      if (error) {
        response.send(error);
      } else {
        response.send(boilerplate);
      }
    });
  })
  .put(function (request, response) {
    var parameters = request.body;
    var itemsIDList = [];

    if (parameters.items) {
      for (var i = 0; i < parameters.items.length; i++) {
        itemsIDList.push(parameters.items[i]._id);
      }
    }

    var config = {
      label : parameters.label,
      name  : parameters.name,
      items : itemsIDList
    };

    BoilerplateModel.findByIdAndUpdate(request.parameters.id, config, function(error, result){
      if (error) {
        response.send(error);
      } else {
        response.json(result);
      }
    });
  });

module.exports = router;