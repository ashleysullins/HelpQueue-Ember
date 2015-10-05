import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveTeacher() {
      var params = {
        teacherName: this.get('teacherName') ? this.get('teacherName') : "",
        class: this.get('class') ? this.get('class') : "",
      };
      this.sendAction('saveTeacher', params);
    }
  }
});
