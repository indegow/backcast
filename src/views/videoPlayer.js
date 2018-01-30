var VideoPlayerView = Backbone.View.extend({
  // make sure we have access to the event bus
  initialize: function (options) {
    this.eventBus = options.eventBus;
  },

  // render to .player element using underscore template
  // this.model.attributes -> just an object
  render: function () {
    this.$el.html(this.template(this.model.attributes));
  },

  template: templateURL('src/templates/videoPlayer.html')
});
