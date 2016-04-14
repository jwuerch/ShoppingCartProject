import Ember from 'ember';

export function storeName(product) {
  var string = product[0].thumbnailImage;
  if (string.indexOf("BestBuy")!=-1){
    return "BestBuy";
  }else if (string.indexOf("walmart")!=-1){
    return "Walmart"
  }
}

export default Ember.Helper.helper(storeName);
