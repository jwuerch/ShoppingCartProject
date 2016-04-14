import Ember from 'ember';

export default Ember.Route.extend({

  shoppingCart: Ember.inject.service(),
  model: function(params) {

    var walmartURL = 'http://api.walmartlabs.com/v1/search?query=' + params.product + '&format=json&apiKey=xekjrbwbrgm7822sk58zbxtg';
    var bestbuyURL = 'https://api.bestbuy.com/v1/products(search=' + params.product + ')?format=json&show=sku,name,salePrice,thumbnailImage&apiKey=8wd6evarbuf826pkknt76e39';
    var masterArray = [];
    //Models that we can use on results.hbs
    return Ember.RSVP.hash({
      bestBuy: Ember.$.getJSON(bestbuyURL).then(function(responseJSON) {
        console.log(responseJSON.products);
        masterArray.concat(responseJSON.products);
        return responseJSON.products;
      }),
      walMart: Ember.$.getJSON(walmartURL).then(function(response) {
        console.log(response.items)
        masterArray.concat(response.items);
        console.log(masterArray);
        return response.items;
      }),
      allMart: {

      }


    });
  },
  // model(params) {
  //
  //   var walmartURL = 'http://api.walmartlabs.com/v1/search?query=' + params.product + '&format=json&apiKey=xekjrbwbrgm7822sk58zbxtg';
  //   var bestbuyURL = 'https://api.bestbuy.com/v1/products(search=' + params.product + ')?format=json&show=sku,name,salePrice,thumbnailImage&apiKey=8wd6evarbuf826pkknt76e39';
  //   var masterArray = [];
  //   //Models that we can use on results.hbs
  //      Ember.$.getJSON(bestbuyURL).then(function(responseJSON) {
  //       console.log(responseJSON.products);
  //       masterArray.concat(responseJSON.products);
  //             return responseJSON.products;
  //
  //     })
  //     // Ember.$.getJSON(walmartURL).then(function(response) {
  //     //   console.log(response.items)
  //     //   masterArray.concat(response.items);
  //     //   console.log(masterArray);
  //     // }),
  //     return masterArray;
  // },
  actions: {
    saveProduct(product) {
      this.get('shoppingCart').add(product);
    },
    removeFromCart(product) {
      this.get('shoppingCart').remove(product);
    },
    newDiscuss(params) {
      var newDiscussion = this.store.createRecord('discuss', params);
      newDiscussion.save();
      this.transitionTo('product', newDiscussion)
    }
  }
});
