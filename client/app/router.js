import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contacts');

  /*this.route('posts', { path: '/posts' }, function() {
      this.route('new');
  });*/
  this.route('events');
  this.route('grid');
});

export default Router;
