'use strict';

/**
 * Module dependencies
 */

var courseComponent = require('./teach/component')

/**
 * View
 */

module.exports = React.createClass({
  displayName: 'teach',

  render: function() {
    return (
      React.DOM.div({className: 'size1of2 teach'},
        courseComponent(),
        courseComponent(),
        courseComponent(),
        courseComponent(),
        courseComponent(),
        courseComponent()
      )
    );
  }
});