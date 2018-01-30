var SearchView = Backbone.View.extend({
  events: {
    'click button': 'handleClick',
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  handleClick: function (event) {
    this.model.search('search', $('#search').val());
  },

  template: templateURL('src/templates/search.html')
});
