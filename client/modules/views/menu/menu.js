'use strict';

/**
 * Module dependencies
 */

var logoComponent = require('./buttons/logo');
var learnComponent = require('./buttons/learn');
var newComponent = require('./buttons/new');
var searchComponent = require('./buttons/search');
var teachComponent = require('./buttons/teach');
var userComponent = require('./buttons/user');

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
          learnComponent(),
          teachComponent(),
          searchComponent(),
          React.DOM.li(null,
            React.DOM.div(null)
          )
        )
      )
    );
  }
});