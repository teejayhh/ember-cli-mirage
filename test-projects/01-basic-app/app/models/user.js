import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { hasMany, belongsTo } from 'ember-data/relationships';

export default Model.extend({

  name: attr('string'),
  age: attr('number'),
  email: attr('string'),

  books: hasMany(),

  parent: belongsTo('user', { inverse: null })

});
