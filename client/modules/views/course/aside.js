'use strict';

/**
 * Module dependencies
 */

/**
 * View
 */

module.exports = React.createClass({
  displayName: 'aside',

  render: function() {
    return (
      React.DOM.aside( {className:"size2of8"},
        React.DOM.div( {className:"size1of1 bgshade5 pr", role:"aside-object"}, 
          React.DOM.h3(null, "About"),
          React.DOM.ul(null, 
            React.DOM.li(null, "Your professor is James Anderson"),
            React.DOM.li(null, "From Dec 14 - Dec 21"),
            React.DOM.li(null, "Amsterdam University - Science Park"),
            React.DOM.li(null, "412 students enrolled")
          )
        ),
        React.DOM.div( {className:"size1of1 bgshade5", role:"aside-object"}, 
          React.DOM.h3(null, "Deadlines"),
          React.DOM.ul(null, 
            React.DOM.li( {className:"row"}, 
              React.DOM.button( {className:"size2of3 bgshade5"}, "14. Submit draft"),
              React.DOM.button( {className:"size1of3 bgshade5"}, "15/8")
            ),
            React.DOM.li( {className:"row"}, 
              React.DOM.button( {className:"size2of3 bgshade5"}, "14. Submit draft"),
              React.DOM.button( {className:"size1of3 bgshade5"}, "15/8")
            ),
            React.DOM.li( {className:"row"}, 
              React.DOM.button( {className:"size2of3 bgshade5"}, "14. Submit draft"),
              React.DOM.button( {className:"size1of3 bgshade5"}, "15/8")
            ),
            React.DOM.li( {className:"row"}, 
              React.DOM.button( {className:"size2of3 bgshade5"}, "14. Submit draft"),
              React.DOM.button( {className:"size1of3 bgshade5"}, "15/8")
            )
          )
        ),
        React.DOM.button( {className:"size1of1"}, "Archive")
      )
    );
  }
});
