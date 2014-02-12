'use strict';

/**
 * Module dependencies
 */

var searchComponent = require('./buttons/search');
var logoComponent = require('./buttons/logo');
var userComponent = require('./buttons/user');
var newComponent = require('./buttons/new');

/**
 * View
 */

module.exports = React.createClass({
  displayName: 'menu',

  render: function() {
    return (
      React.DOM.menu({className: 'bgshade3'},
        logoComponent(),
        React.DOM.ul( null,
          userComponent(),
          newComponent(),
          searchComponent(),
          React.DOM.li(null,
            React.DOM.div(null)
          )
        )
      )
    );
  }
});