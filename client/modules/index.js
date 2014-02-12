'use strict';

/**
 * Module dependencies
 */

var course = require('./views/course');
var home = require('./views/home');
var unit = require('./views/unit');

/**
 * Routes
 */ 

var Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    '/login': 'login',
    '/settings': 'settings',
    ':user': 'user',
    ':user/:course': 'course',
    ':user/:course/:unit': 'unit'
  },
  home: function() { unit(); },
  login: function() {},
  settings: function() {},
  user: function() {},
  course: function() { unit(); },
  unit: function() { unit(); }
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
