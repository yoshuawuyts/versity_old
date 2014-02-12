'use strict';

/**
 * Module dependencies
 */

var menuComponent = require('./menu/menu');
var learnComponent = require('./home/learn');
var teachComponent = require('./home/teach');

/**
 * View
 */

var course = React.createClass({
  displayName: 'course',
  
  render: function() {
    return (
      React.DOM.div( null,
        menuComponent(),
        React.DOM.div ({className: 'container grid'},
          learnComponent(),
          teachComponent()
        )
      )
    );
  }
});

/**
 * Render
 */

module.exports = function() {
  React.renderComponent(course(), document.getElementById('root'));
};