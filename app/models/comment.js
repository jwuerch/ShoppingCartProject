import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  discuss: DS.belongsTo('discuss', {async: true})
});
