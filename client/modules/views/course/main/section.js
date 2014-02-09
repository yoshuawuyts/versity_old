'use strict';

/**
 * View
 */

module.exports = React.createClass({
  displayName: 'section',

  render: function() {
    return (
      React.DOM.ol(null,
        React.DOM.li(null,
          React.DOM.header(null,
            React.DOM.h3( {role:"section-header"}, "Objects 1")
          ),
          React.DOM.ol(null,
            React.DOM.li({className:"row", role:"chapter"},
              React.DOM.a( {href:"#", className:"size1of8  pr", role:"chapter-button"}, 
                React.DOM.button( {className:"size1of1 bgshade6 shade6"}, "item")
              ),
              React.DOM.div( {className:"size7of8 bgshade5"}, 
                React.DOM.h3(null, "23. Super callifragelistic chapter title " ),
                React.DOM.p(null, "Lorem ipsum dolor sit amet " )
              )
            )
          )
        )
      )
    );
  }
});