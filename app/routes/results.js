import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = 'http://api.walmartlabs.com/v1/items?apiKey=xekjrbwbrgm7822sk58zbxtg&upc=035000521019';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.results);
    });
  }
});
