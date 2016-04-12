import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  model: function(params) {

    //API Urls
    var walmartURL = 'http://api.walmartlabs.com/v1/search?query=' + params.product + '&format=json&apiKey=xekjrbwbrgm7822sk58zbxtg';
    var bestbuyURL = 'https://api.bestbuy.com/v1/products(search=' + params.product + ')?format=json&show=sku,name,salePrice,thumbnailImage&apiKey=8wd6evarbuf826pkknt76e39';
    //Models that we can use on results.hbs
    return Ember.RSVP.hash({
      bestBuy: Ember.$.getJSON(bestbuyURL).then(function(responseJSON) {
        console.log(responseJSON.products);
        return responseJSON.products;
      }),
      walMart: Ember.$.getJSON(walmartURL).then(function(responseJSON) {
        console.log(responseJSON.items[0].imageEntities[0].thumbnailImage);
        return responseJSON.items;
      }),
    });
  },
  actions: {
    saveProduct(product) {
      this.get('shoppingCart').add(product);
    },
    removeFromCart(product) {
      this.get('shoppingCart').remove(product);
    }
  }
});
