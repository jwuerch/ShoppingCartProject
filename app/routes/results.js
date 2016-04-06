import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://api.walmartlabs.com/v1/search?query=' + params.product + '&format=json&facet=on&apiKey=xekjrbwbrgm7822sk58zbxtg';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON);
      return(responseJSON.items);
    });
  },
  actions: {
    saveProduct(product) {
      var params1 = {
        name: product.name,
        salePrice: product.salePrice
      };
      console.log(params1);
      var newProduct = this.store.createRecord('product', params1);
      newProduct.save();
    }
  }
});
