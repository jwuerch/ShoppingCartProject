import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('discuss');
  },
  actions: {
    productLookup(params) {
      this.transitionTo('results', params.product);
    },
    upVote(discussion) {
      var currentRank = discussion.get('rank');
      currentRank++;
      discussion.set('rank', currentRank);
      discussion.save();
    },
    downVote(discussion) {
      if (discussion.get('rank') !== 0) {
        var currentRank = discussion.get('rank');
        currentRank--;
        discussion.set('rank', currentRank);
        discussion.save();
      }
    },
    signUpTransition() {
      this.transitionTo('sign-up');
    },
    signInTransition() {
      this.transitionTo('sign-in');
    }
  }
});
