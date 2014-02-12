'use strict';

/**
 * View
 */

module.exports = React.createClass({
  displayName: 'section',

  render: function() {
    return (
      React.DOM.div({className: 'home-component bgshade3 size1of1'}, 
        React.DOM.h5({className: 'white'}, 'Author name'),
        React.DOM.h3({className: 'white'}, 'Insanely long course title'), 
        React.DOM.progress({className: 'white', max: '100', value: '60'})
      )
    );
  }
});