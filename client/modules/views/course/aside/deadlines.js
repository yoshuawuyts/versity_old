'use strict';

/**
 * View
 */

module.exports = React.createClass({
  displayName: 'deadlines',

  render: function() {
    return (
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
      )
    );
  }
});