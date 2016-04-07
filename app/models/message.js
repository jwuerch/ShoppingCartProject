import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  product: DS.belongsTo('product', {async: true})
});
