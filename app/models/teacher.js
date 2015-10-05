import DS from 'ember-data';

export default DS.Model.extend({
  teacherName: DS.attr(),
  class: DS.attr(),
  tickets: DS.hasMany('ticket', {async:true})
});
