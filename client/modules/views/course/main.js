'use strict';

/**
 * Module dependencies
 */

var headerComponent = require('./main/header');
var sectionComponent = require('./main/section');

/**
 * View
 */

module.exports = React.createClass({
  displayName: 'main',

  render: function() {
    return (
      React.DOM.div( {className:"size5of8"}, 
        headerComponent(),
        sectionComponent()
      )
    );
  }
});