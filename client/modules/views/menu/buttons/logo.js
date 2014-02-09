'use strict';

/**
 * View
 */

module.exports = React.createClass({
  displayName: 'home',

  clickHandler: function() {
    console.log("I've been clicked!");
    event.preventDefault();
    Backbone.history.navigate('/', true);
  },

  render: function() {
    return (
      React.DOM.a( {href:"/", onClick: this.clickHandler},
        React.DOM.div( {className:"size1of1 pl",  role:"logo"}, "logo")
      )
    );
  }
});