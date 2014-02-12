'use strict';

/**
 * View
 */

module.exports = React.createClass({
  displayName: 'teach component',

  clickHandler: function() {
    event.preventDefault();
    Backbone.history.navigate('/:yoshuawuyts/:course', true);
  },

  render: function() {
    return (
      React.DOM.div({className: 'home-component bgshade3 size1of1'}, 
        React.DOM.div({className: 'row'},
          React.DOM.a({className: 'size7of8', href: 'course', onClick: this.clickHandler},
            React.DOM.h5({className: 'white'}, 'Insitution'),
            React.DOM.h3({className: 'white'}, 'Course Name')
          ),
          React.DOM.div({className: 'size1of8 home-teach-button bgshade2'})
        )
      )
    );
  }
});