var VideoListEntryView = Backbone.View.extend({

  // just append each .video-list-entry element to
  // the .video-list container
  render: function() {
    this.$el.append(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
