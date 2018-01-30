var VideoListView = Backbone.View.extend({
  // share the event bus
  initialize: function (options) {
    this.eventBus = options.eventBus;
  },

  // listen for click events on videos
  events: {
    'click .video-list-entry': 'videoListClick'
  },

  // called when specific video is clicked
  videoListClick: function (event) {
    // get our video id from the parent element .video-list-entry
    // pass that id to our trigger playVideo event
    var id = $(event.target).parents('.video-list-entry').data('id').slice(6);
    this.eventBus.trigger('playVideo', id);
  },

  // detach previous children (clear them)
  // attach list template to .video-list element
  // then for each Video in Videos create a video list element
  // then render them immediately
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.each((model) => {
      new VideoListEntryView({ el: '.video-list', model: model }).render();
    });

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
