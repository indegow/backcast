var VideoPlayerView = Backbone.View.extend({
  render: function () {
    this.$el.html(this.template(this.model.attributes));
  },

  template: templateURL('src/templates/videoPlayer.html')
});
