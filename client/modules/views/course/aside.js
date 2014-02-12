'use strict';

/**
 * Module dependencies
 */

var deadlinesComponent = require('./aside/deadlines');
var archiveComponent = require('./aside/archive');
var aboutComponent = require('./aside/about');

/**
 * View
 */

module.exports = React.createClass({
  displayName: 'aside',

  render: function() {
    return (
      React.DOM.aside( {className:"size3of8"},
        aboutComponent(),
        deadlinesComponent(),
        archiveComponent()
      )
    );
  }
});