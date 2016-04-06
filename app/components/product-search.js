import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    productLookup() {
      var params = {
        product: this.get('product')
      };
      this.sendAction('productLookup', params);
    }
  }
});
