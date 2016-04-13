import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    updateDiscuss(discuss) {
      var params = {
      category: this.get('category'),
      notes:this.get('notes'),
    };
    this.sendAction('updateDiscuss', discuss, params)
    }
  }
});
