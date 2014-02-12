'use strict';

/**
 * Module dependencies
 */

var learnComponent = require('./home/learn');
var teachComponent = require('./home/teach');
var menuComponent = require('./menu/menu');

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
          React.DOM.div({className: 'row'},
            learnComponent(),
            teachComponent()
          )
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