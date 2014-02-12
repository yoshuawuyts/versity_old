'use strict';

/**
 * View
 */

module.exports = React.createClass({
  displayName: 'componentName',

  clickHandler: function() {
    event.preventDefault();
    Backbone.history.navigate('/yoshuawuyts', true);
  },

  render: function() {
    return (
      React.DOM.li(null,
        React.DOM.a( {href:"yoshuawuyts", onClick: this.clickHandler},
          React.DOM.button( {className:"size1of1", role:"menu-item"}, "Yoshua Wuyts")
        )
      )
    );
  }
});