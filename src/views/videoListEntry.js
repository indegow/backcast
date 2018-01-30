var VideoListEntryView = Backbone.View.extend({

  initialize: function (options) {
    this.eventBus = options.eventBus;
  },

  render: function() {
    this.$el.append(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
