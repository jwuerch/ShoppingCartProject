import Ember from 'ember';
import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';
import FirebaseAdapter from 'emberfire/adapters/firebase';

const { inject } = Ember;

export default ToriiFirebaseAdapter.extend({
  firebase: Ember.inject.service()
});

export default FirebaseAdapter.extend({
  firebase: inject.service(),
})
