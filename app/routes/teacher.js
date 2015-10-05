import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash {
      teacher: this.store.findRecord('teacher', params.teacher_id),
      questions: this.store.findAll('question', class: teacher.class)
    }

  }
});
