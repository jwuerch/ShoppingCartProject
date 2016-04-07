import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveProduct() {
      var params1 = {
        name: this.get('name'),
        salePrice: this.get('salePrice'),
        comments: this.get('comments') ? this.get('comments') : ""
      };
      console.log(params1);
      this.sendAction('saveProduct', params1);
    }
  }
});
