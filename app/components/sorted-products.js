import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  sortBy: ['salePrice:asc'],
  sortedProducts: Ember.computed.sort('model', 'sortBy'),
  actions: {
    newDiscuss(discussionParams) {
      this.sendAction('newDiscuss', discussionParams);
    },
    saveProduct(product) {
      this.get('shoppingCart').add(product);
    }
  }
});
