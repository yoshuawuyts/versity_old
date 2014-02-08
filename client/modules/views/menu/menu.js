'use strict';

/**
 * Module dependencies
 */

/**
 * View
 */

module.exports = React.createClass({
  displayName: 'menu',

  render: function() {
    return (
      React.DOM.menu({className: "size1of8 left"},
        React.DOM.div( {className:"size1of1 pl",  role:"logo"}, "logo"),
        React.DOM.ul( {className:"pl"},
          React.DOM.li(null,
            React.DOM.a( {href:"#"},
              React.DOM.button( {className:"size1of1", role:"menu-item"}, "Yoshua Wuyts")
            )
          ),
          React.DOM.li(null,
            React.DOM.a( {href:"#"},
              React.DOM.button( {className:"size1of1", role:"menu-item"}, "New Course")
            )
          ),
          React.DOM.li(null,
            React.DOM.a( {href:"#"},
              React.DOM.button( {className:"size1of1", role:"menu-item"}, "Learn")
            )
          ),
          React.DOM.li(null,
            React.DOM.a( {href:"#"},
              React.DOM.button( {className:"size1of1", role:"menu-item"}, "Teach")
            )
          ),
          React.DOM.li(null,
            React.DOM.a( {href:"#"},
              React.DOM.button( {className:"size1of1", role:"menu-item"}, "Search")
            )
          ),
          React.DOM.li(null,
            React.DOM.div( {className:"size1of1 bgshade5 notification-canvas"})
          )
        )
      )
    );
  }
});