'use strict';

/**
 * View
 */

module.exports = React.createClass({
  displayName: 'header',

  render: function() {
    return (
      React.DOM.header( {role:"course-header"}, 
        React.DOM.h1(null, "Super long course name"),
        React.DOM.p(null, 
          " A short description of whatever it is that this course aims to teach you. Now here's a link. - ",
          React.DOM.a( {href:"#"}, "http://versity.io")
        )
      )
    );
  }
});