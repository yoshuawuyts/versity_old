'use strict';

/**
 * Module dependencies
 */

var course = require('./views/course');
var unit = require('./views/unit');

/**
 * Routes
 */ 

var Router = Backbone.Router.extend({
  routes: {
    '': 'course',
    ':user/:course/:unit': 'unit'
  },
  course: function() {
    console.log('course');
    course();
  },
  unit: function() {
    console.log('unit'); 
    unit();
  }
});

/**
 * Init router
 */

var router = new Router();

/**
 * Options
 */

Backbone.history.start({
  pushState: true
});
