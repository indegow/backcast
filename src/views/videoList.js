var VideoListView = Backbone.View.extend({
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.each(function (model) {
      new VideoListEntryView({ el: '.video-list', model: model }).render();
    });

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
