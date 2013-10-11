/*global backboneTodo, Backbone*/

backboneTodo.Collections = backboneTodo.Collections || {};

(function () {
    'use strict';

    backboneTodo.Collections.TodosCollection = Backbone.Collection.extend({
    	localStorage: new Backbone.LocalStorage('backbone-generator-todos'),
        
        initialize: function () {
       		this.model = backboneTodo.Models.TodoModel;
    	},

    	filterByCategoryIds: function() {
    		var ActiveCat = backboneTodo.dat.CategoriesCollection.getActiveCategories();
	        var filtered = this.filter(function(todo) {

	            return (_.intersection(todo.get('categories'),ActiveCat).length >= 1); 
	        });

	        return filtered;
	    },
    });

})();
