module.exports = Backbone.Model.extend({
  defaults: {
    id: 0,
    name: "",
    description: "",
    institute: 0,
    date: {
      start: new Date(),
      end: new Date()
    },
    creator: 0
  }
});
