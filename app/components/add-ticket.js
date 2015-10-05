import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveTicket() {
      var params = {
        names: this.get('names') ? this.get('names') : "",
        question: this.get('question') ? this.get('question') : "",
        date_added: Date.now()
      };
      this.sendAction('saveTicket', params);
    }
  }
});
