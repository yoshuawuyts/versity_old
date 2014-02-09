'use strict';

/**
 * View
 */

module.exports = React.createClass({
  displayName: 'about',

  render: function() {
    return (
      React.DOM.div( {className:"size1of1 bgshade5 pr", role:"aside-object"}, 
        React.DOM.h3(null, "About"),
        React.DOM.ul(null, 
          React.DOM.li(null, "Your professor is James Anderson"),
          React.DOM.li(null, "From Dec 14 - Dec 21"),
          React.DOM.li(null, "Amsterdam University - Science Park"),
          React.DOM.li(null, "412 students enrolled")
        )
      )
    );
  }
});