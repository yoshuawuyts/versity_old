'use strict';

/**
 * Module dependencies
 */

var koa = require('koa');
var compress = require('koa-compress');
var logger = require('koa-logger');
var send = require('koa-send');
var responseTime = require('koa-response-time');
var Router = require('koa-router');
var mount = require('koa-mount');

/**
 * Environment
 */

var env = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 1337;

/**
 * Initialise application
 */

var app = koa();

/**
 * Middleware
 */

if (env != 'test') app.use(logger());
app.use(responseTime());
app.use(compress());

/**
 * Router
 */

var router = new Router();
/*
router.get('/', function *() {
  yield send(this, 'index.html', {
    root: __dirname + '/../build'
  });
});
*/
router.get('/*', function *() {
  yield send(this, this.path, {
    root: __dirname + '/../build'
  });
});

app.use(mount('', router.middleware()));

/**
 * Start listening
 */

app.listen(port);
console.log("Port: " + port);
console.log("Environment: " + env);



//  Object.keys(this).forEach(function (element, index, array) {
//    console.log(element);
//  });
