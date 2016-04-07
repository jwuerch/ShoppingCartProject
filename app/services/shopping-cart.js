import Ember from 'ember';

export default Ember.Service.extend({
  products: [],

  add(product) {
    this.get('products').pushObject(product);
  },
  remove(product) {
    var cart = this.get('products');
     cart = cart.filter(function(element) {
      if (element !== product) {
        console.log(element);
        return element;
      }
      console.log(cart);
    });
  }
});
