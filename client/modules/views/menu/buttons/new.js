'use strict';

/**
 * View
 */

module.exports = React.createClass({
  displayName: 'componentName',

  clickHandler: function() {
    event.preventDefault();
    Backbone.history.navigate('/new', true);
  },

  render: function() {
    return (
      React.DOM.li(null,
        React.DOM.a( {href:"/new", onClick: this.clickHandler},
          React.DOM.button( {className:"size1of1", role:"menu-item"}, "New Course")
        )
      )
    );
  }
});