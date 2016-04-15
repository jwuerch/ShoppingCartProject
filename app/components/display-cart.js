import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  totalCartCost: Ember.computed('shoppingCart.products.length',function () {
  var total = 0;
  var shoppingCart = this.get('shoppingCart');
  for(var i = 0; i<this.get('shoppingCart').products.length;i++){
      if(this.get('shoppingCart').products[i].salePrice){
      total = total + this.get('shoppingCart').products[i].salePrice
      } else if(this.get('shoppingCart').products[i]._internalModel._data.price){
      total = total + this.get('shoppingCart').products[i]._internalModel._data.price
      }
  }
  return total.toFixed(2);

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
