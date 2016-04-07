import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    emptyCart() {
      this.set('shoppingCart', []);
    }
  }
});
