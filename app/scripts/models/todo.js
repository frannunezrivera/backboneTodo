/*global backboneTodo, Backbone*/

backboneTodo.Models = backboneTodo.Models || {};

(function () {
    'use strict';

    backboneTodo.Models.TodoModel = Backbone.Model.extend({
    	defaults: {
	        title: '',
	        completed: false,
	        categories: [] 
	    },
	 
	    toggle: function () {
	        this.save({
	            completed: !this.get('completed')
	        });
	    }
    });

})();
