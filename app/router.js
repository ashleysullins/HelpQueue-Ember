import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('teachers');
  this.route('success');
  this.route('teacher', {path: '/teacher/:teacher_id'});
});

export default Router;
