import Ember from 'ember';

export default Ember.Component.extend({
    firebase: Ember.inject.service(),

  actions: {
    newDiscuss() {
        var firebase = this.get('firebase');
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
        image: this.get('model.thumbnailImage') ? this.get('model.thumbnailImage'):"",
        description:this.get('model.shortDescription') ? this.get('model.shortDescription'):"",
        category: this.get('category')? this.get('category'):"",
        notes:this.get('notes')? this.get('notes'):"",
        rank: 0,
        date: Date()
      }
      console.log(discussionParams);
      this.sendAction('newDiscuss', discussionParams);

    }
  }
});
