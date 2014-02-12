'use strict';

/**
 * View
 */

module.exports = React.createClass({
  displayName: 'home',

  clickHandler: function() {
    event.preventDefault();
    Backbone.history.navigate('/', true);
  },

  render: function() {
    return (
      React.DOM.a( {href:"/", onClick: this.clickHandler},
        React.DOM.div({role:"logo"}, "logo")
      )
    );
  }
});