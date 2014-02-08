var course = React.createClass({displayName: 'Course',
  render: function() {
    return React.DOM.div( {className:"row"}, 
    React.DOM.menu( {className:"size1of8 left"}, 
      React.DOM.div( {className:"pl size1of1\" ",  role:"logo"}, 
        "logo"
      ),
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
    ),
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
    ),
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

React.renderComponent(course(), document.getElementById('root'));
