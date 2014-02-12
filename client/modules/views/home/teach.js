'use strict';

/**
 * Module dependencies
 */

var courseComponent = require('./learn/component')
var chartComponent = require('./learn/chart');

/**
 * View
 */

module.exports = React.createClass({
  displayName: 'teach',

  render: function() {
    return (
      React.DOM.div({className: 'size1of2'},
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