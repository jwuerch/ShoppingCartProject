import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    emptyCart() {
      this.set('shoppingCart', []);
    },
    removeFromCart(product) {
      this.sendAction('removeFromCart', product);
    }
  }
});
