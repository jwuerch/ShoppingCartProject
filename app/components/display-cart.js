import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  totalCartCost: Ember.computed('shoppingCart.products.length',function () {
  var total = 0;
  var shoppingCart = this.get('shoppingCart');
  console.log(shoppingCart.products);
  for(var i = 0; i<this.get('shoppingCart').products.length;i++){
      total = total + this.get('shoppingCart').products[i].salePrice;
  }
  return total;

}),
  actions: {
    emptyCart() {
      this.get('shoppingCart').empty();
    },
    removeFromCart(index) {
      this.get('shoppingCart').remove(index);
    }
  }
});
