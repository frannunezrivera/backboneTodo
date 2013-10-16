/*global backboneTodo, Backbone*/

backboneTodo.Models = backboneTodo.Models || {};

(function () {
    'use strict';

    backboneTodo.Models.FilterModel = Backbone.Model.extend({
    	defaults: {
	        title: '',
	        value: '',
	        selected: false
	    },

	    toggle: function () {
	        this.save({
	            selected: !this.get('selected')
	        });
	    }
    });

})();
