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
                var catIds=[]; 

                _.each(todo.get('categories'), function(c){ 
                    catIds.push(c.id);
                });

	            return (_.intersection(catIds,ActiveCat).length >= 1); 
	        });

	        return filtered;
	    },
    });

})();
