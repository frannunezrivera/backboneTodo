/*global backboneBlog, Backbone*/

backboneTodo.Collections = backboneTodo.Collections || {};

(function () {
    'use strict';

    backboneTodo.Collections.CategoriesCollection = Backbone.Collection.extend({
    	localStorage: new Backbone.LocalStorage('backbone-generator-todos-categories'),
    	model: backboneTodo.Models.CategoryModel,
        initialize: function () {
        	
    	},

    	getActiveCategories: function() {
	    	var activeCat = [];

	    	_.each(this.where({selected: true}), function(category){
	    		activeCat.push(category.get('categoryId'));
	    	});

	    	return activeCat;

	    }

    });

})();

