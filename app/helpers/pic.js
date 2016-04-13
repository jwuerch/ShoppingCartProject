import Ember from 'ember';


export function pic(params) {
  firebase: Ember.inject.service()

  var firebase = this.get('firebase');
  console.log(firebase);

  var number = 1

  return Ember.String.htmlSafe(number);
}

export default Ember.Helper.helper(pic);
