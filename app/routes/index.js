import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    productLookup(params) {
      this.transitionTo('results', params.product);
    }
  }
});
