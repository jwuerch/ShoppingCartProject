import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sign-up');
  this.route('sign-in');
  this.authenticatedRoute('welcome');
  this.route('results', {path: '/results/:product'});
  this.route('product', {path: 'product/:product'});
  this.route('cart.js');
  this.route('cart');
});

export default Router;
