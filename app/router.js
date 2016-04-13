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
  this.route('product', {path: '/product/:product_id'});
  this.route('cart.js');
  this.route('cart');
  this.route('discuss', {path: 'product/discuss/:discuss_id'});
});

export default Router;
