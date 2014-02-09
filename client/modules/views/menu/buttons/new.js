'use strict';

/**
 * View
 */

module.exports = React.createClass({
  displayName: 'componentName',

  render: function() {
    return (
      React.DOM.li(null,
        React.DOM.a( {href:"#"},
          React.DOM.button( {className:"size1of1", role:"menu-item"}, "New Course")
        )
      )
    );
  }
});