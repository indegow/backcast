var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .video-list-entry-title': 'videoListClick'
  },

  videoListClick: function (event) {
    this.model.trigger('playVideo');
  },

  render: function() {
    this.$el.append(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
