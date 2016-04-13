import Ember from 'ember';

export default Ember.Component.extend({
  firebase: Ember.inject.service(),

  actions: {
    saveComment() {
      var firebase = this.get('firebase');
      console.log(firebase);
      console.log(this.get('session'))
      var author = firebase.repo.auth.authData_.password.email
      var newImage = firebase.repo.auth.authData_.password.profileImageURL

      var splitAuthor = author.split('');
      var newName = '';

      for(var i = 0; i<splitAuthor.length; i++){
        if(splitAuthor[i] === "@"){
          break;
        }else {
        newName += splitAuthor[i]
        }
      }
      var params = {
        author: newName,
        authorImage: newImage,
        content: this.get('content'),
        discuss: this.get('discuss')
      };
      this.sendAction('saveComment', params);
    }
  }
});
