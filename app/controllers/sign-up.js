import Ember from 'ember';

export default Ember.Controller.extend({
  firebase: Ember.inject.service(),
  actions: {
    signUp() {
      let controller = this;
      this.get('firebase').createUser({
        email: this.get('email') || '',
        password: this.get('password') || '',
      }, (error, data) => {
        if (error) {
          console.log(error);
        } else {
          this.set('registerOne', false);
          controller.set('email', null);
          controller.set('password', null);
          this.transitionToRoute('sign-in');
        }
      });
    }
  }
});
