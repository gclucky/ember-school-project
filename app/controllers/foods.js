import Ember from 'ember';

export default Ember.Controller.extend({


  restaurant: {name: "our Awesome Restaurant", yearsOpen: 1},
  newItem: null,

  menuLength: Ember.computed.alias('model.length'),
  availableItems: Ember.computed.filterBy('model', 'available', true),

  actions: {
    
    saveNewItem(){
      this.store.createRecord('food', {
        available: false,
        name: this.get('newItem')
      }).save()
      this.set('newItem', '');
    }
  }

});
