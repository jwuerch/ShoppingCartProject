import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newDiscuss() {
      var discussionParams = {
        product: this.get('model.name'),
        price: this.get('model.salePrice'),
        image: this.get('image') ? this.get('image'):"",
        description:this.get('description') ? this.get('description'):"",
        ///////////
        category: this.get('category')? this.get('category'):"",
        notes:this.get('notes')? this.get('notes'):""
      }
      console.log("first function params" +discussionParams.product);
      this.sendAction('newDiscuss', discussionParams);

    }
  }
});
