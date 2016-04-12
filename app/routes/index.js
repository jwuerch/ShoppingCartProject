import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('discuss');
  },
  actions: {
    productLookup(params) {
      this.transitionTo('results', params.product);
    }
  }
});
