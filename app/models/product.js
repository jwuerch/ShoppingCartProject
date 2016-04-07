import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  salePrice: DS.attr(),
  comments: DS.hasMany('comment', {async: true})
});
