import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // debugger;
    return this.store.findRecord('discuss', params.discuss_id);
  },

  actions: {
    saveComment(params) {
      // var firebase = this.get('firebase');
      // console.log(firebase);
      var newComment = this.store.createRecord('comment', params);
      var discuss = params.discuss;
      discuss.get('comments').addObject(newComment);
      newComment.save().then(function () {
        return discuss.save();
      })
    }
  }
});
