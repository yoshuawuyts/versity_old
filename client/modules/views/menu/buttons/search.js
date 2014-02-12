'use strict';

/**
 * View
 */

module.exports = React.createClass({
  displayName: 'componentName',

  clickHandler: function() {
    event.preventDefault();
    Backbone.history.navigate('/search', true);
  },

  render: function() {
    return (
      React.DOM.li(null,
        React.DOM.a( {href:"/search", onClick: this.clickHandler},
          React.DOM.button( {className:"size1of1", role:"menu-item"}, "Search")
        )
      )
    );
  }
});