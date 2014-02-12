'use strict'; 

/**
 * Module dependencies
 */

var settings = require('./views/settings');
var course = require('./views/course');
var login = require('./views/login');
var home = require('./views/home');
var unit = require('./views/unit');

/**
 * Routes
 */ 

var Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'login': 'login',
    'settings': 'settings',
    ':user': 'user',
    ':user/:course': 'course',
    ':user/:course/:unit': 'unit'
  },
  home: function() { home(); },
  login: function() { login(); },
  settings: function() { setings(); },
  user: function() { user(); },
  course: function() { course(); },
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
