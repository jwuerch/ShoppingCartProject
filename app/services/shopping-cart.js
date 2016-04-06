import Ember from 'ember';

export default Ember.Service.extend({
  products: [],

  add(product) {
    this.get('products').pushObject(product);
  }
});
