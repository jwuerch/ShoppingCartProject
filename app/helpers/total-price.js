import Ember from 'ember';

export function totalPrice(params) {
  var test1 = params[0];
  var total = 0;
  test1.forEach(function(product) {
   total += product.get('salePrice');
  });
  return total;
}

export default Ember.Helper.helper(totalPrice);
