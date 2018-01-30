var AppView = Backbone.View.extend({
  initialize: function (options) {
    this.eventBus = _.extend({}, Backbone.Events);

    this.eventBus.on('playVideo', (videoId) => {
      var player = 
        new VideoPlayerView({ el: '.player', model: this.collection.get(videoId), eventBus: this.eventBus });
      // var list = 
      //   new VideoListView({ el: '.list', collection: this.collection, eventBus: this.eventBus });
      player.render();
      // list.render();      
    });
  },


  el: '#app',

  render: function() {
    
    // var first = this.videos.at(0);
    // var player = new VideoPlayerView();
    // var list = new VideoListView();

    // var listEntiries = 
    // this.videos.reduce(function (acc, model) {
    //   return acc + new VideoListEntryView().template({
    //     id: model.get('id'),
    //     title: model.get('title'),
    //     desc: model.get('desc')
    //   });
    // }, '');

    // this.$el.html(this.template({
    //   // search: search.template(),
    //   player: player.template({
    //     id: first.get('id'),
    //     title: first.get('title'),
    //     desc: first.get('desc')
    //   }),
    //   videoList: list.template({ videoList: listEntiries })
    // }));

    
    this.$el.html('');
    this.$el.append(this.template());
    var searchModel = new Search();
    searchModel.on('updatedSearchResults', (items) => {
      var videos = items.map((video) => new Video(video));
      this.collection.reset(videos);
      this.render();
    });


    var search = new SearchView({ el: '.search', model: searchModel });
    var player = new VideoPlayerView({ el: '.player', model: this.collection.at(0), eventBus: this.eventBus });
    var list = new VideoListView({ el: '.list', collection: this.collection, eventBus: this.eventBus });
    search.render();
    player.render();
    list.render();
    
  
    // this.$el.append(player.render());
    // this.$el.append(list.render());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
