var Search = Backbone.Model.extend({

  initializer: function () {
    this.on('all', (event) => console.log(event));
  },

  // get search results
  // then trigger updatedSearchResults with
  // our new list of videos from YT Data API
  // (not models yet)
  search: function (type, q) {
    var get = $.ajax({
      type: 'GET',
      url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${q}&key=AIzaSyA_CS6b4Xp5xUMkzBw6d1oghtKpyWXBiW8`
    });

    get.done((data) => {
      this.trigger('updatedSearchResults', data.items);
    });
  }
});