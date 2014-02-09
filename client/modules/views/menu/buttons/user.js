'use strict';

/**
 * View
 */

module.exports = React.createClass({
  displayName: 'componentName',

  clickHandler: function() {
    console.log("I've been clicked!");
    event.preventDefault();
    Backbone.history.navigate('/yoshuawuyts/programming/12', true);
  },

  render: function() {
    return (
      React.DOM.li(null,
        React.DOM.a( {href:"yoshuawuyts/programming/12", onClick: this.clickHandler},
          React.DOM.button( {className:"size1of1", role:"menu-item"}, "Yoshua Wuyts")
        )
      )
    );
  }
});