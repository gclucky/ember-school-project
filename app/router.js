import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('foods', function(){
    this.route('food', {path: '/:food_id'});
    this.route('food.edit', {path: ':food_id/edit'});
  });
  this.route('about');
  this.route('contact');

});

export default Router;
