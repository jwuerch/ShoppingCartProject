import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['salePrice:asc'],
  sortedProducts: Ember.computed.sort('model', 'sortBy'),
  actions: {
    newDiscuss(discussionParams) {
      this.sendAction('newDiscuss', discussionParams);
    }
  }
});
