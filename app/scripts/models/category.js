/*global backboneTodo, Backbone*/

backboneTodo.Models = backboneTodo.Models || {};


(function () {
    'use strict';

    backboneTodo.Models.CategoryModel = Backbone.Model.extend({
    	defaults: {
	        title: '',
	        selected: false,
	        categoryId: 0
	        
	    },

	    toggle: function () {
	        this.save({
	            selected: !this.get('selected')
	        });
	    }


    });

})();


