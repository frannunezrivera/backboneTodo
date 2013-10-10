/*global backboneTodo, Backbone*/

backboneTodo.Models = backboneTodo.Models || {};

(function () {
    'use strict';

    backboneTodo.Models.TodoModel = Backbone.Model.extend({
    	defaults: {
	        title: '',
	        completed: false,
	        category: 0
	    },
	 
	    toggle: function () {
	        this.save({
	            completed: !this.get('completed')
	        });
	    }
    });

})();
