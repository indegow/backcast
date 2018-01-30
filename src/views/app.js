var AppView = Backbone.View.extend({
  initialize: function (options) {


    // create an eventBus from Backbone's Events object
    this.eventBus = _.extend({}, Backbone.Events);

    // listen for playVideo events
    // and update our player with the videoId
    // given
    this.eventBus.on('playVideo', (videoId) => {
      // use videoId to select a video from the collection
      // that was clicked
      var player = 
        new VideoPlayerView({ el: '.player', model: this.collection.get(videoId), eventBus: this.eventBus });
      // var list = 
      //   new VideoListView({ el: '.list', collection: this.collection, eventBus: this.eventBus });
      player.render(); // re render
      // list.render();      
    });
  },


  el: '#app',

  render: function() {
    this.$el.html(''); // clear html in #app
    this.$el.append(this.template()); // append app template string (via underderscore template)

    // underscore template IN: object -> OUT: string
    var searchModel = new Search(); // new Search model

    // listen for updated search results
    // take each result and update the collection of Videos
    // then re render app
    searchModel.on('updatedSearchResults', (items) => {
      var videos = items.map((video) => new Video(video));
      this.collection.reset(videos);
      this.render(); // re render
    });


    // new search view on .search element
    var search = new SearchView({ el: '.search', model: searchModel });


    // new player view with shared event bus takes the first Video
    // from Videos by default
    var player = new VideoPlayerView({ el: '.player', model: this.collection.at(0), eventBus: this.eventBus });

    // new video list view with our collection
    // use our shared event bus to get video information after clicks
    var list = new VideoListView({ el: '.list', collection: this.collection, eventBus: this.eventBus });

    // render everything
    search.render();
    player.render();
    list.render();
    
  
    // this.$el.append(player.render());
    // this.$el.append(list.render());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
