var VideoListView = Backbone.View.extend({
  initialize: function (options) {
    this.eventBus = options.eventBus;
  },

  events: {
    'click .video-list-entry': 'videoListClick'
  },

  videoListClick: function (event) {
    var id = $(event.target).parents('.video-list-entry').data('id').slice(6);
    this.eventBus.trigger('playVideo', id);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.each((model) => {
      new VideoListEntryView({ el: '.video-list', model: model, eventBus: this.eventBus }).render();
    });

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
