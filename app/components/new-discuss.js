import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newDiscuss() {
      var discussionParams = {
        product: this.get('model.name'),
        price: this.get('model.salePrice'),
      }
      console.log(discussionParams);
      this.sendAction('newDiscuss', discussionParams);

    }
  }
});
