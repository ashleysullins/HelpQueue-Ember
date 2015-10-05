import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('teacher');
  },
  actions: {
    saveTeacher(params) {
      var newTeacher = this.store.createRecord('teacher', params);
      newTeacher.save(),
      this.transitionTo('teachers');
    }
  }
});
