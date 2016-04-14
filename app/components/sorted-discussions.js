import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['comments.length:desc'],
  sortedDiscussions: Ember.computed.sort('model', 'sortBy'),
  actions:{
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
    sortByVotes() {
      this.set('sortBy', ['rank:desc']);
    },
    sortByComments() {
      this.set('sortBy', ['comments.length:desc']);
    },
    sortByDate() {
      this.set('sortBy', ['date:desc']);
    }
  }
});
