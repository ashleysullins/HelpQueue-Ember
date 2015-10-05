import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveTicket(params) {
      var newQuestion = this.store.createRecord('ticket', params);
      newQuestion.save();
      this.transitionTo('success');
    }
  }
});
