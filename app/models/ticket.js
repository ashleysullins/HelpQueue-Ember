import DS from 'ember-data';

export default DS.Model.extend({
  names: DS.attr(),
  question: DS.attr(),
  class: DS.attr(),
  date_added: DS.attr()
});
