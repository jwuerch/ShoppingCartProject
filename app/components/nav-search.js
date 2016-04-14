import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    navLookup() {
      console.log("nav search js")
      var params = {
        product: this.get('product')
      };
      this.set('product', '')
      this.sendAction('navLookup', params);
    }
  }
});
