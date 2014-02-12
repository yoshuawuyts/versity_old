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
  displayName: 'learn',

  render: function() {
    return (
      React.DOM.div({className: 'size1of2'},
        chartComponent(),
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