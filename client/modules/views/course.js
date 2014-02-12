'use strict';

/**
 * Module dependencies
 */

var asideComponent = require('./course/aside');
var mainComponent = require('./course/main');
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
            mainComponent(),
            asideComponent()
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