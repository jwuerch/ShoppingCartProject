import Ember from 'ember';

export default Ember.Service.extend({
  products: [],

  add(product) {
    this.get('products').pushObject(product);
  },
  remove(index) {
    this.get('products').removeAt(index);
  },
  empty() {
    this.get('products').clear();
  }

});
