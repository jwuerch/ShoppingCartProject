import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    emptyCart() {
      this.get('shoppingCart').empty();
    },
    removeFromCart(index) {
      this.get('shoppingCart').remove(index);
    }
  }
});
