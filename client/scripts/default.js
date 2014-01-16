window.Application = (function () {
  var CourseModel = Backbone.Model.extend({
    defaults: {
      id: 0,
      name: "",
      institute: 0,
      date: {
        start: new Date(),
        end: new Date()
      },
      creator: 0
    }
  });

  var CourseCollection = Backbone.Collection.extend({
    model: CourseModel
  });

  var CourseView = Backbone.View.extend({
    target: document.body,

    template: React.createClass({
      render: function () {
        return React.DOM.a({
          href: "#"
        }, courseCollection.models[0].get("name"));
      }
    }),

    initialize: function () {
      this.render();
    },

    render: function () {
      React.renderComponent(this.template({}), this.target);

      return this;
    }
  });

  var courseModel = new CourseModel({
    id: 1,
    name: "Introduction To Programming",
    institute: 1
  });

  var courseCollection = new CourseCollection([courseModel]);

  var courseView = new CourseView({});
})();
