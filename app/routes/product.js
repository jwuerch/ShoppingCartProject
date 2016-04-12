import Ember from 'ember';

export default Ember.Route.extend({
  firebase: Ember.inject.service(),

  model(params) {
    return this.store.findRecord('discuss', params.discuss_id);
  },
  actions: {
    saveComment(params) {

      var newComment = this.store.createRecord('comment', params);
      var discuss = params.discuss;
      discuss.get('comments').addObject(newComment);
      newComment.save().then(function () {
        return discuss.save();
      })
    }
  }
});
