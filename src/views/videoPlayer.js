var VideoPlayerView = Backbone.View.extend({
  initialize: function (options) {
    this.eventBus = options.eventBus;
  },

  render: function () {
    this.$el.html(this.template(this.model.attributes));
  },

  template: templateURL('src/templates/videoPlayer.html')
});
