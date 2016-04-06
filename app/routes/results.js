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
    saveProduct() {
      var params = {
        name: this.get('name') ? this.get('name') : "",
        salePrice: this.get('salePrice') ? this.get('salePrice') : ""
      }
      console.log(this.get('name'));
      console.log(this.get('salePrice'));
      var newProduct = this.store.createRecord('product', params);
      newProduct.save();
    }
  }
});
