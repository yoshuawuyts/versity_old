'use strict';

/**
 * Module dependencies
 */

var menuComponent = require('./menu/menu');

/**
 * View
 */

var course = React.createClass({
  displayName: 'course',
  
  render: function() {
    return (
      React.DOM.div( {className: 'row'},
        menuComponent(),
        React.DOM.div({className: '6of8'},
          React.DOM.h1(null, 'How to bake bread'),
          React.DOM.h3(null, 'An essay on good dough and fine bakery'),
          React.DOM.p(null, 'Lorem ipsum dolor sit amet')
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