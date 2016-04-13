import Model from 'ember-data/model';

export default Model.extend({
  product: DS.attr(),
  price: DS.attr(),
  comments: DS.hasMany('comment', {async: true}),
  category: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  notes: DS.attr()
});
