var SearchView = Backbone.View.extend({
  // handle search submition
  events: {
    'click button': 'handleClick',
  },

  // render underscore template to .search element
  render: function () {
    this.$el.html(this.template());
    return this;
  },
  
  // call search method on model and pass in search value
  // from our input tag
  handleClick: function (event) {
    this.model.search('search', $('#search').val());
  },

  template: templateURL('src/templates/search.html')
});
