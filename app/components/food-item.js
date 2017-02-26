import Ember from 'ember';

export default Ember.Component.extend({
 isOpen: false,
 actions: {
  //  makeUnavailable(food){
  //    Ember.set(food, 'available', false);
  //    food.save();
  //  },
  //  makeAvailable(food){
  //    Ember.set(food, 'available', true);
  //    food.save();
  //  }
  // toggleAvailable(food) {
  //   Ember.set(food, 'available', !food.get('available') );
  //   food.save();
  // },
  // toggleOpen()  {
  //   this.set('isOpen', !this.get('isOpen'));
  // }
  toggleAvailable(food) {
    food.toggleProperty('available');
  },
  toggleOpen() {
    this.toggleProperty('isOpen');
  }
 }

});
