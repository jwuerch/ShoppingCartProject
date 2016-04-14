import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  master: Ember.computed('model.bestBuy', 'model.walMart', function () {
    return this.get('model.bestBuy').concat(this.get('model.walMart'));
  }),

  sortBy: ['salePrice:asc'],
  sortedProducts: Ember.computed.sort('master', 'sortBy'),
  actions: {
    newDiscuss(discussionParams) {
      this.sendAction('newDiscuss', discussionParams);
    },
    saveProduct(product) {
      this.get('shoppingCart').add(product);
    },
    lowToHigh(){
      this.set('sortBy', ['salePrice:desc'])
    },
    highToLow(){
      this.set('sortBy', ['salePrice:asc'])
    },
    nameSort(){
      this.set('sortBy', ['name:asc'])
    },
    storeSort(){
      this.set('sortBy', ['thumbnailImage:desc'])
    }
  }
});
