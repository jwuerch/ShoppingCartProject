import Ember from 'ember';

export default Ember.Component.extend({
    firebase: Ember.inject.service(),

  actions: {
    newDiscuss() {
        var firebase = this.get('firebase');
        console.log(firebase);
        console.log(this.get('session'))
        var author = firebase.repo.auth.authData_.password.email;
        var newImage = firebase.repo.auth.authData_.password.profileImageURL;

        var splitAuthor = author.split('');
        var newName = '';

        for(var i = 0; i<splitAuthor.length; i++){
          if(splitAuthor[i] === "@"){
            break;
          }else {
          newName += splitAuthor[i]
          }
        }
      var discussionParams = {
        author: newName,
        authorImage: newImage,
        product: this.get('model.name'),
        price: this.get('model.salePrice'),
        image: this.get('image') ? this.get('image'):"",
        description:this.get('description') ? this.get('description'):"",
        category: this.get('category')? this.get('category'):"",
        notes:this.get('notes')? this.get('notes'):"",
        rank: 0,
        date: Date()
      }
      console.log("first function params" +discussionParams.category);
      this.sendAction('newDiscuss', discussionParams);

    }
  }
});
