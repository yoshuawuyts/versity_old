'use strict';

/**
 * Module dependencies
 */

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
      React.DOM.menu({className: "size1of8 left"},
        React.DOM.div( {className:"size1of1 pl",  role:"logo"}, "logo"),
        React.DOM.ul( {className:"pl"},
          userComponent(),
          newComponent(),
          learnComponent(),
          teachComponent(),
          searchComponent(),
          React.DOM.li(null,
            React.DOM.div( {className:"size1of1 bgshade5 notification-canvas"})
          )
        )
      )
    );
  }
});