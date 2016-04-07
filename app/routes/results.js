import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  model: function(params) {

    //API Urls
    var walmartURL = 'http://api.walmartlabs.com/v1/search?query=' + params.product + '&format=json&facet=on&apiKey=xekjrbwbrgm7822sk58zbxtg';
    var bestbuyURL = 'https://api.bestbuy.com/v1/products(search=' + params.product + ')?format=json&show=sku,name,salePrice&apiKey=8wd6evarbuf826pkknt76e39';

    var store = this.store;
    //Saving to Database on each API call for BestBuy
    Ember.$.getJSON(bestbuyURL).then(function(responseJSON) {
       responseJSON.products.forEach(function(product) {
         var params1 = {
           name: product.name,
           salePrice: product.salePrice
         };
         var newProduct = store.createRecord('product', params1);
         newProduct.save();
       });
    });

    //Saving to Database on each API call for Walmart
    Ember.$.getJSON(walmartURL).then(function(responseJSON) {
       responseJSON.items.forEach(function(item) {
         var params1 = {
           name: item.name,
           salePrice: item.salePrice
         };
         var newProduct = store.createRecord('product', params1);
         newProduct.save();
       });
    });

    //Models that we can use on results.hbs
    return Ember.RSVP.hash({

      bestBuy: Ember.$.getJSON(bestbuyURL).then(function(responseJSON) {
        return responseJSON.products;
      }),
      walMart: Ember.$.getJSON(walmartURL).then(function(responseJSON) {
        return responseJSON.items;
      })
    });
  },
  actions: {
    saveProduct(product) {
      this.get('shoppingCart').add(product);
      var params1 = {
        name: product.name,
        salePrice: product.salePrice
      };
      var newProduct = this.store.createRecord('product', params1);
      newProduct.save();
    },
    removeFromCart(product) {
      this.get('shoppingCart').remove(product);
    }
  }
});
