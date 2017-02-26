import DS from 'ember-data';


export default DS.Model.extend({
  name: DS.attr('string'),
  available: DS.attr('boolean'),
  description: DS.attr('string'),
  typeOfFood: DS.attr('boolean'),
  whatType: DS.attr('string'),
  imageUrl: DS.attr('string')

});
