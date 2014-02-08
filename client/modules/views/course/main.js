'use strict';

/**
 * Module dependencies
 */

/**
 * View
 */

module.exports = React.createClass({
  displayName: 'main',

  render: function() {
    return (
      React.DOM.div( {className:"size5of8"}, 
        React.DOM.header( {role:"course-header"}, 
          React.DOM.h1(null, "Super long course name"),
          React.DOM.p(null, 
            " A short description of whatever it is that this course aims to teach you. Now here's a link. - " ,
            React.DOM.a( {href:"#"}, "http://versity.io")
          )
        ),
        React.DOM.section(null, 
          React.DOM.header(null, 
            React.DOM.h3( {role:"section-header"}, "Objects 1")
          ),
          React.DOM.object( {className:"row", role:"chapter"}, 
            React.DOM.a( {href:"#", className:"size1of8  pr", role:"chapter-button"}, 
              React.DOM.button( {className:"size1of1 bgshade6 shade6"}, 
              " item "
              )
            ),
            React.DOM.div( {className:"size7of8 bgshade5"}, 
              React.DOM.h3(null, "23. Super callifragelistic chapter title " ),
              React.DOM.p(null, "Lorem ipsum dolor sit amet " )
            )
          )
        )
      )
    );
  }
});